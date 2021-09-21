const releaseRules = [
  { scope: 'no-release', release: false },
  { scope: 'release', release: false },
  { type: 'build', release: 'patch' },
  { type: 'ci', release: 'patch' },
  { type: 'chore', release: 'patch' },
  { type: 'docs', release: false },
  { type: 'feat', release: 'minor' },
  { type: 'fix', release: 'patch' },
  { type: 'perf', release: 'patch' },
  { type: 'refactor', release: 'patch' },
  { type: 'revert', release: 'patch' },
  { type: 'style', release: 'patch' },
  { type: 'test', release: 'patch' },
];

module.exports = {
  branches: ['main', { name: 'release-candidate', prerelease: true }],
  releaseRules,
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules,
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        presetConfig: {
          types: [
            { type: 'build', section: 'Build System' },
            { type: 'ci', section: 'Continuous Integration' },
            { type: 'chore', section: 'Chores' },
            { type: 'docs', section: 'Documentation' },
            { type: 'feat', section: 'Features' },
            { type: 'fix', section: 'Bug Fixes' },
            { type: 'perf', section: 'Performance Improvements' },
            { type: 'refactor', section: 'Code Refactoring' },
            { type: 'revert', section: 'Reverts' },
            { type: 'style', section: 'Styles' },
            { type: 'test', section: 'Tests' },
            { type: 'default', section: 'Miscellaneous' },
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
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'package-lock.json'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    '@semantic-release/github',
  ],
  preset: 'angular',
  debug: true,
};
