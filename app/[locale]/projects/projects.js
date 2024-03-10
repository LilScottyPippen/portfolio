import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { redirect } from 'next/navigation'

export default function getSortedProjectsData({locale}) {
  const projectsDirectory = path.join(process.cwd(), `projects/${locale}`);
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allProjectsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getProjectData(id, locale){
  try {
    const projectsDirectory = path.join(process.cwd(), `projects/${locale}`);
    const fullPath = path.join(projectsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      content: matterResult.content,
      ...matterResult.data,
    };
  } catch (error) {
    redirect('/projects')
  }
}