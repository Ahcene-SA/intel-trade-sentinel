import { describe, expect, it } from "vitest";
import { dict, LANGS } from "@/lib/i18n";
import { hygieneService, roboticsService, securityOfferings } from "@/lib/security-offerings";

describe("Security domains", () => {
  it.each(LANGS)("provides exactly eight domains in %s", (lang) => {
    expect(dict[lang].services).toHaveLength(8);
  });

  it.each(LANGS)("includes robotics once as the first domain in %s", (lang) => {
    const robotics = roboticsService(lang);
    expect(dict[lang].services[0]).toEqual(robotics);
    expect(dict[lang].services.filter((service) => service.short === robotics.short)).toHaveLength(1);
  });

  it.each([
    ["fr", "Intrusion"], ["en", "Intrusion"], ["nl", "Inbraak"],
  ] as const)("places intrusion immediately after robotics in %s", (lang, intrusion) => {
    expect(dict[lang].services[1]?.short).toBe(intrusion);
  });

  it.each([
    ["fr", "Alarmes"], ["en", "Alarms"], ["nl", "Alarmen"],
  ] as const)("removes the standalone alarm solution in %s", (lang, alarm) => {
    expect(dict[lang].services.some((service) => service.short === alarm)).toBe(false);
  });

  it.each([
    ["fr", "Santé"], ["en", "Health"], ["nl", "Gezondheid"],
  ] as const)("renames the defibrillator domain to health in %s", (lang, health) => {
    expect(dict[lang].services[5]?.short).toBe(health);
    expect(dict[lang].services[5]?.items).toHaveLength(4);
  });

  it.each(LANGS)("places hygiene immediately after health in %s", (lang) => {
    expect(dict[lang].services[6]).toEqual(hygieneService(lang));
    expect(dict[lang].services.filter((service) => service.short === hygieneService(lang).short)).toHaveLength(1);
  });

  it.each(LANGS)("includes cybersecurity once as the eighth domain in %s", (lang) => {
    const cyber = securityOfferings[lang].cyber;
    expect(dict[lang].services[7]?.short).toBe(cyber.label);
    expect(dict[lang].services.filter((service) => service.short === cyber.label)).toHaveLength(1);
    expect(dict[lang].services[7]?.items).toHaveLength(4);
  });
});