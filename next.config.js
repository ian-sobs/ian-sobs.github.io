/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

// Replace 'your-repo-name' with your exact GitHub repository name
const repoName = 'portfolio'; 

const nextConfig = {
  output: 'export', // Required for GitHub Pages static export
  basePath: isGithubActions ? `/${repoName}` : '',
};

export default nextConfig;