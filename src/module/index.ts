import { Rule, SchematicContext, Tree, apply, url, template, move, chain, mergeWith } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

export function module(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const templateSource = apply(url('./files'), [
      template({
        ..._options,
        ...strings,
      }),
      move(_options.path || 'src'),
    ]);

    // Use mergeWith to create a rule from the template source
    return chain([mergeWith(templateSource)])(tree, _context);
  };
}
