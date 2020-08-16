module.exports = (profile) => {
  let designerTagsObject = {};
  let description = profile.description;
  function addDesignerTags(searchTerms, objectTag) {
    const upperCaseDescription = description.toUpperCase();

    if (searchTerms.some((term) => upperCaseDescription.includes(term))) {
      designerTagsObject[objectTag] = true;
    } else {
      designerTagsObject[objectTag] = false;
    }
  }
  addDesignerTags(["PRODUCT DESIGN"], "product");
  addDesignerTags(["DESIGN SYSTEM"], "systems");
  addDesignerTags(["CONTENT STRATEG"], "content");
  addDesignerTags(["MANAGER"], "manager");
  addDesignerTags(["LEAD"], "lead");
  addDesignerTags(["AUTHOR"], "author");
  addDesignerTags(["SPEAKER"], "speaker");
  addDesignerTags(["GRAPHIC DESIGN"], "graphic");
  addDesignerTags(["ENGINEER"], "engineer");
  addDesignerTags(["ILLUSTRAT"], "illustrator");
  addDesignerTags(["RESEARCH"], "research");
  addDesignerTags(["WEB DESIGN"], "web");
  addDesignerTags(["FOUNDER"], "founder");
  addDesignerTags(["HEAD OF"], "head");
  addDesignerTags(["WRITER"], "writer");
  addDesignerTags(["FREELANCE"], "freelance");
  addDesignerTags(["CREATIVE DIRECT"], "creative");
  addDesignerTags(["ART DIRECT"], "art");
  addDesignerTags(["DEVELOPER"], "developer");
  addDesignerTags(
    ["DIRECTOR", "ART DIRECTOR", "CREATIVE DIRECTOR"],
    "director"
  );
  addDesignerTags(["USER EXPERIENCE", "UX"], "ux");
  addDesignerTags(["LETTERER", "LETTERING"], "letter");
  addDesignerTags(["VP"], "vp");
  addDesignerTags(["CEO"], "ceo");

  return designerTagsObject;
};
