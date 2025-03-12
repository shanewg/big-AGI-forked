# Reference Notes

## Syncing Forked Repo with Upstream

To sync your forked repository with the upstream repository using GitHub CLI (`gh`), use the following command:

```sh
gh repo sync
```

### Syncing a Specific Branch

To sync a specific branch, use the `--branch` option:

```sh
gh repo sync --branch <branch-name>
```

### Handling Uncommitted Changes

If you have uncommitted or untracked changes, stash them before syncing:

1. Stash your changes:

   ```sh
   git stash --all
   ```

2. Run the sync command:

   ```sh
   gh repo sync --branch <branch-name>
   ```

3. Apply the stashed changes back:
   ```sh
   git stash pop
   ```
