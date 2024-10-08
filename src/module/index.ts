import { Rule, SchematicContext, Tree, apply, url, template, move, chain, mergeWith } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

export function module(_options: any): Rule {
  const _name = _options.name || 'mock';
  const _names = _options.names || _name + 's';

  const name = strings.dasherize(_name);
  const names = strings.dasherize(_names);
  const Name = strings.classify(name);
  const Names = strings.classify(names);
  const NAMES = names.toUpperCase();
  return (tree: Tree, _context: SchematicContext) => {
    const templateSource = apply(url('./files'), [
      template({
        ..._options,
        name,
        names,
        Name,
        Names,
        NAMES,
        ...strings,
        uppercase: (str: string) => str.toUpperCase(),
      }),
      move(`dist/${names}`),
    ]);

    // Use mergeWith to create a rule from the template source
    return chain([mergeWith(templateSource)])(tree, _context);
  };
}
