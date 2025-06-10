// src/routes/admin/+page.server.js
import { writeFileSync, readFileSync } from 'fs';
import { join } from 'path';
import { fail, redirect } from '@sveltejs/kit';
import { mkdir } from 'fs/promises';

const PROJECTS_PATH = join(process.cwd(), 'src/lib/data/projects.json');
const SITE_PATH = join(process.cwd(), 'src/lib/data/site.json');
const UPLOADS_DIR = join(process.cwd(), 'static/assets');

const ADMIN_USER = 'admin';
const ADMIN_PASS = 'yourpassword';

// Helper function to save uploaded image
async function saveImage(imageFile) {
  if (!imageFile || !imageFile.size) return null;
  
  // Ensure uploads directory exists
  try {
    await mkdir(UPLOADS_DIR, { recursive: true });
  } catch (e) {
    // Directory might already exist
  }
  
  const timestamp = Date.now();
  const filename = `${timestamp}-${imageFile.name}`;
  const filepath = join(UPLOADS_DIR, filename);
  
  const buffer = Buffer.from(await imageFile.arrayBuffer());
  writeFileSync(filepath, buffer);
  
  return `/assets/${filename}`;
}

// Helper function to save uploaded file (image or resume)
async function saveFile(file) {
  if (!file || !file.size) return null;
  try {
    await mkdir(UPLOADS_DIR, { recursive: true });
  } catch (e) {}
  const timestamp = Date.now();
  const filename = `${timestamp}-${file.name}`;
  const filepath = join(UPLOADS_DIR, filename);
  const buffer = Buffer.from(await file.arrayBuffer());
  writeFileSync(filepath, buffer);
  return `/assets/${filename}`;
}

export async function load({ cookies }) {
  if (cookies.get('admin_auth') !== ADMIN_PASS) {
    return { needsLogin: true };
  }
  try {
    const projectsData = readFileSync(PROJECTS_PATH, 'utf-8');
    const projects = JSON.parse(projectsData);

    // Also load resume if needed
    let resume = '';
    try {
      const siteData = readFileSync(SITE_PATH, 'utf-8');
      resume = JSON.parse(siteData).resume || '';
    } catch {}

    return {
      projects,
      resume
    };
  } catch (err) {
    return {
      projects: [],
      resume: ''
    };
  }
}
export const actions = {
  login: async ({ request, cookies }) => {
    const data = await request.formData();
    const user = data.get('username');
    const pass = data.get('password');
    if (user === ADMIN_USER && pass === ADMIN_PASS) {
      cookies.set('admin_auth', ADMIN_PASS, { path: '/admin', httpOnly: true });
      throw redirect(303, '/admin');
    }
    return fail(401, { error: 'Invalid credentials' });
  },
  addProject: async ({ request }) => {
    const data = await request.formData();
    const imageFile = data.get('imageFile');
    const imagePath = await saveImage(imageFile) || data.get('imagePath') || '';
    
    const newProject = {
      name: data.get('name'),
      url: data.get('url'),
      image: imagePath,
      description: data.get('description'),
      github: data.get('github'),
      label: data.get('label'),
      tags: data.get('tags') ? data.get('tags').split(',').map(t => t.trim()) : []
    };

    try {
      const projectsData = readFileSync(PROJECTS_PATH, 'utf-8');
      const projects = JSON.parse(projectsData);
      projects.push(newProject);
      writeFileSync(PROJECTS_PATH, JSON.stringify(projects, null, 2));
      return { success: true };
    } catch (error) {
      return fail(500, { error: 'Failed to save project' });
    }
  },

  updateProject: async ({ request }) => {
    const data = await request.formData();
    const projectName = data.get('originalName');
    const imageFile = data.get('imageFile');
    
    // Get existing project to preserve current image if no new one uploaded
    const projectsData = readFileSync(PROJECTS_PATH, 'utf-8');
    const projects = JSON.parse(projectsData);
    const existingProject = projects.find(p => p.name === projectName);
    
    const imagePath = await saveImage(imageFile) || data.get('imagePath') || existingProject?.image || '';
    
    const updatedProject = {
      name: data.get('name'),
      url: data.get('url'),
      image: imagePath,
      description: data.get('description'),
      github: data.get('github'),
      label: data.get('label'),
      tags: data.get('tags') ? data.get('tags').split(',').map(t => t.trim()) : []
    };

    try {
      const index = projects.findIndex(p => p.name === projectName);
      
      if (index !== -1) {
        projects[index] = updatedProject;
        writeFileSync(PROJECTS_PATH, JSON.stringify(projects, null, 2));
        return { success: true };
      }
      return fail(404, { error: 'Project not found' });
    } catch (error) {
      return fail(500, { error: 'Failed to update project' });
    }
  },

  deleteProject: async ({ request }) => {
    const data = await request.formData();
    const projectName = data.get('name');

    try {
      const projectsData = readFileSync(PROJECTS_PATH, 'utf-8');
      const projects = JSON.parse(projectsData);
      const filteredProjects = projects.filter(p => p.name !== projectName);
      writeFileSync(PROJECTS_PATH, JSON.stringify(filteredProjects, null, 2));
      return { success: true };
    } catch (error) {
      return fail(500, { error: 'Failed to delete project' });
    }
  },


  updateResume: async ({ request }) => {
    const data = await request.formData();
    const resumeFile = data.get('resumeFile');
    const resumePath = await saveFile(resumeFile) || data.get('resumePath') || '';
    if (!resumePath) {
      return fail(400, { error: 'No resume file or path provided' });
    }
    try {
      let site = {};
      try {
        site = JSON.parse(readFileSync(SITE_PATH, 'utf-8'));
      } catch {}
      site.resume = resumePath;
      writeFileSync(SITE_PATH, JSON.stringify(site, null, 2));
      return { success: true, resume: resumePath };
    } catch (error) {
      return fail(500, { error: 'Failed to update resume' });
    }
  }
};