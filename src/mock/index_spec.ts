import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import * as path from 'path';
import { Tree } from "@angular-devkit/schematics";

// Define the path to your schematic collection (i.e., where your collection.json is)
const collectionPath = path.join(__dirname, '../collection.json');

describe('mock', () => {
  const runner = new SchematicTestRunner('schematics', collectionPath);

  it('creates a mock.ts file', async () => {
    // Execute the schematic
    const tree: UnitTestTree = await runner.runSchematic('mock', {}, Tree.empty());

    // Check that the file was created
    expect(tree.files).toContain('/mock.ts');

    // Optionally check the content
    const fileContent = tree.readContent('/mock.ts');
    expect(fileContent).toContain("export const mock = 'This is a generated mock file';");
  });
});
