import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const html = readFileSync(new URL("../out/index.html", import.meta.url), "utf8");
const de = JSON.parse(readFileSync(new URL("../locales/de.json", import.meta.url), "utf8"));

test("EduComic is a featured project while its award remains visible", () => {
  assert.match(html, /aria-label="Open EduComic"/);
  assert.match(html, /href="https:\/\/bentheurich\.github\.io\/EduComic\/"/);
  assert.match(html, /src="\/projects\/educomic-cover\.png"/);
  assert.doesNotMatch(html, /aria-label="Open SecuriKey"/);
  assert.match(html, /aria-label="Open Hackathon Winner — EduComic"/);
});

test("the German project card has complete localized copy", () => {
  assert.equal(de.projects.cards.eduComic.title, "EduComic");
  assert.equal(de.projects.cards.eduComic.links.liveDemo, "Live-Demo");
  assert.equal(de.projects.cards.eduComic.links.github, "GitHub");
  assert.equal(de.projects.cards.eduComic.links.pitchDeck, "Pitch-Deck");
});

test("the Time Series Annotator card links to Tandem Diabetes Care", () => {
  assert.match(html, /href="https:\/\/www\.tandemdiabetes\.com\/"/);
});

test("achievement actions use the shared pill hierarchy", () => {
  const start = html.indexOf('<section id="achievements"');
  const end = html.indexOf('<section id="experience"');
  const achievementsHtml = html.slice(start, end);
  const primaryLinkedInActions = achievementsHtml.match(
    /class="project-action-link project-action-link-primary"[^>]*><span>LinkedIn<\/span>/g,
  );
  const secondaryActions = achievementsHtml.match(
    /class="project-action-link project-action-link-secondary"/g,
  );

  assert.notEqual(start, -1);
  assert.notEqual(end, -1);
  assert.equal(primaryLinkedInActions?.length, 3);
  assert.equal(secondaryActions?.length, 4);
});
