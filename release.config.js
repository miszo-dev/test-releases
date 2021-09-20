module.exports = {
  branches: ['main', { name: 'release-candidate', prerelease: true }],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
    '@semantic-release/git',
  ],
  preset: 'angular',
  debug: true,
};
