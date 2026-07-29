import assert from "node:assert/strict";
import { existsSync, statSync } from "node:fs";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import {
  designProjects,
  photographyProjects,
  projectDetails,
  storyProjects,
  videoProjects,
} from "../src/data/projects.js";

const repositoryRoot = fileURLToPath(new URL("../", import.meta.url));
const localAssetPath = (asset) =>
  fileURLToPath(new URL(`static${asset}`, `file://${repositoryRoot}`));

const projectsWithLocalMedia = [
  ...photographyProjects,
  ...designProjects,
  ...storyProjects,
  ...videoProjects,
];

test("every local project asset exists and is production-sized", () => {
  for (const project of projectsWithLocalMedia) {
    const assets = [
      ...(project.images ?? []),
      ...(project.cover ? [project.cover] : []),
    ];

    for (const asset of new Set(assets)) {
      const path = localAssetPath(asset);
      assert.ok(existsSync(path), `${asset} should exist in static`);
      assert.ok(
        statSync(path).size < 1_500_000,
        `${asset} should remain below 1.5 MB`,
      );
    }
  }
});

test("case-study slugs are unique and resolve to detail data", () => {
  const caseStudies = [...designProjects, ...storyProjects];
  const slugs = caseStudies.map((project) => project.slug);

  assert.equal(new Set(slugs).size, slugs.length);
  assert.deepEqual(Object.keys(projectDetails).sort(), [...slugs].sort());
});

test("external project links point to specific work", () => {
  const links = [
    ...photographyProjects.map((project) => project.link),
    ...videoProjects.map((project) => project.link),
  ];

  for (const link of links) {
    const url = new URL(link);
    assert.notEqual(url.pathname, "/");
    assert.match(url.protocol, /^https:$/);
  }
});
