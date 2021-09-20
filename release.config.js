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
    [
      '@semantic-release/release-notes-generator',
      {
        presetConfig: {
          types: [
            { type: 'feat', section: 'Features' },
            { type: 'fix', section: 'Bug Fixes' },
            { type: 'refactor', section: 'Refactor' },
            { type: 'test', section: 'Tests' },
            { type: 'docs', section: 'Documentation' },
            { type: 'perf', section: 'Performance' },
            { type: 'style', section: 'Styles' },
            { type: 'chore', section: 'Chores' },
          ],
        },
      },
    ],
    [
      '@semantic-release/npm',
      {
        npmPublish: false,
      },
    ],
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'package-lock.json'],
      },
    ],
  ],
  preset: 'angular',
  debug: true,
};
