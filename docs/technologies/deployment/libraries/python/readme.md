## Publish to pypi

### Install tools for publishing

- Install build
  &gt; python -m pip install --upgrade build
- Install twine
  &gt; python -m pip install --upgrade twine

### Build and compile python package

- make sure to delete existing `dist/` folders before building
  &gt; python -m build

### Deploy to pypi

&gt; twine upload dist/\*
