module.exports = {
  branches: ['main', { name: 'release-candidate', prerelease: true }],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [
          { type: 'docs', release: false },
          { scope: 'no-release', release: false },
          { type: 'chore', release: 'patch' },
          { type: 'fix', release: 'patch' },
          { type: 'refactor', release: 'patch' },
          { type: 'test', release: 'patch' },
          { type: 'perf', release: 'patch' },
          { type: 'style', release: 'patch' },
          { type: 'build', release: 'patch' },
          { type: 'feat', release: 'minor' },
        ],
      },
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
    '@semantic-release/git',
  ],
  preset: 'angular',
  debug: true,
};
