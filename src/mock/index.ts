import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function mock(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    // Create content for the file
    const content = `export const mock = 'This is a generated mock file';`;

    // Create the new file in the tree
    tree.create('mock.ts', content);

    return tree;
  };
}
