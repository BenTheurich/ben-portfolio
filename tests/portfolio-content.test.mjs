import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const html = readFileSync(new URL("../out/index.html", import.meta.url), "utf8");
const en = JSON.parse(readFileSync(new URL("../locales/en.json", import.meta.url), "utf8"));
const de = JSON.parse(readFileSync(new URL("../locales/de.json", import.meta.url), "utf8"));

test("the Hefex timeline separates the completed IDP from the part-time role", () => {
  assert.equal(en.experience.roles.hefexIdp.period, "Mar 2026 – Aug 2026");
  assert.equal(en.experience.roles.hefexPartTime.period, "Aug 2026 – Present");
  assert.equal(de.experience.roles.hefexIdp.period, "März 2026 – August 2026");
  assert.equal(de.experience.roles.hefexPartTime.period, "August 2026 – heute");
  assert.match(html, /Software &amp; AI Engineer \(Part-time\)/);
});

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

test("LedBoard links to its demo video and GitHub", () => {
  const card = [...html.matchAll(/<article\b[^>]*>[\s\S]*?<\/article>/g)]
    .map(([markup]) => markup)
    .find((markup) => markup.includes('aria-label="Open LedBoard"'));

  assert.ok(card, "the LedBoard card is present");
  assert.match(card, /src="\/projects\/ledboard-cover\.webp"/);
  assert.match(card, /href="https:\/\/github.com\/BenTheurich\/LedBoard"/);
  assert.match(card, /href="https:\/\/photos\.google\.com\/share\/[^\"]+\/photo\/[^\"]+\?key=/);
  assert.doesNotMatch(card, /disabled=""/);
  assert.doesNotMatch(card, /href="(?:#|undefined|)"/);
  assert.equal(en.projects.cards.ledBoard.links.demoVideo, "Demo video");
  assert.equal(de.projects.cards.ledBoard.links.demoVideo, "Demo-Video");
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
