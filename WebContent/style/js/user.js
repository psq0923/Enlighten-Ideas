webpackJsonp([3],{

/***/ 101:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_editButton": __webpack_require__(89).template,"profile/_overlays/_projectOverlay": __webpack_require__(211).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"js-item cover-block project-cover js-project-cover editable cfix\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\"");if(t.s(t.f("ordinal_id",c,p,1),c,p,0,109,139,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" data-ordinal=\"");t.b(t.v(t.f("ordinal_id",c,p,0)));t.b("\"");});c.pop();}t.b(">");t.b("\n" + i);if(t.s(t.f("is_collection_editable",c,p,1),c,p,0,185,215,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_editButton0",c,p,"    "));});c.pop();}if(!t.s(t.f("is_collection_editable",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("is_editable",c,p,1),c,p,0,291,339,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<profile/_overlays/_projectOverlay1",c,p,"    "));});c.pop();}};t.b("  <div class=\"cover-img\">");t.b("\n" + i);t.b("    <a href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" class=\"cover-img-link\">");t.b("\n" + i);if(t.s(t.d("covers.404",c,p,1),c,p,0,479,1016,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <picture class=\"cover-img-el\">");t.b("\n" + i);t.b("        <source srcset=\"");t.b(t.v(t.d("covers.202",c,p,0)));t.b(", ");t.b(t.v(t.d("covers.404",c,p,0)));t.b(" 2x\" media=\"(-webkit-min-device-pixel-ratio: 1.3),");t.b("\n" + i);t.b("           (min--moz-device-pixel-ratio: 1.3),");t.b("\n" + i);t.b("           (-o-min-device-pixel-ratio: 4/3),");t.b("\n" + i);t.b("           (min-device-pixel-ratio: 1.3),");t.b("\n" + i);t.b("           (min-resolution: 1.3dppx)\">");t.b("\n" + i);t.b("        <img class=\"cover-img-el\" srcset=\"");t.b(t.v(t.d("covers.202",c,p,0)));t.b(", ");t.b(t.v(t.d("covers.404",c,p,0)));t.b(" 2x\" alt=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\">");t.b("\n" + i);t.b("      </picture>");t.b("\n" + i);t.b("    <noscript><img alt=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\" title=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\" src=\"");t.b(t.v(t.d("covers.202",c,p,0)));t.b("\" class=\"cover-img-el\" /></noscript>");t.b("\n" + i);});c.pop();}if(!t.s(t.d("covers.404",c,p,1),c,p,1,0,0,"")){t.b("      <img src=\"");t.b(t.v(t.d("covers.202",c,p,0)));t.b("\" alt=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\" title=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\" class=\"cover-img-el\" data-pin-nopin=\"nopin\" />");t.b("\n" + i);};t.b("    </a>");t.b("\n" + i);t.b("  </div>");t.b("\n");t.b("\n" + i);if(t.s(t.f("private",c,p,1),c,p,0,1216,1541,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("\n" + i);t.b("    <div class=\"tooltipi-container project-private pointer\">");t.b("\n");t.b("\n" + i);t.b("      <div class=\"beicons-pre beicons-pre-privacy\"></div>");t.b("\n");t.b("\n" + i);t.b("      <div class=\"tooltipi\">");t.b("\n" + i);t.b("        ");if(t.s(t.f("translate",c,p,1),c,p,0,1390,1453,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_cover_marked_private|This project is marked as private.");});c.pop();}t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("    </div> <!-- .tooltipi-container .project-private -->");t.b("\n");t.b("\n" + i);});c.pop();}t.b("\n");t.b("\n" + i);t.b("  <div class=\"cover-info-stats\">");t.b("\n");t.b("\n" + i);t.b("    <div class=\"cover-info\">");t.b("\n");t.b("\n" + i);t.b("      <div class=\"cover-name\">");t.b("\n" + i);t.b("        <a href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" class=\"projectName cover-name-link\">");t.b(t.v(t.f("name",c,p,0)));t.b("</a>");t.b("\n" + i);t.b("      </div>");t.b("\n");t.b("\n" + i);t.b("      <div class=\"cover-by-wrap\">");t.b("\n" + i);t.b("        <div class=\"cover-by-link");if(!t.s(t.f("multiple_owners",c,p,1),c,p,1,0,0,"")){t.b(" text-ellipsis");};t.b(" ");if(t.s(t.f("multiple_owners",c,p,1),c,p,0,1882,1899,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("multiple-cover-by");});c.pop();}t.b("\">");t.b("\n" + i);t.b("          <span class=\"cover-by\">");if(t.s(t.f("translate",c,p,1),c,p,0,1969,1988,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_cover_by|by");});c.pop();}t.b("</span>");t.b("\n" + i);if(t.s(t.f("multiple_owners",c,p,1),c,p,0,2040,2247,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("          <span class=\"multiple-owners-list tooltipi-container\">");t.b("\n" + i);t.b("            ");if(t.s(t.f("translate",c,p,1),c,p,0,2132,2180,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("collection_cover_multiple_owners|Multiple Owners");});c.pop();}t.b("<ul class=\"tooltipi tooltipi-white-links\">");t.b("\n" + i);});c.pop();}if(t.s(t.f("owners",c,p,1),c,p,0,2291,2951,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("              ");if(t.s(t.f("multiple_owners",c,p,1),c,p,0,2326,2344,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<li class=\"clear\">");});c.pop();}t.b("\n" + i);t.b("                <a class=\"");if(t.s(t.f("multiple_owners",c,p,1),c,p,0,2411,2430,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("multiple-owner-link");});c.pop();}if(!t.s(t.f("multiple_owners",c,p,1),c,p,1,0,0,"")){t.b("single-owner-link");};t.b("\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\">");t.b("\n");t.b("\n" + i);if(t.s(t.f("multiple_owners",c,p,1),c,p,0,2564,2725,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <span class=\"multiple-owner-image-container\"><img class=\"multiple-owner-image js-mini-profile\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" src=\"");t.b(t.v(t.d("images.50",c,p,0)));t.b("\"/></span>");});c.pop();}t.b("<span class=\"js-mini-profile\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b(t.v(t.f("display_name",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                </a>");t.b("\n");t.b("\n" + i);t.b("              ");if(t.s(t.f("multiple_owners",c,p,1),c,p,0,2913,2918,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("</li>");});c.pop();}t.b("\n" + i);});c.pop();}if(t.s(t.f("multiple_owners",c,p,1),c,p,0,2993,3038,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("          </ul>");t.b("\n" + i);t.b("          </span>");t.b("\n" + i);});c.pop();}t.b("        </div>");t.b("\n" + i);t.b("      </div>");t.b("\n");t.b("\n" + i);t.b("    </div>");t.b("\n");t.b("\n" + i);t.b("    <div class=\"cover-stat-fields-wrap\">");t.b("\n");t.b("\n" + i);t.b("      <div class=\"cover-stat-wrap\">");t.b("\n");t.b("\n" + i);t.b("        <span class=\"cover-stat cover-stat-");t.b(t.v(t.d("footer.top_title",c,p,0)));t.b(" js-cover-stat-");t.b(t.v(t.d("footer.top_title",c,p,0)));t.b(" ");if(t.s(t.d("footer.highlighted",c,p,1),c,p,0,3338,3360,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("cover-stat-highlighted");});c.pop();}if(t.s(t.d("footer.top_icon",c,p,1),c,p,0,3403,3447,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" beicons-pre beicons-pre-");t.b(t.v(t.d("footer.top_icon",c,p,0)));});c.pop();}t.b(" ");if(t.s(t.f("format_published_date",c,p,1),c,p,0,3494,3513,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("js-format-timestamp");});c.pop();}t.b("\" data-timestamp=\"");t.b(t.v(t.f("published_on",c,p,0)));t.b("\">");t.b(t.v(t.d("footer.top_value",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("        <span class=\"cover-stat cover-stat-");t.b(t.v(t.d("footer.bottom_title",c,p,0)));t.b(" beicons-pre beicons-pre-");t.b(t.v(t.d("footer.bottom_icon",c,p,0)));t.b(" hide-phone\">");t.b(t.v(t.d("footer.bottom_value",c,p,0)));t.b("</span>");t.b("\n");t.b("\n" + i);if(t.s(t.f("featured_on",c,p,1),c,p,0,3785,4142,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("          <div class=\"featured tooltipi-container beicons-pre beicons-pre-featured-small\">");t.b("\n");t.b("\n" + i);t.b("            <div class=\"tooltipi\">");t.b("\n" + i);t.b("              ");if(t.s(t.f("translate",c,p,1),c,p,0,3941,3979,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_cover_featured_on|Featured On:");});c.pop();}t.b(" <strong class=\"js-format-date\" data-date=\"");t.b(t.v(t.f("featured_on",c,p,0)));t.b("\">");t.b(t.v(t.f("featured_on",c,p,0)));t.b("</strong>");t.b("\n" + i);t.b("            </div>");t.b("\n");t.b("\n" + i);t.b("          </div> <!-- .featured -->");t.b("\n" + i);});c.pop();}t.b("\n" + i);t.b("      </div><!-- .cover-stat-wrap -->");t.b("\n");t.b("\n" + i);t.b("      <div class=\"cover-fields\">");t.b("\n" + i);if(t.s(t.f("field_links",c,p,1),c,p,0,4256,4370,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("          <a href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" title=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\" class=\"field-link\">");t.b(t.v(t.f("name",c,p,0)));t.b("</a>");if(t.s(t.f("separate",c,p,1),c,p,0,4346,4348,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(", ");});c.pop();}t.b("\n" + i);});c.pop();}t.b("      </div><!-- .cover-fields -->");t.b("\n");t.b("\n" + i);t.b("    </div><!-- .cover-info -->");t.b("\n");t.b("\n" + i);t.b("  </div><!-- #cover-stat-fields-wrap -->");t.b("\n");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<lib/_editButton0":{name:"lib/_editButton", partials: {}, subs: {  }},"<profile/_overlays/_projectOverlay1":{name:"profile/_overlays/_projectOverlay", partials: {}, subs: {  }}}, subs: {  }}, "<div class=\"js-item cover-block project-cover js-project-cover editable cfix\" data-id=\"{{id}}\"{{#ordinal_id}} data-ordinal=\"{{ordinal_id}}\"{{/ordinal_id}}>\n  {{#is_collection_editable}}\n    {{> lib/_editButton }}\n  {{/is_collection_editable}}\n  {{^is_collection_editable}}\n  {{#is_editable}}\n    {{> profile/_overlays/_projectOverlay }}\n  {{/is_editable}}\n  {{/is_collection_editable}}\n  <div class=\"cover-img\">\n    <a href=\"{{url}}\" class=\"cover-img-link\">\n      {{#covers.404}}\n      <picture class=\"cover-img-el\">\n        <source srcset=\"{{covers.202}}, {{covers.404}} 2x\" media=\"(-webkit-min-device-pixel-ratio: 1.3),\n           (min--moz-device-pixel-ratio: 1.3),\n           (-o-min-device-pixel-ratio: 4/3),\n           (min-device-pixel-ratio: 1.3),\n           (min-resolution: 1.3dppx)\">\n        <img class=\"cover-img-el\" srcset=\"{{covers.202}}, {{covers.404}} 2x\" alt=\"{{name}}\">\n      </picture>\n    <noscript><img alt=\"{{name}}\" title=\"{{name}}\" src=\"{{covers.202}}\" class=\"cover-img-el\" /></noscript>\n    {{/covers.404}}\n    {{^covers.404}}\n      <img src=\"{{covers.202}}\" alt=\"{{name}}\" title=\"{{name}}\" class=\"cover-img-el\" data-pin-nopin=\"nopin\" />\n    {{/covers.404}}\n    </a>\n  </div>\n\n  {{#private}}\n\n    <div class=\"tooltipi-container project-private pointer\">\n\n      <div class=\"beicons-pre beicons-pre-privacy\"></div>\n\n      <div class=\"tooltipi\">\n        {{#translate}}project_cover_marked_private|This project is marked as private.{{/translate}}\n      </div>\n    </div> <!-- .tooltipi-container .project-private -->\n\n  {{/private}}\n\n\n  <div class=\"cover-info-stats\">\n\n    <div class=\"cover-info\">\n\n      <div class=\"cover-name\">\n        <a href=\"{{url}}\" class=\"projectName cover-name-link\">{{name}}</a>\n      </div>\n\n      <div class=\"cover-by-wrap\">\n        <div class=\"cover-by-link{{^multiple_owners}} text-ellipsis{{/multiple_owners}} {{#multiple_owners}}multiple-cover-by{{/multiple_owners}}\">\n          <span class=\"cover-by\">{{#translate}}project_cover_by|by{{/translate}}</span>\n          {{#multiple_owners}}\n          <span class=\"multiple-owners-list tooltipi-container\">\n            {{#translate}}collection_cover_multiple_owners|Multiple Owners{{/translate}}<ul class=\"tooltipi tooltipi-white-links\">\n          {{/multiple_owners}}\n            {{#owners}}\n              {{#multiple_owners}}<li class=\"clear\">{{/multiple_owners}}\n                <a class=\"{{#multiple_owners}}multiple-owner-link{{/multiple_owners}}{{^multiple_owners}}single-owner-link{{/multiple_owners}}\" href=\"{{url}}\">\n\n                  {{#multiple_owners}}\n                    <span class=\"multiple-owner-image-container\"><img class=\"multiple-owner-image js-mini-profile\" data-id=\"{{id}}\" src=\"{{images.50}}\"/></span>{{/multiple_owners}}{{!this must touch to avoid extra space}}<span class=\"js-mini-profile\" data-id=\"{{id}}\">{{display_name}}</span>\n                </a>\n\n              {{#multiple_owners}}</li>{{/multiple_owners}}\n            {{/owners}}\n          {{#multiple_owners}}\n          </ul>\n          </span>\n          {{/multiple_owners}}\n        </div>\n      </div>{{!/.cover-by-wrap}}\n\n    </div>{{!/.cover-info}}\n\n    <div class=\"cover-stat-fields-wrap\">\n\n      <div class=\"cover-stat-wrap\">\n\n        <span class=\"cover-stat cover-stat-{{footer.top_title}} js-cover-stat-{{footer.top_title}} {{#footer.highlighted}}cover-stat-highlighted{{/footer.highlighted}}{{#footer.top_icon}} beicons-pre beicons-pre-{{footer.top_icon}}{{/footer.top_icon}} {{#format_published_date}}js-format-timestamp{{/format_published_date}}\" data-timestamp=\"{{published_on}}\">{{footer.top_value}}</span>\n        <span class=\"cover-stat cover-stat-{{footer.bottom_title}} beicons-pre beicons-pre-{{footer.bottom_icon}} hide-phone\">{{footer.bottom_value}}</span>\n\n        {{#featured_on}}\n          <div class=\"featured tooltipi-container beicons-pre beicons-pre-featured-small\">\n\n            <div class=\"tooltipi\">\n              {{#translate}}project_cover_featured_on|Featured On:{{/translate}} <strong class=\"js-format-date\" data-date=\"{{featured_on}}\">{{featured_on}}</strong>\n            </div>\n\n          </div> <!-- .featured -->\n        {{/featured_on}}\n\n      </div><!-- .cover-stat-wrap -->\n\n      <div class=\"cover-fields\">\n        {{#field_links}}\n          <a href=\"{{url}}\" title=\"{{name}}\" class=\"field-link\">{{name}}</a>{{#separate}}, {{/separate}}\n        {{/field_links}}\n      </div><!-- .cover-fields -->\n\n    </div><!-- .cover-info -->\n\n  </div><!-- #cover-stat-fields-wrap -->\n\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 102:
/***/ function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },

/***/ 1025:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"empty-wrap\">");t.b("\n" + i);if(t.s(t.d("profile.is_profile_owner",c,p,1),c,p,0,56,189,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <h1 class=\"empty-header\">");if(t.s(t.f("translate",c,p,1),c,p,0,100,167,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_no_appreciated|You haven't appreciated a project yet.");});c.pop();}t.b("</h1>");t.b("\n" + i);});c.pop();}if(!t.s(t.d("profile.is_profile_owner",c,p,1),c,p,1,0,0,"")){t.b("    <h1 class=\"empty-header\">");if(t.s(t.f("translate",c,p,1),c,p,0,294,393,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_user_has_no_appreciated|");t.b(t.v(t.d("profile.display_name",c,p,0)));t.b(" hasn't appreciated any projects yet.");});c.pop();}t.b("</h1>");t.b("\n" + i);};t.b("  ");if(t.s(t.f("translate",c,p,1),c,p,0,461,650,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_search_projects|Use the <a href=\"");t.b(t.v(t.d("PAGE_URLS.SEARCH",c,p,0)));t.b("\">Discover</a> tab or browse <a href=\"");t.b(t.v(t.d("PAGE_URLS.GALLERIES",c,p,0)));t.b("\">galleries</a> of creative work, to discover great projects.");});c.pop();}t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"empty-wrap\">\n  {{#profile.is_profile_owner}}\n    <h1 class=\"empty-header\">{{#translate}}profile_empty_no_appreciated|You haven't appreciated a project yet.{{/translate}}</h1>\n  {{/profile.is_profile_owner}}\n  {{^profile.is_profile_owner}}\n    <h1 class=\"empty-header\">{{#translate}}profile_empty_user_has_no_appreciated|{{profile.display_name}} hasn't appreciated any projects yet.{{/translate}}</h1>\n  {{/profile.is_profile_owner}}\n  {{#translate}}profile_empty_search_projects|Use the <a href=\"{{PAGE_URLS.SEARCH}}\">Discover</a> tab or browse <a href=\"{{PAGE_URLS.GALLERIES}}\">galleries</a> of creative work, to discover great projects.{{/translate}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 1026:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"empty-wrap\">");t.b("\n" + i);if(t.s(t.d("profile.is_profile_owner",c,p,1),c,p,0,56,334,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <h1 class=\"empty-header\">");if(t.s(t.f("translate",c,p,1),c,p,0,100,166,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_no_collections|You haven't started a collection yet.");});c.pop();}t.b("</h1>");t.b("\n" + i);t.b("    ");if(t.s(t.f("translate",c,p,1),c,p,0,204,317,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_create_collection|To create one, click the \"Add to Collection\" button at the bottom of any project.");});c.pop();}t.b("\n" + i);});c.pop();}if(!t.s(t.d("profile.is_profile_owner",c,p,1),c,p,1,0,0,"")){t.b("    <h1 class=\"empty-header\">");if(t.s(t.f("translate",c,p,1),c,p,0,439,533,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_user_has_no_collection|");t.b(t.v(t.d("profile.display_name",c,p,0)));t.b(" hasn't started a collection yet.");});c.pop();}t.b("</h1>");t.b("\n" + i);};t.b("  ");if(t.s(t.f("translate",c,p,1),c,p,0,601,790,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_search_projects|Use the <a href=\"");t.b(t.v(t.d("PAGE_URLS.SEARCH",c,p,0)));t.b("\">Discover</a> tab or browse <a href=\"");t.b(t.v(t.d("PAGE_URLS.GALLERIES",c,p,0)));t.b("\">galleries</a> of creative work, to discover great projects.");});c.pop();}t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"empty-wrap\">\n  {{#profile.is_profile_owner}}\n    <h1 class=\"empty-header\">{{#translate}}profile_empty_no_collections|You haven't started a collection yet.{{/translate}}</h1>\n    {{#translate}}profile_empty_create_collection|To create one, click the \"Add to Collection\" button at the bottom of any project.{{/translate}}\n  {{/profile.is_profile_owner}}\n  {{^profile.is_profile_owner}}\n    <h1 class=\"empty-header\">{{#translate}}profile_empty_user_has_no_collection|{{profile.display_name}} hasn't started a collection yet.{{/translate}}</h1>\n  {{/profile.is_profile_owner}}\n  {{#translate}}profile_empty_search_projects|Use the <a href=\"{{PAGE_URLS.SEARCH}}\">Discover</a> tab or browse <a href=\"{{PAGE_URLS.GALLERIES}}\">galleries</a> of creative work, to discover great projects.{{/translate}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 1027:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"empty-wrap\">");t.b("\n" + i);if(t.s(t.d("profile.is_profile_owner",c,p,1),c,p,0,56,435,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <h1 class=\"empty-header\">");if(t.s(t.f("translate",c,p,1),c,p,0,100,176,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_no_collections_followed|You haven't followed a collection yet.");});c.pop();}t.b("</h1>");t.b("\n" + i);t.b("    ");if(t.s(t.f("translate",c,p,1),c,p,0,214,418,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_collection_follow|To follow a collection, click the \"Follow Collection\" button.  Get started by checking out a gallery of <a href=\"");t.b(t.v(t.d("PAGE_URLS.POPULAR_COLLECTIONS",c,p,0)));t.b("\">popular collections</a>.");});c.pop();}t.b("\n" + i);});c.pop();}if(!t.s(t.d("profile.is_profile_owner",c,p,1),c,p,1,0,0,"")){t.b("    <h1 class=\"empty-header\">");if(t.s(t.f("translate",c,p,1),c,p,0,540,641,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_user_no_collections_followed|");t.b(t.v(t.d("profile.display_name",c,p,0)));t.b(" hasn't followed a collection yet.");});c.pop();}t.b("</h1>");t.b("\n" + i);t.b("    ");if(t.s(t.f("translate",c,p,1),c,p,0,679,868,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_search_projects|Use the <a href=\"");t.b(t.v(t.d("PAGE_URLS.SEARCH",c,p,0)));t.b("\">Discover</a> tab or browse <a href=\"");t.b(t.v(t.d("PAGE_URLS.GALLERIES",c,p,0)));t.b("\">galleries</a> of creative work, to discover great projects.");});c.pop();}t.b("\n" + i);};t.b("</div>");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"empty-wrap\">\n  {{#profile.is_profile_owner}}\n    <h1 class=\"empty-header\">{{#translate}}profile_empty_no_collections_followed|You haven't followed a collection yet.{{/translate}}</h1>\n    {{#translate}}profile_empty_collection_follow|To follow a collection, click the \"Follow Collection\" button.  Get started by checking out a gallery of <a href=\"{{PAGE_URLS.POPULAR_COLLECTIONS}}\">popular collections</a>.{{/translate}}\n  {{/profile.is_profile_owner}}\n  {{^profile.is_profile_owner}}\n    <h1 class=\"empty-header\">{{#translate}}profile_empty_user_no_collections_followed|{{profile.display_name}} hasn't followed a collection yet.{{/translate}}</h1>\n    {{#translate}}profile_empty_search_projects|Use the <a href=\"{{PAGE_URLS.SEARCH}}\">Discover</a> tab or browse <a href=\"{{PAGE_URLS.GALLERIES}}\">galleries</a> of creative work, to discover great projects.{{/translate}}\n  {{/profile.is_profile_owner}}\n</div>", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 1028:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"empty-wrap\">");t.b("\n" + i);if(t.s(t.d("profile.is_profile_owner",c,p,1),c,p,0,54,541,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("search",c,p,1),c,p,0,68,222,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <h1 class=\"empty-header\">");if(t.s(t.f("translate",c,p,1),c,p,0,112,200,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_following_search|You are not following any users with the name ");t.b(t.v(t.f("search",c,p,0)));t.b(".");});c.pop();}t.b("</h1>");t.b("\n" + i);});c.pop();}if(!t.s(t.f("search",c,p,1),c,p,1,0,0,"")){t.b("    <h1 class=\"empty-header\">");if(t.s(t.f("translate",c,p,1),c,p,0,291,348,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_following|You aren't following any members.");});c.pop();}t.b("</h1>");t.b("\n" + i);};t.b("  ");if(t.s(t.f("translate",c,p,1),c,p,0,398,526,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_explore_creatives|Explore our <a href=\"");t.b(t.v(t.d("PAGE_URLS.CREATIVES_TO_FOLLOW",c,p,0)));t.b("\">curated list of creatives to follow.</a>");});c.pop();}t.b("\n" + i);});c.pop();}if(!t.s(t.d("profile.is_profile_owner",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("search",c,p,1),c,p,0,614,791,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <h1 class=\"empty-header\">");if(t.s(t.f("translate",c,p,1),c,p,0,656,769,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_user_following_search|");t.b(t.v(t.d("profile.display_name",c,p,0)));t.b(" isn't following any members with the name ");t.b(t.v(t.f("search",c,p,0)));});c.pop();}t.b("</h1>");t.b("\n" + i);});c.pop();}if(!t.s(t.f("search",c,p,1),c,p,1,0,0,"")){t.b("  <h1 class=\"empty-header\">");if(t.s(t.f("translate",c,p,1),c,p,0,858,940,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_user_following|");t.b(t.v(t.d("profile.display_name",c,p,0)));t.b(" isn't following any members.");});c.pop();}t.b("</h1>");t.b("\n" + i);};t.b("  ");if(t.s(t.f("translate",c,p,1),c,p,0,990,1173,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_check_back_explore_creatives|Please check back soon. Until then, you can explore our <a href=\"");t.b(t.v(t.d("PAGE_URLS.CREATIVES_TO_FOLLOW",c,p,0)));t.b("\">curated list of creatives to follow.</a>");});c.pop();}t.b("\n" + i);};t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"empty-wrap\">\n{{#profile.is_profile_owner}}\n  {{#search}}\n    <h1 class=\"empty-header\">{{#translate}}profile_empty_following_search|You are not following any users with the name {{search}}.{{/translate}}</h1>\n  {{/search}}\n  {{^search}}\n    <h1 class=\"empty-header\">{{#translate}}profile_empty_following|You aren't following any members.{{/translate}}</h1>\n  {{/search}}\n  {{#translate}}profile_empty_explore_creatives|Explore our <a href=\"{{PAGE_URLS.CREATIVES_TO_FOLLOW}}\">curated list of creatives to follow.</a>{{/translate}}\n{{/profile.is_profile_owner}}\n{{^profile.is_profile_owner}}\n  {{#search}}\n  <h1 class=\"empty-header\">{{#translate}}profile_empty_user_following_search|{{profile.display_name}} isn't following any members with the name {{search}}{{/translate}}</h1>\n  {{/search}}\n  {{^search}}\n  <h1 class=\"empty-header\">{{#translate}}profile_empty_user_following|{{profile.display_name}} isn't following any members.{{/translate}}</h1>\n  {{/search}}\n  {{#translate}}profile_empty_check_back_explore_creatives|Please check back soon. Until then, you can explore our <a href=\"{{PAGE_URLS.CREATIVES_TO_FOLLOW}}\">curated list of creatives to follow.</a>{{/translate}}\n{{/profile.is_profile_owner}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 1029:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"empty-wrap\">");t.b("\n" + i);if(t.s(t.d("profile.is_profile_owner",c,p,1),c,p,0,54,548,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("search",c,p,1),c,p,0,68,226,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <h1 class=\"empty-header\">");if(t.s(t.f("translate",c,p,1),c,p,0,112,204,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_team_members_search|You do not have any team members with the name ");t.b(t.v(t.f("search",c,p,0)));t.b(".");});c.pop();}t.b("</h1>");t.b("\n" + i);});c.pop();}if(!t.s(t.f("search",c,p,1),c,p,1,0,0,"")){t.b("    <h1 class=\"empty-header\">");if(t.s(t.f("translate",c,p,1),c,p,0,295,355,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_team_members|You do not have any team members.");});c.pop();}t.b("</h1>");t.b("\n" + i);};t.b("  ");if(t.s(t.f("translate",c,p,1),c,p,0,405,533,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_explore_creatives|Explore our <a href=\"");t.b(t.v(t.d("PAGE_URLS.CREATIVES_TO_FOLLOW",c,p,0)));t.b("\">curated list of creatives to follow.</a>");});c.pop();}t.b("\n" + i);});c.pop();}if(!t.s(t.d("profile.is_profile_owner",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("search",c,p,1),c,p,0,621,804,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <h1 class=\"empty-header\">");if(t.s(t.f("translate",c,p,1),c,p,0,663,782,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_user_team_members_search|");t.b(t.v(t.d("profile.display_name",c,p,0)));t.b(" does not have any team members with the name ");t.b(t.v(t.f("search",c,p,0)));});c.pop();}t.b("</h1>");t.b("\n" + i);});c.pop();}if(!t.s(t.f("search",c,p,1),c,p,1,0,0,"")){t.b("  <h1 class=\"empty-header\">");if(t.s(t.f("translate",c,p,1),c,p,0,871,959,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_user_team_members|");t.b(t.v(t.d("profile.display_name",c,p,0)));t.b(" does not have any team members.");});c.pop();}t.b("</h1>");t.b("\n" + i);};t.b("  ");if(t.s(t.f("translate",c,p,1),c,p,0,1009,1192,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_check_back_explore_creatives|Please check back soon. Until then, you can explore our <a href=\"");t.b(t.v(t.d("PAGE_URLS.CREATIVES_TO_FOLLOW",c,p,0)));t.b("\">curated list of creatives to follow.</a>");});c.pop();}t.b("\n" + i);};t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"empty-wrap\">\n{{#profile.is_profile_owner}}\n  {{#search}}\n    <h1 class=\"empty-header\">{{#translate}}profile_empty_team_members_search|You do not have any team members with the name {{search}}.{{/translate}}</h1>\n  {{/search}}\n  {{^search}}\n    <h1 class=\"empty-header\">{{#translate}}profile_empty_team_members|You do not have any team members.{{/translate}}</h1>\n  {{/search}}\n  {{#translate}}profile_empty_explore_creatives|Explore our <a href=\"{{PAGE_URLS.CREATIVES_TO_FOLLOW}}\">curated list of creatives to follow.</a>{{/translate}}\n{{/profile.is_profile_owner}}\n{{^profile.is_profile_owner}}\n  {{#search}}\n  <h1 class=\"empty-header\">{{#translate}}profile_empty_user_team_members_search|{{profile.display_name}} does not have any team members with the name {{search}}{{/translate}}</h1>\n  {{/search}}\n  {{^search}}\n  <h1 class=\"empty-header\">{{#translate}}profile_empty_user_team_members|{{profile.display_name}} does not have any team members.{{/translate}}</h1>\n  {{/search}}\n  {{#translate}}profile_empty_check_back_explore_creatives|Please check back soon. Until then, you can explore our <a href=\"{{PAGE_URLS.CREATIVES_TO_FOLLOW}}\">curated list of creatives to follow.</a>{{/translate}}\n{{/profile.is_profile_owner}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 1030:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"js-project-dropdown-collection-inner project-dropdown-collection-inner\"></div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"js-project-dropdown-collection-inner project-dropdown-collection-inner\"></div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(21), __webpack_require__(105) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(i, e, t) {
    "use strict";
    var n = e.extend({
        init: function() {
            this._super.apply(this, arguments), this.listenTo(this._view, {
                postrender: function(i) {
                    this._bindHide(i);
                },
                hide: function() {
                    this._unbindHide();
                }
            }), this._keepAlive = this._keepAlive.bind(this), this._setDeath = this._setDeath.bind(this);
        },
        _unbindHide: function() {
            this.$context.off(".miniprofile");
        },
        _bindHide: function(i) {
            i.on({
                "mouseenter.miniprofile": this._keepAlive,
                "mouseleave.miniprofile": this._setDeath,
                "click.miniprofile": this._setDeath
            });
        },
        setContext: function(i) {
            this.$context = i, this._unbindHide(), this._bindHide(this.$context);
        },
        _keepAlive: function() {
            clearTimeout(this._hideTimeout);
        },
        _setDeath: function() {
            this._hideTimeout = setTimeout(function() {
                this._view.hide();
            }.bind(this), this.constructor.HIDE_TIMEOUT);
        }
    }, {
        VIEW_CLASS: t,
        HIDE_TIMEOUT: 500
    });
    return n;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 105:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(157), __webpack_require__(41), __webpack_require__(42), __webpack_require__(97) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, o, e, i, s) {
    "use strict";
    var n = i.extend({
        mustache: s,
        template: function(o) {
            return this._super(t.extend({
                classes: [ "mini-profile", "hide-tablet", "hide-phone" ]
            }, o));
        },
        position: function() {
            var t, o, e, i = this._controller.$context.width() / 2, s = this.constructor.NUB_OFFSET - i, n = s < 0 ? "+" : "-";
            this._super(this._controller.$context, {
                my: "left top",
                at: "left" + n + Math.abs(s) + " bottom+" + this.constructor.NUB_HEIGHT,
                collision: "flipfit",
                within: this._model.get("within")
            }), t = this._controller.$context.offset(), o = this.$view.offset(), this._model.get("bottom") && o.top + this.$view.height() > this._model.get("bottom").offset().top ? (this._super(this._controller.$context, {
                my: "left" + n + Math.abs(s) + " bottom-" + this.constructor.NUB_HEIGHT,
                at: "left top",
                collision: "flipfit none",
                within: this._model.get("within")
            }), e = "bottom") : e = t.top > o.top ? "bottom" : "top", e += Math.floor(t.left) > o.left + Math.abs(s) ? "-right" : "-left", 
            this.$view.removeClass("top-right top-left bottom-right bottom-left").addClass(e);
        },
        rendered: function() {
            this._super(), e.init(this.$view);
        },
        show: function() {
            this.$view && (this.$view.removeClass("hide"), this.position()), this._super(), 
            this._controller.$context.closest(":focusable").focus();
        },
        hide: function() {
            this._super(), this.destroy();
        },
        _bind: t.noop,
        _unbind: t.noop
    }, {
        NUB_OFFSET: 55,
        NUB_HEIGHT: 12
    });
    return n;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 106:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(2), __webpack_require__(5), __webpack_require__(38) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, e, a, r) {
    "use strict";
    function n(t, n, s) {
        return r({
            title: a.translate("report_spam_mark_as", "Mark as Spam"),
            html: a.translate("report_spam_are_you_sure", "Are you sure you want to mark this as spam?"),
            buttons: [ {
                label: a.translate("report_spam_button_okay", "Okay"),
                classes: [ "form-button-default", "js-confirm" ]
            }, {
                label: a.translate("report_spam_button_cancel", "Cancel"),
                classes: [ "form-button-cancel", "js-cancel" ]
            } ]
        }).then(function() {
            return e({
                type: "POST",
                url: o + t + "/" + n
            }).then(function(t) {
                return s && s.text(a.translate("report_spam_marked_as", "Marked as Spam")).on("click", !1), 
                {
                    response: t,
                    $context: s
                };
            });
        });
    }
    var o = "/v2/report/spam/";
    return {
        report: n,
        delegate: function(e, a) {
            a = a || t.noop, e.on("click.be-spam", ".js-action-spam", function(e) {
                var r = t(e.target), o = r.data("type"), s = r.data("id");
                n(o, s, r).then(a), e.preventDefault();
            });
        },
        undelegate: function(t) {
            t.off("click.be-spam");
        }
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 107:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(3), __webpack_require__(33), __webpack_require__(27), __webpack_require__(2), __webpack_require__(13), __webpack_require__(154) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, t, i, o, s, r) {
    "use strict";
    var n = i.extend({
        mustache: r,
        fadeTime: 250,
        displayTime: 5e3,
        _hover: function() {
            this.pulseHovered || (this.pulseHovered = !0, this._controller._pulsePointViewed(this._model.get("from"))), 
            s.info("onboarding", "Pulse Point Hovered", {
                from: this._model.get("from")
            });
        },
        _showClickedMessage: function() {
            return this.destroyTimer ? (clearTimeout(this.destroyTimer), this.destroyTimer = null, 
            void this.destroy()) : (this._model.set("clicked", !0), s.info("onboarding", "Pulse Point Clicked", {
                from: this._model.get("from")
            }), this.destroyTimer = setTimeout(function() {
                this.$view.fadeOut(this.fadeTime, this.destroy.bind(this));
            }.bind(this), this.displayTime), void this.render());
        },
        rendered: function(e) {
            this.destroyTimer || e.on("mouseenter", this._hover.bind(this));
        },
        events: {
            click: "_showClickedMessage"
        },
        templateData: function() {
            var e = this._super();
            return e.from = this._model.get("from"), e.follow = "follow" === e.from, e.appreciate = "appreciate" === e.from, 
            e;
        }
    });
    return t.extend({
        _pulsePointViewed: function(e) {
            return o({
                url: "/v2/users/me/flags/" + e + "_pulse_point",
                type: "POST"
            });
        }
    }, {
        displayName: "PulsePoint",
        VIEW_CLASS: n
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 108:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(2) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, r) {
    "use strict";
    function t(t, n) {
        var i = e.isFunction(n.back) ? n.back : e.noop, a = n.a;
        if (delete n.a, delete n.back, "s" === a && !n.ids) throw new Error("be/stats called without ids");
        return r({
            url: t + "/" + a,
            data: n
        }).then(i);
    }
    function n(e) {
        var r, t = {};
        document.referrer && (e.referrer = document.referrer);
        for (r in e) e.hasOwnProperty(r) && u.hasOwnProperty(r) && (t[u[r]] = e[r]);
        return t;
    }
    var i, a, c, o = "/c", u = {
        action: "a",
        callback: "back",
        entity: "e",
        ids: "ids",
        id: "id",
        type: "t",
        time: "ti",
        contest: "c",
        source: "s",
        referrer: "r"
    };
    return i = function(e) {
        return t(o, n(e));
    }, a = function(e, r, t, n) {
        return i({
            action: e,
            entity: r,
            id: t,
            callback: n
        }), this;
    }, c = {
        get: i,
        view: a.bind(c, "v"),
        appreciate: a.bind(c, "a")
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 109:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(178) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(n) {
    "use strict";
    return {
        isOn: function(e) {
            return !!n[e];
        }
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(19), __webpack_require__(15), __webpack_require__(16), __webpack_require__(39), __webpack_require__(31), __webpack_require__(5), __webpack_require__(2), __webpack_require__(25), __webpack_require__(8) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, e, r, i, s, n, o, u, h) {
    "use strict";
    return r.extend({
        xhr: u,
        hideButtonText: o.translate("form_template_saving", "Saving..."),
        validator: [ i.trimIfEmpty, i.validateForm ],
        _submitSelector: ".form-submit:not([type=submit]):not([disabled]), .js-submit:not([type=submit]):not([disabled])",
        _displayError: function(t, e) {
            var r = {
                errors: {}
            };
            return r.errors[t.attr("name")] = o.translateErrorMessage(e), s.displayAll(this.$form)(r);
        },
        init: function(t) {
            this._super(t), this.$context = t, this.on({
                "error:show": this._displayError.bind(this),
                "error:hide": s.removeErrors,
                error: function() {
                    this.showButtons();
                },
                before: function() {
                    this.hideButtons();
                }
            }), this.handlers.push(this.showMessages.bind(this)), this.bind();
        },
        reset: function() {
            return this._super(), this.$form.find("select").each(function() {
                var e = this.value;
                t(this).changeInput("value", "").changeInput("value", e);
            }), this.showButtons(), this;
        },
        _getMessageContainer: function() {
            return this.$form;
        },
        showMessages: function(t) {
            if (t = n.error(t), !t.messages) throw t;
            e(this._getMessageContainer(), t.messages);
        },
        submit: function(t) {
            return this.wasSubmittedFromButton = !!t, s.removeAll(this.$form), this._super.apply(this, arguments);
        },
        commit: function(t) {
            return u(t);
        },
        showButtons: function() {
            h.show(this._getButtonContainer());
        },
        hideButtons: function() {
            var t = this.hideButtonText;
            "function" == typeof t && (t = t()), h.hide(this._getButtonContainer(), t);
        },
        _getButtonContainer: function() {
            var t = this.$context.find(this._submitSelector).closest(".form-item").parent();
            if (!t.length && this.wasSubmittedFromButton) throw new Error("Unable to find button container:" + this.$context.html());
            return t;
        },
        _findFormError: function(t) {
            var e = n.error(t);
            if (!e.errors && "object" == typeof t.responseJSON) throw t;
            return this._super(e.errors || e);
        },
        bind: function() {
            return this.alreadyBound ? this : (this.alreadyBound = !0, this.$context.on("click keydown", this._submitSelector, this._normalizeSubmitter), 
            this.$form.on("submit", this.submit), this);
        },
        unbind: function() {
            return this.$context.off("click keydown", this._submitSelector, this._normalizeSubmitter), 
            this.$form.off("submit", this.submit), this;
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 110:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_savingSpinner": __webpack_require__(52).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"form-item form-item-checkbox");if(t.s(t.f("containerClasses",c,p,1),c,p,0,61,67,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" ");t.b(t.v(t.d(".",c,p,0)));});c.pop();}t.b("\" id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("-container\">");t.b("\n" + i);t.b("  <label for=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" class=\"form-label checkbox\">");t.b("\n" + i);t.b("    <input type=\"checkbox\" id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" name=\"");t.b(t.v(t.f("name",c,p,0)));if(!t.s(t.f("name",c,p,1),c,p,1,0,0,"")){t.b(t.v(t.f("id",c,p,0)));};t.b("\" class=\"form-checkbox");if(t.s(t.f("classes",c,p,1),c,p,0,275,281,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" ");t.b(t.v(t.d(".",c,p,0)));});c.pop();}if(t.s(t.f("validate",c,p,1),c,p,0,306,329,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" validate[");t.b(t.v(t.f("validate",c,p,0)));t.b("]");});c.pop();}t.b("\" value=\"");t.b(t.v(t.f("value",c,p,0)));t.b("\"");if(t.s(t.f("checked",c,p,1),c,p,0,373,381,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" checked");});c.pop();}if(t.s(t.f("disabled",c,p,1),c,p,0,406,415,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" disabled");});c.pop();}if(t.s(t.f("validate",c,p,1),c,p,0,441,470,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" data-validate=\"");t.b(t.v(t.f("validate",c,p,0)));t.b("\"");});c.pop();}t.b(">");t.b("\n" + i);t.b("    <div class=\"checkbox-checkmark\"></div>");t.b("\n" + i);t.b("    ");t.b(t.t(t.f("label",c,p,0)));if(t.s(t.f("saving_spinner",c,p,1),c,p,0,562,586,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_savingSpinner0",c,p,""));});c.pop();}t.b("\n" + i);t.b("  </label>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<lib/_savingSpinner0":{name:"lib/_savingSpinner", partials: {}, subs: {  }}}, subs: {  }}, "<div class=\"form-item form-item-checkbox{{#containerClasses}} {{.}}{{/containerClasses}}\" id=\"{{id}}-container\">\n  <label for=\"{{id}}\" class=\"form-label checkbox\">\n    <input type=\"checkbox\" id=\"{{id}}\" name=\"{{name}}{{^name}}{{id}}{{/name}}\" class=\"form-checkbox{{#classes}} {{.}}{{/classes}}{{#validate}} validate[{{validate}}]{{/validate}}\" value=\"{{value}}\"{{#checked}} checked{{/checked}}{{#disabled}} disabled{{/disabled}}{{#validate}} data-validate=\"{{validate}}\"{{/validate}}>\n    <div class=\"checkbox-checkmark\"></div>\n    {{{label}}}{{#saving_spinner}}{{> lib/_savingSpinner}}{{/saving_spinner}}\n  </label>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 112:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(13), __webpack_require__(35) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, e, o) {
    return {
        open: function(r, i, n) {
            var a = i.url, h = i.text, p = i.image;
            e.info("social_sharing", "Social Network Button Clicked", {
                service: r,
                from: n
            }), "facebook" === r ? o.open("http://www.facebook.com/sharer/sharer.php?" + t.param({
                u: a,
                t: h
            }), "", "toolbar=0, status=0, width=900, height=500") : "twitter" === r ? o.open("https://twitter.com/intent/tweet?" + t.param({
                text: h
            }), "", "toolbar=0, status=0, width=650, height=360") : "linkedin" === r ? o.open("https://www.linkedin.com/cws/share?" + t.param({
                url: a,
                token: "",
                isFramed: "true"
            }), "", "toolbar=no,width=550,height=550") : "pinterest" === r && o.open("http://pinterest.com/pin/create/button/?" + t.param({
                url: a,
                media: p,
                description: h
            }), "", "toolbar=no,width=700,height=300");
        }
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 113:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"share-link-input\">");t.b("\n" + i);t.b("  <div class=\"input-group js-share-link\">");t.b("\n" + i);t.b("    <div class=\"input-group-addon beicons-pre beicons-pre-link js-share-url-icon\"></div>");t.b("\n" + i);t.b("    <input type=\"text\" class=\"form-text form-text-normal js-share-input\" value=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" readonly=\"readonly\" />");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"share-link-input\">\n  <div class=\"input-group js-share-link\">\n    <div class=\"input-group-addon beicons-pre beicons-pre-link js-share-url-icon\"></div>\n    <input type=\"text\" class=\"form-text form-text-normal js-share-input\" value=\"{{url}}\" readonly=\"readonly\" />\n  </div>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 114:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(t.s(t.f("searches_added_to",c,p,1),c,p,0,22,171,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"ts-added\">");t.b("\n" + i);t.b("      <strong>");if(t.s(t.f("translate",c,p,1),c,p,0,78,114,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("talent_post_label_added_to|ADDED TO:");});c.pop();}t.b("</strong> ");t.b(t.v(t.f("searches_added_to",c,p,0)));t.b("\n" + i);t.b("    </div>");t.b("\n" + i);});c.pop();}return t.fl(); },partials: {}, subs: {  }}, "{{#searches_added_to}}\n    <div class=\"ts-added\">\n      <strong>{{#translate}}talent_post_label_added_to|ADDED TO:{{/translate}}</strong> {{searches_added_to}}\n    </div>\n{{/searches_added_to}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 115:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(196);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(59)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../css-loader/index.js!./../../sass-loader/index.js?includePaths[]=/home/bebuilder/net_build2/_export/tmp_build/node_modules/node-bourbon/node_modules/bourbon/app/assets/stylesheets!./lightbox.scss", function() {
			var newContent = require("!!./../../css-loader/index.js!./../../sass-loader/index.js?includePaths[]=/home/bebuilder/net_build2/_export/tmp_build/node_modules/node-bourbon/node_modules/bourbon/app/assets/stylesheets!./lightbox.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 116:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(4), __webpack_require__(71), __webpack_require__(120) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, t, i) {
    "use strict";
    return t.extend({
        init: function(e, t) {
            this._$elem = e, this._options = t;
        },
        bind: function() {
            this._$elem.on("appear", function() {
                var t = e(this), n = t.html(), r = e("<picture>" + n + "</picture>"), o = r.find("img");
                t.after(r), t.remove(), o.one("load", function() {
                    o.removeAttr("height").removeAttr("width").removeAttr("style").addClass("image-loaded");
                }), o.attr("src", o.data("src")).removeAttr("data-src"), i();
            }), this._$elem.lazyload(this._options), e(window).one("resize.be-lazypicture", function() {
                this._$elem.trigger("appear");
            }.bind(this));
        },
        unbind: function() {
            e(window).off("resize.be-lazypicture"), this._$elem.off("appear");
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 117:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e) {
    "use strict";
    function i(i, t) {
        t = t || {}, i.each(function() {
            function i() {
                return o.css("height", "auto").removeClass("hide"), {
                    extended: o.height(),
                    short: n.height()
                };
            }
            var n = e(this), o = n.next(), l = n.find(".variable-text-link, .js-more-toggle-link"), r = o.find(".variable-text-link, .js-more-toggle-link"), s = "speed" in t ? t.speed : 250;
            o.css({
                overflow: "hidden"
            }), l.on("click.be-moretoggle", function() {
                var e = i();
                n.addClass("hide"), o.css("height", e.short + "px").animate({
                    height: e.extended + "px"
                }, s);
            }), r.on("click.be-moretoggle", function() {
                o.animate({
                    height: i().short + "px"
                }, s, function() {
                    n.removeClass("hide"), o.addClass("hide");
                });
            });
        });
    }
    return i.off = function(i) {
        i.each(function() {
            var i = e(this), t = i.next(), n = i.find(".variable-text-link, .js-more-toggle-link"), o = t.find(".variable-text-link, .js-more-toggle-link");
            n.off("click.be-moretoggle"), o.off("click.be-moretoggle");
        });
    }, i.init = function(e) {
        i(e.find(".js-more-toggle"));
    }, i.destroy = function(e) {
        i.off(e.find(".js-more-toggle"));
    }, i;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 118:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(36), __webpack_require__(4) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, e, n) {
    "use strict";
    return n.extend({
        init: function(n, f) {
            f = f || "l", n.find(".js-format-date").each(function(n, a) {
                var i = t(a), o = e(i.data("date"), "MM/DD/YYYY"), r = o.format(f);
                r && i.text(r);
            });
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
    "use strict";
    function e(e) {
        var s, t, a = !1, u = 0, i = [];
        for (s = 0; s < e.length; ++s) "[" !== e[s] ? "]" !== e[s] ? "," !== e[s] || a || (t = e.substring(u, s), 
        t && i.push(t), u = s + 1) : a = !1 : a = !0;
        return t = e.substring(u), t && i.push(t), i;
    }
    function s(a, u) {
        return delete s.message, u = u ? e(u) : [], null == a && (a = ""), u.indexOf("required") === -1 && "" === a || u.every(t, a);
    }
    var t, a = RegExp.prototype.test, u = {
        Generic: {
            test: a.bind(/^[^<>]+$/),
            message: "This field may not contain less than signs (&lt) or greater than signs (&gt;)"
        },
        AlphaNumeric: {
            test: a.bind(/^[0-9A-Za-z\u00C0-\u00FF\u0100-\u0259\u0386\u0388-\u04E9\u05D0-\u06D3\u1E80-\u200F]+$/),
            message: "This field must contain only alphanumeric characters"
        },
        Alpha: {
            test: a.bind(/^[A-Za-z\u00C0-\u00FF\u0100-\u0259\u0386\u0388-\u04E9\u05D0-\u06D3\u1E80-\u200F]+$/),
            message: "This field must contain only alpha characters"
        },
        AlphaDash: {
            test: a.bind(/^[A-Za-z\u00C0-\u00FF\u0100-\u0259\u0386\u0388-\u04E9\u05D0-\u06D3\u1E80-\u200F\-]+$/),
            message: "This field must contain only alpha characters or dashes"
        },
        ANDash: {
            test: a.bind(/^[0-9A-Za-z\u00C0-\u00FF\u0100-\u0259\u0386\u0388-\u04E9\u05D0-\u06D3\u1E80-\u200F\-]+$/),
            message: "This field must contain only alphanumeric characters or dashes"
        },
        ANUnder: {
            test: a.bind(/^[0-9A-Za-z\u00C0-\u00FF\u0100-\u0259\u0386\u0388-\u04E9\u05D0-\u06D3\u1E80-\u200F_]+$/),
            message: "This field must contain only alphanumeric characters with or without underscores"
        },
        ANUSpace: {
            test: a.bind(/^[0-9A-Za-z\u00C0-\u00FF\u0100-\u0259\u0386\u0388-\u04E9\u05D0-\u06D3\u1E80-\u200F_ ]+$/),
            message: "This field must contain only alphanumeric characters with or without underscores and spaces"
        },
        ANEmail: {
            test: a.bind(/^([_\dA-Za-z\u00C0-\u00FF\u0100-\u0259\u0386\u0388-\u04E9\u05D0-\u06D3\u1E80-\u200F\-]+|[\w\.\+\-]+@(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9]))$/),
            message: "This field must contain a valid username or email"
        },
        Integer: {
            test: a.bind(/^\-?\d+$/),
            message: "This field must only contain numbers, without any spaces"
        },
        CreditCardNumber: {
            test: a.bind(/^\d{13,16}$/),
            message: "This field must only contain numbers, without any spaces or dashes"
        },
        Decimal: {
            test: a.bind(/^\-?\d+(\.\d+)?$/),
            message: "This field must be a valid decimal number"
        },
        Date: {
            test: a.bind(/^\d{1,2}\-\d{1,2}-\d{4}( \d{2}:\d{2}:\d{2})?$/),
            message: "This field must be a valid date"
        },
        SqlDate: {
            test: a.bind(/^\d{4}\-\d{2}\-\d{2}$/),
            message: "This field must be a valid date"
        },
        SqlDateTime: {
            test: a.bind(/^\d{4}\-\d{2}\-\d{2}\s\d{2}\:\d{2}\:\d{2}$/),
            message: "This field must be a valid datetime"
        },
        SlashDate: {
            test: a.bind(/^\d{1,2}\/\d{1,2}\/\d{4}$/),
            message: "This field must be a valid date"
        },
        Email: {
            test: a.bind(/^[a-zA-Z0-9_.+\-]+@(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9]{2,63}$/),
            message: "This field must be a valid email address"
        },
        Name: {
            test: a.bind(/^[\wA-Za-z\u00C0-\u00FF\u0100-\u0259\u0386\u0388-\u04E9\u05D0-\u06D3\u1E80-\u200F\'. \-]{2,50}$/),
            message: "This field must be a valid name"
        },
        Username: {
            test: a.bind(/^[A-Za-z0-9_\-]+$/),
            message: "This field contains invalid characters. Please use only letters (a-z, A-Z), numbers, dash or underscore characters."
        },
        Password: {
            test: a.bind(/^\S{6,32}$/),
            message: "This field must be between 6 and 32 characters"
        },
        Address: {
            test: a.bind(/^[\w0-9A-Za-z\u00C0-\u00FF\u0100-\u0259\u0386\u0388-\u04E9\u05D0-\u06D3\u1E80-\u200F# \' \.\,\&\-]+$/),
            message: "This field must be a valid address"
        },
        City: {
            test: a.bind(/^[\wA-Za-z\u00C0-\u00FF\u0100-\u0259\u0386\u0388-\u04E9\u05D0-\u06D3\u1E80-\u200F \' \. \/ \-]+$/),
            message: "This field must be a valid city"
        },
        Province: {
            test: a.bind(/^[\wA-Za-z\u00C0-\u00FF\u0100-\u0259\u0386\u0388-\u04E9\u05D0-\u06D3\u1E80-\u200F ]+$/),
            message: "This field must be a valid province"
        },
        IntZip: {
            test: a.bind(/^[A-Za-z0-9#\. \-]+$/),
            message: "This field must be a valid zipcode"
        },
        UsZip: {
            test: a.bind(/^\d{5}(\-\d{4})?$/),
            message: "This field must be a valid US zipcode"
        },
        Country: {
            test: a.bind(/^[\wA-Za-z\u00C0-\u00FF\u0100-\u0259\u0386\u0388-\u04E9\u05D0-\u06D3\u1E80-\u200F\'. \-]{2,50}$/),
            message: "This field must be a valid country"
        },
        IntPhone: {
            test: a.bind(/^[0-9\+ \(\)\#\-]+$/),
            message: "This field must be a valid phone"
        },
        UsPhone: {
            test: a.bind(/^\d{3}\-\d{3}\-\d{4}$/),
            message: "This field must be a valid US phone"
        },
        PicExt: {
            test: a.bind(/^((jpg)|(jpeg)|(png)|(gif)){1}$/),
            message: "This field must be a valid image extension"
        },
        VideoExt: {
            test: a.bind(/^((mpg)|(mpeg)|(mov)|(avi)|(dv)|(qt)|(asf)|(flv)){1}$/),
            message: "This field must be a valid video extension"
        },
        Url: {
            test: a.bind(/^(http(?:s)?:\/\/|www\.)[^<>"]*$/),
            message: "This field must be a URL starting with http:// or www."
        },
        UrlWithProtocol: {
            test: a.bind(/^https?:\/\/(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-]*[a-zA-Z0-9])?\.)+(?:(?:[Xx][Nn]--)?[a-zA-Z0-9]{2,63}|\d{1,3})[^<>"]*$/),
            message: "This field must be a URL starting with http:// or https://"
        },
        UrlExt: {
            test: a.bind(/^((?:https?):\/\/)?(?:(?:(?:[\w\.\-\+!$&\'\(\)*\+,;=_]|%[0-9a-f]{2})+:)*(?:[\w\.\-\+%!$&\'\(\)*\+,;=]|%[0-9a-f]{2})+@)?(?:[A-Za-z0-9_\-]+\.)(?:[A-Za-z0-9\-\._])+(?::\d+)?(?:[\/|\?](?:[\w#!:\.\?\+=&@$\'~*,;_\/\(\)\[\]\-]|%[0-9a-f]{2})*)?$/),
            message: "This field must be a valid URL"
        },
        ContainsUrl: {
            test: a.bind(/(https?:\/\/|www\.)/i),
            message: "This field contains a URL"
        },
        Html: {
            test: function() {
                return !a.apply(/<((?!\/?span|\/?h1|\/?h2|\/?h3|\/?h4|\/?h5|\/?h6|\/?a|\/?b|\/?ol|\/?ul|\/?li|\/?i|\/?u|\/?strong|\/?em(?!bed)|\/?p|\/?div|\/?br|\/?unb|\/?uni|\/?\s|\/?\>)[^\>]*\>)/i, arguments);
            },
            message: "This field must be properly formed HTML"
        },
        Twitter: {
            test: a.bind(/^[A-Za-z0-9_\-]{1,15}$/),
            message: "This field must be a valid twitter username (without the @ character)"
        },
        required: {
            test: a.bind(/.+/),
            message: "This field is required"
        },
        requireTrimmed: {
            test: function(e) {
                return "" !== e.trim();
            },
            message: "This field must not be blank"
        },
        length: {
            test: function(e, s) {
                var t = /\[(,?\d+(?:,\d+)?)\]/.exec(s);
                return e = String(e).replace(/[\s]+/g, " "), !!t && new RegExp("^.{" + t[1] + "}$").test(e);
            },
            message: function(e, s) {
                var t;
                return (t = /\[(\d+),(\d+)\]/.exec(s)) ? "Must be between " + t[1] + " and " + t[2] + " characters." : (t = /\[,(\d+)\]/.exec(s)) ? "Must be at most " + t[1] + " characters." : (t = /\[(\d+),\]/.exec(s)) ? "Must be at least " + t[1] + " characters." : (t = /\[(\d+)\]/.exec(s), 
                t ? "Must be exactly " + t[1] + " characters." : void 0);
            }
        }
    }, i = /(\w+)(.*)/;
    return t = function(e) {
        var t, a = i.exec(e);
        return a && (e = a[1], t = a[2]), !u[e] || !u[e].test || (a = u[e].test(this, t), 
        a || (s.message = "function" == typeof u[e].message ? u[e].message(this, t) : u[e].message), 
        a);
    }, s.tests = u, s;
}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 120:
/***/ function(module, exports) {

!function(e) {
    e.fn.lazyload = function(t) {
        var o = {
            threshold: 0,
            failurelimit: 0,
            event: "scroll",
            effect: "show",
            container: window,
            enabled: !0
        };
        t && e.extend(o, t);
        var r = this;
        return "scroll" == o.event && e(o.container).bind("scroll", function(t) {
            var i = 0;
            r.each(function() {
                if (e.abovethetop(this, o) || e.leftofbegin(this, o)) ; else if (e.belowthefold(this, o) || e.rightoffold(this, o)) {
                    if (i++ > o.failurelimit) return !1;
                } else e(this).trigger("appear");
            });
            var n = e.grep(r, function(e) {
                return !e.loaded;
            });
            r = e(n);
        }), this.each(function() {
            var t = this;
            if (void 0 == e(t).attr("original") && e(t).attr("original", e(t).attr("src")), 
            "scroll" != o.event || void 0 == e(t).attr("src") || o.placeholder == e(t).attr("src") || e.abovethetop(t, o) || e.leftofbegin(t, o) || e.belowthefold(t, o) || e.rightoffold(t, o) ? (o.placeholder ? e(t).attr("src", o.placeholder) : e(t).removeAttr("src"), 
            t.loaded = !1) : t.loaded = !0, "IMG" == t.tagName && e(t).one("appear", function() {
                this.loaded || e("<img />").bind("load", function() {
                    e(t).hide().attr("src", e(t).attr("original"))[o.effect](o.effectspeed), t.loaded = !0;
                }).attr("src", e(t).attr("original"));
            }), "scroll" != o.event && e(t).bind(o.event, function(o) {
                t.loaded || e(t).trigger("appear");
            }), !o.enabled) return void e(this).trigger("appear");
        }), e(o.container).trigger(o.event), this;
    }, e.belowthefold = function(t, o) {
        if (void 0 === o.container || o.container === window) var r = e(window).height() + e(window).scrollTop(); else var r = e(o.container).offset().top + e(o.container).height();
        return r <= e(t).offset().top - o.threshold;
    }, e.rightoffold = function(t, o) {
        if (void 0 === o.container || o.container === window) var r = e(window).width() + e(window).scrollLeft(); else var r = e(o.container).offset().left + e(o.container).width();
        return r <= e(t).offset().left - o.threshold;
    }, e.abovethetop = function(t, o) {
        if (void 0 === o.container || o.container === window) var r = e(window).scrollTop(); else var r = e(o.container).offset().top;
        return r >= e(t).offset().top + o.threshold + e(t).height();
    }, e.leftofbegin = function(t, o) {
        if (void 0 === o.container || o.container === window) var r = e(window).scrollLeft(); else var r = e(o.container).offset().left;
        return r >= e(t).offset().left + o.threshold + e(t).width();
    }, e.extend(e.expr[":"], {
        "below-the-fold": "$.belowthefold(a, {threshold : 0, container: window})",
        "above-the-fold": "!$.belowthefold(a, {threshold : 0, container: window})",
        "right-of-fold": "$.rightoffold(a, {threshold : 0, container: window})",
        "left-of-fold": "!$.rightoffold(a, {threshold : 0, container: window})"
    });
}(jQuery);

/***/ },

/***/ 125:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(57) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t) {
    "use strict";
    return function(e, n) {
        var r, i;
        return r = function(r) {
            var i = "function" == typeof e ? e.call(this) : e;
            t[(n ? "replace" : "push") + "State"](i || {}, document.title, r);
        }, i = function(t) {
            if (!(0 !== t.button || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey)) {
                var e = t.currentTarget.href;
                window.location.href !== e && (t.preventDefault(), r.call(this, e));
            }
        }, i.submit = r, i;
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 126:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
    "use strict";
    function t(t) {
        var c = t.data.touch, i = t.originalEvent.changedTouches[0];
        if (!(Math.sqrt(Math.pow(c.pageX - i.pageX, 2) + Math.pow(c.pageY - i.pageY, 2)) > n)) {
            var o = this.$view.find("a:visible").first().get(0);
            o.click ? o.click() : window.location = o.href;
        }
    }
    var n = 30, c = 300;
    return {
        fatclick: function(n) {
            if (n = n || this.$view) {
                var i = t.bind(this);
                n.on("touchstart", function(t) {
                    function o() {
                        n.off({
                            touchend: i,
                            touchcancel: o
                        });
                    }
                    n.one("touchend", {
                        touch: t.originalEvent.changedTouches[0]
                    }, i).on("touchmove", o).on("touchcancel", o), setTimeout(o, c);
                });
            }
        }
    };
}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 127:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_follow/_button": __webpack_require__(54).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<lib/_follow/_button0",c,p,""));return t.fl(); },partials: {"<lib/_follow/_button0":{name:"lib/_follow/_button", partials: {}, subs: { "follow": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,52,80,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("button_follow_all|Follow All");});c.pop();}},"following": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,136,170,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("button_following_all|Following All");});c.pop();}},"unfollow": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,228,260,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("button_unfollow_all|Unfollow All");});c.pop();}},"type": function(c,p,t,i) {t.b("project");} }}}, subs: {  }}, "{{<lib/_follow/_button}}\n  {{$follow}}{{#translate}}button_follow_all|Follow All{{/translate}}{{/follow}}\n  {{$following}}{{#translate}}button_following_all|Following All{{/translate}}{{/following}}\n  {{$unfollow}}{{#translate}}button_unfollow_all|Unfollow All{{/translate}}{{/unfollow}}\n  {{$type}}project{{/type}}\n{{/lib/_follow/_button}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 128:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_follow/_button": __webpack_require__(54).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<lib/_follow/_button0",c,p,""));return t.fl(); },partials: {"<lib/_follow/_button0":{name:"lib/_follow/_button", partials: {}, subs: { "size": function(c,p,t,i) {t.b("form-button-small");},"follow": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,90,118,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("button_follow_all|Follow All");});c.pop();}},"following": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,174,208,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("button_following_all|Following All");});c.pop();}},"unfollow": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,266,298,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("button_unfollow_all|Unfollow All");});c.pop();}},"type": function(c,p,t,i) {t.b("project");} }}}, subs: {  }}, "{{<lib/_follow/_button}}\n  {{$size}}form-button-small{{/size}}\n  {{$follow}}{{#translate}}button_follow_all|Follow All{{/translate}}{{/follow}}\n  {{$following}}{{#translate}}button_following_all|Following All{{/translate}}{{/following}}\n  {{$unfollow}}{{#translate}}button_unfollow_all|Unfollow All{{/translate}}{{/unfollow}}\n  {{$type}}project{{/type}}\n{{/lib/_follow/_button}}", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 129:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_follow/_button": __webpack_require__(54).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(!t.s(t.f("is_profile_owner",c,p,1),c,p,1,0,0,"")){t.b(t.rp("<lib/_follow/_button0",c,p,""));};return t.fl(); },partials: {"<lib/_follow/_button0":{name:"lib/_follow/_button", partials: {}, subs: { "classes": function(c,p,t,i) {t.b("user-follow");},"type": function(c,p,t,i) {t.b("user");} }}}, subs: {  }}, "{{^is_profile_owner}}\n  {{<lib/_follow/_button}}\n    {{$classes}}user-follow{{/classes}}\n    {{$type}}user{{/type}}\n  {{/lib/_follow/_button}}\n{{/is_profile_owner}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 130:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<a class=\"");t.sub("classes",c,p,i);t.b(" follow-button-container ");if(t.s(t.f("is_following",c,p,1),c,p,0,76,85,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("following");});c.pop();}t.b(" js-action-follow\" data-followee=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" data-entity=\"");t.sub("type",c,p,i);t.b("\" data-following=\"");if(t.s(t.f("is_following",c,p,1),c,p,0,210,214,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("true");});c.pop();}if(!t.s(t.f("is_following",c,p,1),c,p,1,0,0,"")){t.b("false");};t.b("\">");t.b("\n" + i);t.b("  <span class=\"follow\">+ ");if(t.s(t.f("translate",c,p,1),c,p,0,312,332,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("button_follow|Follow");});c.pop();}t.b("</span>");t.b("\n" + i);t.b("  <span class=\"unfollow\">- ");if(t.s(t.f("translate",c,p,1),c,p,0,395,419,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("button_unfollow|Unfollow");});c.pop();}t.b("</span>");t.b("\n" + i);t.b("  <span class=\"following\">");if(t.s(t.f("translate",c,p,1),c,p,0,481,507,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("button_following|Following");});c.pop();}t.b("</span>");t.b("\n" + i);t.b("</a>");return t.fl(); },partials: {}, subs: { "classes": function(c,p,t,i) {},"type": function(c,p,t,i) {} }}, "<a class=\"{{$classes}}{{/classes}} follow-button-container {{#is_following}}following{{/is_following}} js-action-follow\" data-followee=\"{{id}}\" data-entity=\"{{$type}}{{/type}}\" data-following=\"{{#is_following}}true{{/is_following}}{{^is_following}}false{{/is_following}}\">\n  <span class=\"follow\">+ {{#translate}}button_follow|Follow{{/translate}}</span>\n  <span class=\"unfollow\">- {{#translate}}button_unfollow|Unfollow{{/translate}}</span>\n  <span class=\"following\">{{#translate}}button_following|Following{{/translate}}</span>\n</a>", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 131:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<picture>");t.b("\n" + i);if(t.s(t.f("sources",c,p,1),c,p,0,22,78,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <source srcset=\"");t.b(t.v(t.f("srcset",c,p,0)));t.b("\" media=\"");t.b(t.v(t.f("media_query",c,p,0)));t.b("\">");t.b("\n" + i);});c.pop();}if(t.s(t.f("img",c,p,1),c,p,0,99,122,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <img src=\"");t.b(t.v(t.f("src",c,p,0)));t.b("\">");t.b("\n" + i);});c.pop();}t.b("</picture>");return t.fl(); },partials: {}, subs: {  }}, "<picture>\n{{#sources}}\n  <source srcset=\"{{srcset}}\" media=\"{{media_query}}\">\n{{/sources}}\n{{#img}}\n  <img src=\"{{src}}\">\n{{/img}}\n</picture>", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 132:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_moreToggle": __webpack_require__(242).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(t.s(t.f("description_shortened",c,p,1),c,p,0,26,169,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_moreToggle0",c,p,""));});c.pop();}if(!t.s(t.f("description_shortened",c,p,1),c,p,1,0,0,"")){t.b(t.v(t.f("description",c,p,0)));};t.b("\n" + i);t.b("<div class=\"project-published\">");if(t.s(t.f("translate",c,p,1),c,p,0,309,342,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_published_date|Published:");});c.pop();}t.b(" <span class=\"js-format-timestamp\" data-timestamp=\"");t.b(t.v(t.f("published_on",c,p,0)));t.b("\"></span></div>");t.b("\n");return t.fl(); },partials: {"<lib/_moreToggle0":{name:"lib/_moreToggle", partials: {}, subs: { "shortened": function(c,p,t,i) {t.b(t.v(t.f("description_shortened",c,p,0)));},"full": function(c,p,t,i) {t.b(t.v(t.f("description",c,p,0)));} }}}, subs: {  }}, "{{#description_shortened}}\n  {{<lib/_moreToggle}}\n    {{$shortened}}{{description_shortened}}{{/shortened}}\n    {{$full}}{{description}}{{/full}}\n  {{/lib/_moreToggle}}\n{{/description_shortened}}\n{{^description_shortened}}{{description}}{{/description_shortened}}\n<div class=\"project-published\">{{#translate}}project_published_date|Published:{{/translate}} <span class=\"js-format-timestamp\" data-timestamp=\"{{published_on}}\"></span></div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 133:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_block": __webpack_require__(50).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(t.s(t.d("features.0",c,p,1),c,p,0,15,1037,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<project/_blocks/_block0",c,p,""));});c.pop();}return t.fl(); },partials: {"<project/_blocks/_block0":{name:"project/_blocks/_block", partials: {}, subs: { "class": function(c,p,t,i) {t.b("project-block--featured");},"content": function(c,p,t,i) {t.b("      <div class=\"featured\">");t.b("\n" + i);if(t.s(t.f("features",c,p,1),c,p,0,161,963,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("          <div class=\"featured__ribbon tooltipi-container\">");t.b("\n" + i);t.b("            <a href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\">");t.b("\n" + i);t.b("              <picture>");t.b("\n" + i);t.b("                <source srcset=\"");t.b(t.v(t.d("site.ribbon.image_2x",c,p,0)));t.b("\" media=\"(-webkit-min-device-pixel-ratio: 1.3), (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 4/3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx)\">");t.b("\n" + i);t.b("                <img src=\"");t.b(t.v(t.d("site.ribbon.image",c,p,0)));t.b("\">");t.b("\n" + i);t.b("              </picture>");t.b("\n" + i);t.b("            </a>");t.b("\n" + i);t.b("            <div class=\"tooltipi tooltipi-white\">");t.b("\n" + i);t.b("              <div class=\"project-block-header\">");if(t.s(t.f("translate",c,p,1),c,p,0,714,754,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_featured_on|Project Featured On:");});c.pop();}t.b("</div>");t.b("\n" + i);t.b("              <div><strong>");t.b(t.v(t.d("site.name",c,p,0)));t.b("</strong> &mdash; <span class=\"js-format-date\" data-date=\"");t.b(t.v(t.f("featured_on",c,p,0)));t.b("\">");t.b(t.v(t.f("featured_on",c,p,0)));t.b("</span></div>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("          </div>");t.b("\n" + i);});c.pop();}t.b("      </div>");t.b("\n" + i);} }}}, subs: {  }}, "{{#features.0}}\n  {{<project/_blocks/_block}}\n    {{$class}}project-block--featured{{/class}}\n    {{$content}}\n      <div class=\"featured\">\n        {{#features}}\n          <div class=\"featured__ribbon tooltipi-container\">\n            <a href=\"{{url}}\">\n              <picture>\n                <source srcset=\"{{site.ribbon.image_2x}}\" media=\"(-webkit-min-device-pixel-ratio: 1.3), (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 4/3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx)\">\n                <img src=\"{{site.ribbon.image}}\">\n              </picture>\n            </a>\n            <div class=\"tooltipi tooltipi-white\">\n              <div class=\"project-block-header\">{{#translate}}project_featured_on|Project Featured On:{{/translate}}</div>\n              <div><strong>{{site.name}}</strong> &mdash; <span class=\"js-format-date\" data-date=\"{{featured_on}}\">{{featured_on}}</span></div>\n            </div>\n          </div>\n        {{/features}}\n      </div>\n    {{/content}}\n  {{/project/_blocks/_block}}\n{{/features.0}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 134:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_block": __webpack_require__(50).template,"project/_blocks/_owner": __webpack_require__(98).template,"lib/_follow/_buttonUserSmall": __webpack_require__(60).template,"lib/_follow/_buttonAllSmall": __webpack_require__(128).template,"project/_blocks/_ownerEditButtonSmall": __webpack_require__(255).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<project/_blocks/_block4",c,p,""));return t.fl(); },partials: {"<project/_blocks/_block4":{name:"project/_blocks/_block", partials: {"<contentproject/_blocks/_owner3":{name:"project/_blocks/_owner", partials: {"<followButtonlib/_follow/_buttonUserSmall0":{name:"lib/_follow/_buttonUserSmall", partials: {}, subs: {  }},"<followButtonAlllib/_follow/_buttonAllSmall1":{name:"lib/_follow/_buttonAllSmall", partials: {}, subs: {  }},"<editButtonproject/_blocks/_ownerEditButtonSmall2":{name:"project/_blocks/_ownerEditButtonSmall", partials: {}, subs: {  }}}, subs: { "ownerInfoClasses": function(c,p,t,i) {t.b("project-owner-info--header");},"followButton": function(c,p,t,i) {t.b(t.rp("<followButtonlib/_follow/_buttonUserSmall0",c,p,"        "));},"followButtonAll": function(c,p,t,i) {t.b(t.rp("<followButtonAlllib/_follow/_buttonAllSmall1",c,p,"        "));},"editButton": function(c,p,t,i) {t.b(t.rp("<editButtonproject/_blocks/_ownerEditButtonSmall2",c,p,"        "));} }}}, subs: { "class": function(c,p,t,i) {t.b("project-block--owner");},"content": function(c,p,t,i) {t.b(t.rp("<contentproject/_blocks/_owner3",c,p,""));} }}}, subs: {  }}, "{{<project/_blocks/_block}}\n  {{$class}}project-block--owner{{/class}}\n  {{$content}}\n    {{<project/_blocks/_owner}}\n      {{$ownerInfoClasses}}project-owner-info--header{{/ownerInfoClasses}}\n\n      {{$followButton}}\n        {{>lib/_follow/_buttonUserSmall}}\n      {{/followButton}}\n\n      {{$followButtonAll}}\n        {{>lib/_follow/_buttonAllSmall}}\n      {{/followButtonAll}}\n\n      {{$editButton}}\n        {{>project/_blocks/_ownerEditButtonSmall}}\n      {{/editButton}}\n\n    {{/project/_blocks/_owner}}\n  {{/content}}\n{{/project/_blocks/_block}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 135:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_block": __webpack_require__(50).template,"project/_blocks/_stat": __webpack_require__(267).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<project/_blocks/_block3",c,p,""));return t.fl(); },partials: {"<project/_blocks/_block3":{name:"project/_blocks/_block", partials: {"<contentproject/_blocks/_stat0":{name:"project/_blocks/_stat", partials: {}, subs: { "count": function(c,p,t,i) {t.b(t.v(t.d("stats.views",c,p,0)));} }},"<contentproject/_blocks/_stat1":{name:"project/_blocks/_stat", partials: {}, subs: { "icon": function(c,p,t,i) {t.b("thumb");},"class": function(c,p,t,i) {t.b("js-stats-appreciations");},"count": function(c,p,t,i) {t.b(t.v(t.d("stats.appreciations",c,p,0)));} }},"<contentproject/_blocks/_stat2":{name:"project/_blocks/_stat", partials: {}, subs: { "icon": function(c,p,t,i) {t.b("comment");},"class": function(c,p,t,i) {},"count": function(c,p,t,i) {t.b(t.v(t.d("stats.comments",c,p,0)));} }}}, subs: { "class": function(c,p,t,i) {t.b("project-block--info");},"content": function(c,p,t,i) {t.b("    <div class=\"project-title\">");t.b(t.v(t.f("name",c,p,0)));t.b("</div>");t.b("\n");t.b("\n" + i);t.b("    <div class=\"project-fields js-project-fields\">");t.b("\n" + i);t.b("      <ul id=\"project-fields-list\">");t.b("\n" + i);if(t.s(t.f("fields",c,p,1),c,p,0,236,320,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <li class=\"project-fields-field\"><a href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\">");t.b(t.v(t.f("name",c,p,0)));t.b("</a></li>");t.b("\n" + i);});c.pop();}t.b("      </ul>");t.b("\n" + i);t.b("    </div>");t.b("\n");t.b("\n" + i);t.b("    <div id=\"project-stats\">");t.b("\n" + i);t.b(t.rp("<contentproject/_blocks/_stat0",c,p,""));t.b("\n" + i);t.b(t.rp("<contentproject/_blocks/_stat1",c,p,""));t.b("\n" + i);t.b(t.rp("<contentproject/_blocks/_stat2",c,p,""));t.b("    </div>");t.b("\n");t.b("\n" + i);t.b("    <div class=\"project-published\">");t.b("\n" + i);t.b("      ");if(t.s(t.f("translate",c,p,1),c,p,0,942,975,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_published_date|Published:");});c.pop();}t.b(" <span class=\"js-format-timestamp\" data-timestamp=\"");t.b(t.v(t.f("published_on",c,p,0)));t.b("\"></span>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);} }}}, subs: {  }}, "{{<project/_blocks/_block}}\n  {{$class}}project-block--info{{/class}}\n  {{$content}}\n    <div class=\"project-title\">{{name}}</div>\n\n    <div class=\"project-fields js-project-fields\">\n      <ul id=\"project-fields-list\">\n      {{#fields}}\n        <li class=\"project-fields-field\"><a href=\"{{url}}\">{{name}}</a></li>\n      {{/fields}}\n      </ul>\n    </div>\n\n    <div id=\"project-stats\">\n      {{<project/_blocks/_stat}}\n        {{$count}}{{stats.views}}{{/count}}\n      {{/project/_blocks/_stat}}\n\n      {{<project/_blocks/_stat}}\n        {{$icon}}thumb{{/icon}}\n        {{$class}}js-stats-appreciations{{/class}}\n        {{$count}}{{stats.appreciations}}{{/count}}\n      {{/project/_blocks/_stat}}\n\n      {{<project/_blocks/_stat}}\n        {{$icon}}comment{{/icon}}\n        {{$class}}{{/class}}\n        {{$count}}{{stats.comments}}{{/count}}\n      {{/project/_blocks/_stat}}\n    </div>\n\n    <div class=\"project-published\">\n      {{#translate}}project_published_date|Published:{{/translate}} <span class=\"js-format-timestamp\" data-timestamp=\"{{published_on}}\"></span>\n    </div>\n  {{/content}}\n{{/project/_blocks/_block}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 136:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(0), __webpack_require__(53), __webpack_require__(29), __webpack_require__(12), __webpack_require__(67), __webpack_require__(19) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, r, t, n, i, o, a) {
    "use strict";
    function s(e, r) {
        var t = e[r.name];
        return e[r.name] = t ? [].concat(t, r.value) : r.value, e;
    }
    var f = function(e) {
        var r = {};
        if (Object.keys(e).forEach(function(t) {
            var n = this.find('[name="' + t + '"]').data("validate");
            i(e[t], n) || (r[t] = i.message);
        }, this), Object.keys(r).length) throw r;
        return e;
    };
    return {
        onSubmit: function(r, i, c) {
            i = i || this.$view;
            var u = i.is("form") ? i : i.find("form");
            i.on("click keydown", ".form-submit:not([type=submit])", function(e) {
                switch (e.which) {
                  case 1:
                  case 13:
                  case 32:
                    u.submit();
                }
            }), u.on("submit", function(i) {
                var m = new t(), l = u.serializeArray().reduce(s, {}), v = {
                    url: u.attr("action"),
                    type: u.attr("method") || "POST"
                };
                return i.originalEvent = i.originalEvent || {}, u.find(".form-error").remove(), 
                u.find(".form-item-error").removeClass("form-item-error"), i.originalEvent.promise = (i.isDefaultPrevented() && !u.attr("onsubmit") ? m : m.then(f.bind(u))).then(function(n) {
                    if (v.data = n, "function" != typeof r) return e(v);
                    var i = new t(), o = i.thenable(), a = r.call(o, n);
                    return i.resolve(a === o ? e(v) : a), i;
                }).then(function() {
                    c || u.find(":input").val("").removeAttr("checked selected");
                }, function(e) {
                    var r, t;
                    if (e instanceof Error) return void console.error(e);
                    throw e.responseJSON && (e = e.responseJSON), e.messages && a(u, e.messages), console.warn(e), 
                    r = e.errors || e, t = n.is("desktop") ? [ "form-error" ] : [ "form-error", "form-error-right" ], 
                    Object.keys(r).forEach(function(e) {
                        o(u.find("[name=" + e + "]"), r[e], t);
                    }), e;
                }), m.resolve(l), !1;
            });
        },
        onCancel: function(e) {
            this.$view.on("click", ".form-button-cancel", function() {
                this.$view.find(".form-text, .form-textarea").val(""), "function" == typeof e && e();
            }.bind(this));
        }
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 138:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(32), __webpack_require__(21), __webpack_require__(148) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, t, n, i) {
    "use strict";
    var r = n.extend({
        endpoint: function() {
            return "/v2/jobs/discovered/" + this.id;
        },
        read: function() {
            return e(this.endpoint()).then(function(e) {
                this._model.set("options", e.jobs.sort(function(e, t) {
                    return t.is_discovered + t.is_shortlisted + t.is_recommended - (e.is_discovered + e.is_shortlisted + e.is_recommended);
                }));
            }.bind(this));
        },
        update: function(t) {
            return e({
                url: this.endpoint(),
                type: "PATCH",
                data: t
            });
        },
        render: function(e) {
            var t = this._super.bind(this);
            return this.read().then(function() {
                return e;
            }).then(t);
        }
    }, {
        VIEW_CLASS: i,
        MODEL_CLASS: t.extend({
            preselected: function() {
                return this.get("options").map(function(e) {
                    if (e.is_discovered || e.is_shortlisted || e.is_recommended) return e.id;
                }).filter(Boolean);
            }
        })
    });
    return r;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 139:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(e) {
     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(6) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : e(jQuery);
}(function(e) {
    var t = !1;
    return e(document).mouseup(function() {
        t = !1;
    }), e.widget("ui.mouse", {
        version: "1.11.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e);
            }).bind("click." + this.widgetName, function(s) {
                if (!0 === e.data(s.target, t.widgetName + ".preventClickEvent")) return e.removeData(s.target, t.widgetName + ".preventClickEvent"), 
                s.stopImmediatePropagation(), !1;
            }), this.started = !1;
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
        },
        _mouseDown: function(s) {
            if (!t) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(s), this._mouseDownEvent = s;
                var i = this, o = 1 === s.which, u = !("string" != typeof this.options.cancel || !s.target.nodeName) && e(s.target).closest(this.options.cancel).length;
                return !(o && !u && this._mouseCapture(s)) || (this.mouseDelayMet = !this.options.delay, 
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    i.mouseDelayMet = !0;
                }, this.options.delay)), this._mouseDistanceMet(s) && this._mouseDelayMet(s) && (this._mouseStarted = this._mouseStart(s) !== !1, 
                !this._mouseStarted) ? (s.preventDefault(), !0) : (!0 === e.data(s.target, this.widgetName + ".preventClickEvent") && e.removeData(s.target, this.widgetName + ".preventClickEvent"), 
                this._mouseMoveDelegate = function(e) {
                    return i._mouseMove(e);
                }, this._mouseUpDelegate = function(e) {
                    return i._mouseUp(e);
                }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), 
                s.preventDefault(), t = !0, !0));
            }
        },
        _mouseMove: function(t) {
            if (this._mouseMoved) {
                if (e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button) return this._mouseUp(t);
                if (!t.which) return this._mouseUp(t);
            }
            return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), 
            t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, 
            this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted);
        },
        _mouseUp: function(s) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), 
            this._mouseStarted && (this._mouseStarted = !1, s.target === this._mouseDownEvent.target && e.data(s.target, this.widgetName + ".preventClickEvent", !0), 
            this._mouseStop(s)), t = !1, !1;
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance;
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet;
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0;
        }
    });
});

/***/ },

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(t) {
     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : t(jQuery);
}(function(t) {
    function e(e, i) {
        var r, o, u, s = e.nodeName.toLowerCase();
        return "area" === s ? (r = e.parentNode, o = r.name, !(!e.href || !o || "map" !== r.nodeName.toLowerCase()) && (u = t("img[usemap='#" + o + "']")[0], 
        !!u && n(u))) : (/^(input|select|textarea|button|object)$/.test(s) ? !e.disabled : "a" === s ? e.href || i : i) && n(e);
    }
    function n(e) {
        return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
            return "hidden" === t.css(this, "visibility");
        }).length;
    }
    t.ui = t.ui || {}, t.extend(t.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), t.fn.extend({
        scrollParent: function(e) {
            var n = this.css("position"), i = "absolute" === n, r = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/, o = this.parents().filter(function() {
                var e = t(this);
                return (!i || "static" !== e.css("position")) && r.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"));
            }).eq(0);
            return "fixed" !== n && o.length ? o : t(this[0].ownerDocument || document);
        },
        uniqueId: function() {
            var t = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++t);
                });
            };
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id");
            });
        }
    }), t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
            return function(n) {
                return !!t.data(n, e);
            };
        }) : function(e, n, i) {
            return !!t.data(e, i[3]);
        },
        focusable: function(n) {
            return e(n, !isNaN(t.attr(n, "tabindex")));
        },
        tabbable: function(n) {
            var i = t.attr(n, "tabindex"), r = isNaN(i);
            return (r || i >= 0) && e(n, !r);
        }
    }), t("<a>").outerWidth(1).jquery || t.each([ "Width", "Height" ], function(e, n) {
        function i(e, n, i, o) {
            return t.each(r, function() {
                n -= parseFloat(t.css(e, "padding" + this)) || 0, i && (n -= parseFloat(t.css(e, "border" + this + "Width")) || 0), 
                o && (n -= parseFloat(t.css(e, "margin" + this)) || 0);
            }), n;
        }
        var r = "Width" === n ? [ "Left", "Right" ] : [ "Top", "Bottom" ], o = n.toLowerCase(), u = {
            innerWidth: t.fn.innerWidth,
            innerHeight: t.fn.innerHeight,
            outerWidth: t.fn.outerWidth,
            outerHeight: t.fn.outerHeight
        };
        t.fn["inner" + n] = function(e) {
            return void 0 === e ? u["inner" + n].call(this) : this.each(function() {
                t(this).css(o, i(this, e) + "px");
            });
        }, t.fn["outer" + n] = function(e, r) {
            return "number" != typeof e ? u["outer" + n].call(this, e) : this.each(function() {
                t(this).css(o, i(this, e, !0, r) + "px");
            });
        };
    }), t.fn.addBack || (t.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
        return function(n) {
            return arguments.length ? e.call(this, t.camelCase(n)) : e.call(this);
        };
    }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), 
    t.fn.extend({
        focus: function(e) {
            return function(n, i) {
                return "number" == typeof n ? this.each(function() {
                    var e = this;
                    setTimeout(function() {
                        t(e).focus(), i && i.call(e);
                    }, n);
                }) : e.apply(this, arguments);
            };
        }(t.fn.focus),
        disableSelection: function() {
            var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(t + ".ui-disableSelection", function(t) {
                    t.preventDefault();
                });
            };
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection");
        },
        zIndex: function(e) {
            if (void 0 !== e) return this.css("zIndex", e);
            if (this.length) for (var n, i, r = t(this[0]); r.length && r[0] !== document; ) {
                if (n = r.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (i = parseInt(r.css("zIndex"), 10), 
                !isNaN(i) && 0 !== i)) return i;
                r = r.parent();
            }
            return 0;
        }
    }), t.ui.plugin = {
        add: function(e, n, i) {
            var r, o = t.ui[e].prototype;
            for (r in i) o.plugins[r] = o.plugins[r] || [], o.plugins[r].push([ n, i[r] ]);
        },
        call: function(t, e, n, i) {
            var r, o = t.plugins[e];
            if (o && (i || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)) for (r = 0; r < o.length; r++) t.options[o[r][0]] && o[r][1].apply(t.element, n);
        }
    };
});

/***/ },

/***/ 141:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(t) {
     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(14), __webpack_require__(139), __webpack_require__(6) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : t(jQuery);
}(function(t) {
    return t.widget("ui.sortable", t.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(t, e, i) {
            return t >= e && t < e + i;
        },
        _isFloating: function(t) {
            return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"));
        },
        _create: function() {
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), 
            this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), 
            this.ready = !0;
        },
        _setOption: function(t, e) {
            this._super(t, e), "handle" === t && this._setHandleClassName();
        },
        _setHandleClassName: function() {
            this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), t.each(this.items, function() {
                (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle");
            });
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), 
            this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this;
        },
        _mouseCapture: function(e, i) {
            var s = null, o = !1, r = this;
            return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e), 
            t(e.target).parents().each(function() {
                if (t.data(this, r.widgetName + "-item") === r) return s = t(this), !1;
            }), t.data(e.target, r.widgetName + "-item") === r && (s = t(e.target)), !!s && (!(this.options.handle && !i && (t(this.options.handle, s).find("*").addBack().each(function() {
                this === e.target && (o = !0);
            }), !o)) && (this.currentItem = s, this._removeCurrentsFromItems(), !0))));
        },
        _mouseStart: function(e, i, s) {
            var o, r, n = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), 
            this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), 
            this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), 
            this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, 
            this.originalPageY = e.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), 
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), 
            n.containment && this._setContainment(), n.cursor && "auto" !== n.cursor && (r = this.document.find("body"), 
            this.storedCursor = r.css("cursor"), r.css("cursor", n.cursor), this.storedStylesheet = t("<style>*{ cursor: " + n.cursor + " !important; }</style>").appendTo(r)), 
            n.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), 
            this.helper.css("opacity", n.opacity)), n.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), 
            this.helper.css("zIndex", n.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), 
            this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), 
            !s) for (o = this.containers.length - 1; o >= 0; o--) this.containers[o]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), 
            this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), 
            !0;
        },
        _mouseDrag: function(e) {
            var i, s, o, r, n = this.options, h = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), 
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < n.scrollSensitivity ? this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop + n.scrollSpeed : e.pageY - this.overflowOffset.top < n.scrollSensitivity && (this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop - n.scrollSpeed), 
            this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < n.scrollSensitivity ? this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft + n.scrollSpeed : e.pageX - this.overflowOffset.left < n.scrollSensitivity && (this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft - n.scrollSpeed)) : (e.pageY - this.document.scrollTop() < n.scrollSensitivity ? h = this.document.scrollTop(this.document.scrollTop() - n.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < n.scrollSensitivity && (h = this.document.scrollTop(this.document.scrollTop() + n.scrollSpeed)), 
            e.pageX - this.document.scrollLeft() < n.scrollSensitivity ? h = this.document.scrollLeft(this.document.scrollLeft() - n.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < n.scrollSensitivity && (h = this.document.scrollLeft(this.document.scrollLeft() + n.scrollSpeed))), 
            h !== !1 && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), 
            this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), 
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), 
            i = this.items.length - 1; i >= 0; i--) if (s = this.items[i], o = s.item[0], r = this._intersectsWithPointer(s), 
            r && s.instance === this.currentContainer && !(o === this.currentItem[0] || this.placeholder[1 === r ? "next" : "prev"]()[0] === o || t.contains(this.placeholder[0], o) || "semi-dynamic" === this.options.type && t.contains(this.element[0], o))) {
                if (this.direction = 1 === r ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
                this._rearrange(e, s), this._trigger("change", e, this._uiHash());
                break;
            }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), 
            this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, 
            !1;
        },
        _mouseStop: function(e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), 
                this.options.revert) {
                    var s = this, o = this.placeholder.offset(), r = this.options.axis, n = {};
                    r && "x" !== r || (n.left = o.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), 
                    r && "y" !== r || (n.top = o.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), 
                    this.reverting = !0, t(this.helper).animate(n, parseInt(this.options.revert, 10) || 500, function() {
                        s._clear(e);
                    });
                } else this._clear(e, i);
                return !1;
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), 
                this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), 
                this.containers[e].containerCache.over = 0);
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 
            "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), 
            t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), 
            this;
        },
        serialize: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected), s = [];
            return e = e || {}, t(i).each(function() {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]));
            }), !s.length && e.key && s.push(e.key + "="), s.join("&");
        },
        toArray: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected), s = [];
            return e = e || {}, i.each(function() {
                s.push(t(e.item || this).attr(e.attribute || "id") || "");
            }), s;
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left, i = e + this.helperProportions.width, s = this.positionAbs.top, o = s + this.helperProportions.height, r = t.left, n = r + t.width, h = t.top, a = h + t.height, l = this.offset.click.top, c = this.offset.click.left, p = "x" === this.options.axis || s + l > h && s + l < a, f = "y" === this.options.axis || e + c > r && e + c < n, u = p && f;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? u : r < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < n && h < s + this.helperProportions.height / 2 && o - this.helperProportions.height / 2 < a;
        },
        _intersectsWithPointer: function(t) {
            var e = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height), i = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width), s = e && i, o = this._getDragVerticalDirection(), r = this._getDragHorizontalDirection();
            return !!s && (this.floating ? r && "right" === r || "down" === o ? 2 : 1 : o && ("down" === o ? 2 : 1));
        },
        _intersectsWithSides: function(t) {
            var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height), i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width), s = this._getDragVerticalDirection(), o = this._getDragHorizontalDirection();
            return this.floating && o ? "right" === o && i || "left" === o && !i : s && ("down" === s && e || "up" === s && !e);
        },
        _getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up");
        },
        _getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left");
        },
        refresh: function(t) {
            return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), 
            this;
        },
        _connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor === String ? [ t.connectWith ] : t.connectWith;
        },
        _getItemsAsjQuery: function(e) {
            function i() {
                h.push(this);
            }
            var s, o, r, n, h = [], a = [], l = this._connectWith();
            if (l && e) for (s = l.length - 1; s >= 0; s--) for (r = t(l[s], this.document[0]), 
            o = r.length - 1; o >= 0; o--) n = t.data(r[o], this.widgetFullName), n && n !== this && !n.options.disabled && a.push([ t.isFunction(n.options.items) ? n.options.items.call(n.element) : t(n.options.items, n.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), n ]);
            for (a.push([ t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this ]), 
            s = a.length - 1; s >= 0; s--) a[s][0].each(i);
            return t(h);
        },
        _removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function(t) {
                for (var i = 0; i < e.length; i++) if (e[i] === t.item[0]) return !1;
                return !0;
            });
        },
        _refreshItems: function(e) {
            this.items = [], this.containers = [ this ];
            var i, s, o, r, n, h, a, l, c = this.items, p = [ [ t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                item: this.currentItem
            }) : t(this.options.items, this.element), this ] ], f = this._connectWith();
            if (f && this.ready) for (i = f.length - 1; i >= 0; i--) for (o = t(f[i], this.document[0]), 
            s = o.length - 1; s >= 0; s--) r = t.data(o[s], this.widgetFullName), r && r !== this && !r.options.disabled && (p.push([ t.isFunction(r.options.items) ? r.options.items.call(r.element[0], e, {
                item: this.currentItem
            }) : t(r.options.items, r.element), r ]), this.containers.push(r));
            for (i = p.length - 1; i >= 0; i--) for (n = p[i][1], h = p[i][0], s = 0, l = h.length; s < l; s++) a = t(h[s]), 
            a.data(this.widgetName + "-item", n), c.push({
                item: a,
                instance: n,
                width: 0,
                height: 0,
                left: 0,
                top: 0
            });
        },
        refreshPositions: function(e) {
            this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), 
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, s, o, r;
            for (i = this.items.length - 1; i >= 0; i--) s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (o = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, 
            e || (s.width = o.outerWidth(), s.height = o.outerHeight()), r = o.offset(), s.left = r.left, 
            s.top = r.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (i = this.containers.length - 1; i >= 0; i--) r = this.containers[i].element.offset(), 
            this.containers[i].containerCache.left = r.left, this.containers[i].containerCache.top = r.top, 
            this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), 
            this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this;
        },
        _createPlaceholder: function(e) {
            e = e || this;
            var i, s = e.options;
            s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
                element: function() {
                    var s = e.currentItem[0].nodeName.toLowerCase(), o = t("<" + s + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tbody" === s ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(o)) : "tr" === s ? e._createTrPlaceholder(e.currentItem, o) : "img" === s && o.attr("src", e.currentItem.attr("src")), 
                    i || o.css("visibility", "hidden"), o;
                },
                update: function(t, o) {
                    i && !s.forcePlaceholderSize || (o.height() || o.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), 
                    o.width() || o.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)));
                }
            }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), 
            s.placeholder.update(e, e.placeholder);
        },
        _createTrPlaceholder: function(e, i) {
            var s = this;
            e.children().each(function() {
                t("<td>&#160;</td>", s.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i);
            });
        },
        _contactContainers: function(e) {
            var i, s, o, r, n, h, a, l, c, p, f = null, u = null;
            for (i = this.containers.length - 1; i >= 0; i--) if (!t.contains(this.currentItem[0], this.containers[i].element[0])) if (this._intersectsWith(this.containers[i].containerCache)) {
                if (f && t.contains(this.containers[i].element[0], f.element[0])) continue;
                f = this.containers[i], u = i;
            } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), 
            this.containers[i].containerCache.over = 0);
            if (f) if (1 === this.containers.length) this.containers[u].containerCache.over || (this.containers[u]._trigger("over", e, this._uiHash(this)), 
            this.containers[u].containerCache.over = 1); else {
                for (o = 1e4, r = null, c = f.floating || this._isFloating(this.currentItem), n = c ? "left" : "top", 
                h = c ? "width" : "height", p = c ? "clientX" : "clientY", s = this.items.length - 1; s >= 0; s--) t.contains(this.containers[u].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (a = this.items[s].item.offset()[n], 
                l = !1, e[p] - a > this.items[s][h] / 2 && (l = !0), Math.abs(e[p] - a) < o && (o = Math.abs(e[p] - a), 
                r = this.items[s], this.direction = l ? "up" : "down"));
                if (!r && !this.options.dropOnEmpty) return;
                if (this.currentContainer === this.containers[u]) return void (this.currentContainer.containerCache.over || (this.containers[u]._trigger("over", e, this._uiHash()), 
                this.currentContainer.containerCache.over = 1));
                r ? this._rearrange(e, r, null, !0) : this._rearrange(e, null, this.containers[u].element, !0), 
                this._trigger("change", e, this._uiHash()), this.containers[u]._trigger("change", e, this._uiHash(this)), 
                this.currentContainer = this.containers[u], this.options.placeholder.update(this.currentContainer, this.placeholder), 
                this.containers[u]._trigger("over", e, this._uiHash(this)), this.containers[u].containerCache.over = 1;
            }
        },
        _createHelper: function(e) {
            var i = this.options, s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [ e, this.currentItem ])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), 
            s[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), s[0].style.width && !i.forceHelperSize || s.width(this.currentItem.width()), 
            s[0].style.height && !i.forceHelperSize || s.height(this.currentItem.height()), 
            s;
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), 
            "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top);
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), 
            e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                };
            }
            return {
                top: 0,
                left: 0
            };
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            };
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },
        _setContainment: function() {
            var e, i, s, o = this.options;
            "parent" === o.containment && (o.containment = this.helper[0].parentNode), "document" !== o.containment && "window" !== o.containment || (this.containment = [ 0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === o.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === o.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ]), 
            /^(document|window|parent)$/.test(o.containment) || (e = t(o.containment)[0], i = t(o.containment).offset(), 
            s = "hidden" !== t(e).css("overflow"), this.containment = [ i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top ]);
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var s = "absolute" === e ? 1 : -1, o = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, r = /(html|body)/i.test(o[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : r ? 0 : o.scrollTop()) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : r ? 0 : o.scrollLeft()) * s
            };
        },
        _generatePosition: function(e) {
            var i, s, o = this.options, r = e.pageX, n = e.pageY, h = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, a = /(html|body)/i.test(h[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), 
            this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (r = this.containment[0] + this.offset.click.left), 
            e.pageY - this.offset.click.top < this.containment[1] && (n = this.containment[1] + this.offset.click.top), 
            e.pageX - this.offset.click.left > this.containment[2] && (r = this.containment[2] + this.offset.click.left), 
            e.pageY - this.offset.click.top > this.containment[3] && (n = this.containment[3] + this.offset.click.top)), 
            o.grid && (i = this.originalPageY + Math.round((n - this.originalPageY) / o.grid[1]) * o.grid[1], 
            n = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - o.grid[1] : i + o.grid[1] : i, 
            s = this.originalPageX + Math.round((r - this.originalPageX) / o.grid[0]) * o.grid[0], 
            r = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - o.grid[0] : s + o.grid[0] : s)), 
            {
                top: n - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : h.scrollTop()),
                left: r - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : h.scrollLeft())
            };
        },
        _rearrange: function(t, e, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), 
            this.counter = this.counter ? ++this.counter : 1;
            var o = this.counter;
            this._delay(function() {
                o === this.counter && this.refreshPositions(!s);
            });
        },
        _clear: function(t, e) {
            function i(t, e, i) {
                return function(s) {
                    i._trigger(t, s, e._uiHash(e));
                };
            }
            this.reverting = !1;
            var s, o = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), 
            this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (s in this._storedCSS) "auto" !== this._storedCSS[s] && "static" !== this._storedCSS[s] || (this._storedCSS[s] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
            } else this.currentItem.show();
            for (this.fromOutside && !e && o.push(function(t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside));
            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || o.push(function(t) {
                this._trigger("update", t, this._uiHash());
            }), this !== this.currentContainer && (e || (o.push(function(t) {
                this._trigger("remove", t, this._uiHash());
            }), o.push(function(t) {
                return function(e) {
                    t._trigger("receive", e, this._uiHash(this));
                };
            }.call(this, this.currentContainer)), o.push(function(t) {
                return function(e) {
                    t._trigger("update", e, this._uiHash(this));
                };
            }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) e || o.push(i("deactivate", this, this.containers[s])), 
            this.containers[s].containerCache.over && (o.push(i("out", this, this.containers[s])), 
            this.containers[s].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), 
            this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), 
            this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), 
            this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 
            this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), 
            this.helper = null), !e) {
                for (s = 0; s < o.length; s++) o[s].call(this, t);
                this._trigger("stop", t, this._uiHash());
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval;
        },
        _trigger: function() {
            t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel();
        },
        _uiHash: function(e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            };
        }
    });
});

/***/ },

/***/ 142:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(2), __webpack_require__(5), __webpack_require__(47), __webpack_require__(21), __webpack_require__(28), __webpack_require__(42), __webpack_require__(20), __webpack_require__(150), __webpack_require__(48) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, t, n, i, a, s, o, r, d, u) {
    "use strict";
    var c, l = "/v2/inbox/threads";
    return c = a.extend({
        create: function(e, n) {
            var i;
            return i = t({
                url: l,
                type: "POST",
                data: {
                    recipients: this._model.get("id"),
                    message: e,
                    is_job: n
                }
            }), i.then(function() {
                this.trigger("sent");
            }.bind(this)), i;
        },
        setContext: function(e) {
            var t;
            return i.isLoggedIn() ? this._super(e) : (t = new u({
                id: e.data("contact_id"),
                entity: "user",
                action: "message"
            }), void t.setContext(e));
        },
        render: function(t) {
            this.$source = e(t), this._model.set({
                id: this.$source.data("contact_id"),
                name: this.$source.data("contact_name")
            }), this._super(t);
        }
    }, {
        HIDE_DELAY: 1500,
        init: function(e, t) {
            var n = new this(t);
            return n.setContext(e.find(".js-action-message-user")), n;
        },
        VIEW_CLASS: {
            phone: s.extend(d),
            tablet: o.extend(d),
            desktop: r.extend(d).extend({
                templateData: function() {
                    var e = this._super();
                    return e.title = n.translate("message_dialog_header_named", "Send Message to ") + e.name, 
                    e;
                }
            })
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 143:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(3), __webpack_require__(21), __webpack_require__(20), __webpack_require__(35), __webpack_require__(57), __webpack_require__(112), __webpack_require__(13), __webpack_require__(204) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, t, i, o, a, r, n, s, l) {
    "use strict";
    var h = o.extend({
        mustache: l,
        shareUrl: a.getLocation().href.replace(/\?share=1$/, "").replace(/share=1&?/, ""),
        hide: function() {
            this._super(), r.replaceState(r.getState(), document.title, a.getLocation("search").replace(/share=1&?/, ""));
        },
        templateData: function() {
            return {
                header: this._model.get("header"),
                url: this.shareUrl,
                classes: [ "promote-dialog" ],
                fullBleed: !0
            };
        },
        rendered: function() {
            this._super();
            var t = this.shareUrl, i = this._model.get("text"), o = this._model.get("image"), a = this._model.get("loggedLocation"), r = this;
            this._log("Share Popup Rendered", a), this.$view.find(".js-viral-share-buttons").each(function() {
                e(this).on("click.beff-util-social", function() {
                    var r = e(this).data("service");
                    n.open(r, {
                        loggedLocation: a,
                        url: t,
                        text: i,
                        image: o
                    });
                });
            }), this.$view.find(".js-share-link").on("click", function() {
                r._log("Copy Link Clicked", a), e(this).find("input").focus().select();
            });
        },
        _log: function(e, t) {
            s.info("social_sharing", e, {
                location: t
            });
        }
    });
    return i.extend({}, {
        VIEW_CLASS: {
            desktop: h
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 1437:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(66), __webpack_require__(722), __webpack_require__(332), __webpack_require__(314), __webpack_require__(331), __webpack_require__(733), __webpack_require__(732), __webpack_require__(734), __webpack_require__(147) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(i, e, r, t, o, p, l, n, f, s) {
    "use strict";
    e.init(), n.init(i(".js-profile")), r.init(i(".js-project-dropdown-toggle")), p.init(i(".js-profile-share-button")), 
    t.init(f, l, o), s.init();
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 144:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(4) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e) {
    "use strict";
    return new e();
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 145:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"js-controls-overlay-reorder controls-overlay-action controls-overlay-reorder\">");t.b("\n" + i);t.b("    <span class=\"beicons-pre beicons-pre-hamburger edit-icon\"></span>");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"js-controls-overlay-reorder controls-overlay-action controls-overlay-reorder\">\n    <span class=\"beicons-pre beicons-pre-hamburger edit-icon\"></span>\n</div>", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 146:
/***/ function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(32), __webpack_require__(7), __webpack_require__(33), __webpack_require__(13), __webpack_require__(108), __webpack_require__(107), __webpack_require__(151) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, t, i, n, r, o, s, d) {
    return n.extend({
        init: function(i, n) {
            this.views = [], this._model = new t(i.id, {
                appreciatedOn: 0,
                thanks: !1,
                renderPulsePoint: i.renderPulsePoint
            }), n.each(function(t, i) {
                this.views.push(this._initView(e(i)));
            }.bind(this));
        },
        _initView: function(e) {
            var t = new d(this._model);
            return t.$view = e, t._controller = this, t;
        },
        render: function() {
            var e = new i();
            return o.view("project", this.id, function(t) {
                var i = t.t || 0;
                this._model.set("appreciatedOn", i), this.views.forEach(function(e) {
                    e.render(), 0 === i && this._model.get("renderPulsePoint") && e.$view.data("renderPulsePoint") && (this.pulsePoint = new s({
                        from: "appreciate"
                    }), this.pulsePoint.render(e.$view));
                }.bind(this)), e.resolve();
            }.bind(this)), e;
        },
        appreciate: function(e) {
            o.appreciate("project", this._model.id()), this._model.set("thanks", !0), r.info("bane", "Appreciate Action created", {
                from: e
            }), this.trigger("appreciate");
        },
        destroy: function() {
            this.views.forEach(function(e) {
                e.destroy();
            }), this.views = [], this._model.destroy(), this._model = null, this.pulsePoint && this.pulsePoint.destroy();
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 147:
/***/ function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(3), __webpack_require__(235), __webpack_require__(232) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, t, i) {
    return e({
        selector: ".cover-name-link, .cover-img-link, a.cover-img",
        entity: "project",
        Dialog: i
    }, t);
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 148:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(3), __webpack_require__(28), __webpack_require__(42), __webpack_require__(20), __webpack_require__(95), __webpack_require__(11), __webpack_require__(5), __webpack_require__(152), __webpack_require__(8) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, t, i, n, s, a, o, d) {
    "use strict";
    var r = {
        mustache: d,
        templateData: function() {
            var t = e({
                title: o.translate("talent_sidebar_save_as_candidate", "Save as Candidate"),
                classes: [ "list-popup", "add-to-ts-popup" ],
                buttons: [ {
                    label: o.translate("talent_sidebar_button_save", "Save"),
                    classes: [ "form-button-default", "js-submit" ]
                } ]
            }, this._super());
            return t.options.length || (t.buttons = [ {
                label: o.translate("talent_sidebar_button_okay", "Okay"),
                classes: [ "form-button-default", "js-close" ]
            } ]), t;
        },
        rendered: function() {
            var e = new a(this.$view), t = this.$view.find(".js-submit");
            this.form = e, e.on("success", function() {
                this.showButtons();
            }), e.commit = function(e) {
                var t, i, n = this._model.preselected(), s = Array.isArray(e.data.searches) ? e.data.searches : [ e.data.searches ];
                return s = s.filter(Boolean).map(Number), t = s.filter(function(e) {
                    return !~n.indexOf(+e);
                }), i = n.filter(function(e) {
                    return !~s.indexOf(e);
                }), this._controller.update({
                    add: t,
                    remove: i
                }).then(function(e) {
                    this._model.data().options.forEach(function(t) {
                        ~e.added.indexOf(t.id) ? t.is_discovered = !0 : ~e.removed.indexOf(t.id) && (t.is_discovered = t.is_shortlisted = t.is_recommended = !1);
                    });
                }.bind(this)).then(this.hide.bind(this)).then(function() {
                    var e = this._model.data(), t = e.options, i = [];
                    t.forEach(function(e) {
                        e.is_discovered && i.push(e.title);
                    }), this._controller.trigger("update", i);
                }.bind(this));
            }.bind(this), this._super(), this.multiList().on("click", function() {
                t.changeInput("enable");
            }), this._model.preselected().forEach(function(e) {
                this.$view.find("li[data-value=" + e + "]").click();
            }, this), t.changeInput("disable");
        }
    };
    return {
        desktop: n.extend(r).mixin(s),
        tablet: i.extend(r).mixin(s),
        phone: t.extend(r).mixin(s)
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 149:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(3), __webpack_require__(95), __webpack_require__(136) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, e, i) {
    "use strict";
    return t({}, i, e);
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(7), __webpack_require__(3), __webpack_require__(18), __webpack_require__(4), __webpack_require__(37), __webpack_require__(17) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, i, r, n, e, o) {
    "use strict";
    function s(t) {
        return t.reduce(function(t, i) {
            var r = t[i.name];
            return t[i.name] = r ? [].concat(r, i.value) : i.value, t;
        }, {});
    }
    var h = function(t) {
        switch (t.which) {
          case 1:
          case 13:
          case 32:
            this.$form.submit();
        }
    }, c = function(i) {
        var r = new t(), n = r.thenable(), e = "function" == typeof this.commit ? this.commit.call(n, i) : this.commit;
        return r.resolve(e === n ? this.xhr(i) : e), this.trigger("commit"), r;
    }, u = n.extend({
        xhr: e,
        init: function(t) {
            if (!t) throw new Error("The context of the form cannot be empty");
            if (this.$form = t.is("form") ? t : t.find("form"), !this.$form.length) throw new Error("Unable to find form within context");
            this._normalizeSubmitter = h.bind(this), this.submit = this.submit.bind(this), Object.defineProperty(this, "handlers", {
                value: [ this._handleFormError.bind(this) ]
            });
        },
        destroy: function() {
            if (!this.$form) throw new Error("Cannot destroy null form");
            this._super(), this.$form = null;
        },
        reset: function() {
            return this.$form[0].reset(), this;
        },
        validator: function(t) {
            return !0;
        },
        commit: function(t) {
            return this;
        },
        _handleFormError: function(t) {
            if (!(t instanceof u.Error)) throw t;
            Object.keys(t).forEach(function(i) {
                var r = this.$form.find("[name=" + i + "], #" + i).first(), n = this;
                r.length && (r.one("input change", function t() {
                    r.off("input change", t), n.trigger("error:hide", r);
                }), this.trigger("error:show", r, t[i]));
            }, this);
        },
        _handleError: function(t) {
            return this.trigger("error", t), o.call(this.handlers, t).catch(o).finally(function() {
                delete this._cacheMeta;
            }.bind(this));
        },
        _findFormError: function(t) {
            if (!(t instanceof Object)) throw t;
            var i, r = this._cacheMeta || this.toJSON(), n = {};
            for (i in r.data) t.hasOwnProperty(i) && (n[i] = t[i]);
            if (Object.keys(n).length) throw new this.constructor.Error(n);
            throw t;
        },
        submit: function(t) {
            if (!this.$form) throw new Error("The form cannot be null");
            this.trigger("before", t);
            var i = this._submit(t);
            return i.catch(this._findFormError.bind(this)).then(this.trigger.bind(this, "success"), this._handleError.bind(this)).finally(this.trigger.bind(this, "after")), 
            i;
        },
        _submit: function(i) {
            var n, e, o, s = Array.isArray(this.validator) ? r.apply(null, this.validator.map(function(t) {
                return t.bind(this);
            }, this)) : this.validator.bind(this), h = new t();
            this._cacheMeta = n = this.toJSON();
            try {
                e = s(n.data);
            } catch (t) {
                e = !1, o = t;
            }
            return e = e !== !1, !i || e && "function" != typeof this.commit || i.preventDefault(), 
            e ? h.resolve(n) : h.reject(o), h.then(c.bind(this));
        },
        toJSON: function() {
            return {
                url: this.$form.attr("action"),
                type: this.$form.attr("method") || "POST",
                data: this.constructor.decompose(this.$form.serializeArray())
            };
        },
        _submitSelector: ".js-submit:not([type=submit])",
        bind: function() {
            return this.$form.on("click keydown", this._submitSelector, this._normalizeSubmitter).on("submit", this.submit), 
            this;
        },
        unbind: function() {
            return this.$form.off("click keydown", this._submitSelector, this._normalizeSubmitter).off("submit", this.submit), 
            this;
        }
    }, {
        decompose: s,
        Error: function(t) {
            i(this, t);
        }
    });
    return u;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 150:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(10), __webpack_require__(3), __webpack_require__(11), __webpack_require__(5), __webpack_require__(19), __webpack_require__(153) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, s, t, a, i, o) {
    "use strict";
    return {
        mustache: o,
        templateData: function() {
            var t = this._super();
            return s({
                classes: [ "message" ],
                title: a.translate("message_dialog_header_default", "Message"),
                has_talent_search: e.has_talent_search,
                buttons: [ {
                    label: a.translate("message_dialog_button_send", "Send Message"),
                    classes: [ "form-button-default", "form-submit" ]
                } ],
                job_checkbox: {
                    label: a.translate("message_dialog_label_job_opportunity", 'Mark as "Job Opportunity" to recipient'),
                    id: "is_job",
                    name: "is_job",
                    value: 1,
                    containerClasses: [ "cfix" ]
                },
                body: {
                    id: "message",
                    name: "message",
                    placeholder: a.translate("message_dialog_label_placeholder_named", "Your message to ") + t.name,
                    containerClasses: [ "message-body" ],
                    validate: "required,Generic",
                    classes: [ "form-text-normal", "js-body" ]
                }
            }, t);
        },
        show: function() {
            this._super.apply(this, arguments), this._$body && this._$body.focus();
        },
        hide: function() {
            this._super.apply(this, arguments), this._$body && this._$body.val("");
        },
        rendered: function() {
            var e = this;
            this._form = new t(this.$view), this._$body = this.$view.find(".js-body"), this._form.commit = function(s) {
                return e._controller.create(s.data.message, s.data.is_job);
            }, this._form.on("success", function() {
                i(e.$view.find(".js-send-message"), [ {
                    message: a.translate("message_dialog_message_success", "Message Sent"),
                    type: "success"
                } ]), setTimeout(function() {
                    this.showButtons(), e.hide();
                }.bind(this), e._controller.constructor.HIDE_DELAY);
            }), this._super.apply(this, arguments);
        }
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 151:
/***/ function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(36), __webpack_require__(27) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(i, e, t) {
    return t.extend({
        init: function() {
            this._super.apply(this, arguments), this.listenTo(this._model, "thanks", this._renderThanks);
        },
        render: function() {
            var i = this._model.get("appreciatedOn");
            i > 0 ? (this.$view.addClass("appreciated"), this.$view.find(".js-appreciation-date").text(e.unix(i).format("LL"))) : this.$view.one("click", function() {
                this._controller.appreciate(this.$view.data("appreciate-from"));
            }.bind(this));
        },
        _renderThanks: function() {
            this.$view.addClass("thanks").off("click");
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<form action=\"");t.b(t.v(t.f("action",c,p,0)));t.b("\" method=\"");t.b(t.v(t.f("method",c,p,0)));t.b("\">");t.b("\n" + i);if(t.s(t.d("options.0",c,p,1),c,p,0,63,415,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <ul id=\"searches\" class=\"divided-list menu-section\">");t.b("\n" + i);if(t.s(t.f("options",c,p,1),c,p,0,139,212,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <li class=\"divided-item\" data-value=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b(t.v(t.f("title",c,p,0)));t.b("</li>");t.b("\n" + i);});c.pop();}t.b("    </ul>");t.b("\n" + i);t.b("    <div>");t.b("\n" + i);t.b("      ");if(t.s(t.f("translate",c,p,1),c,p,0,265,293,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("talent_candidate_popup_or|or");});c.pop();}t.b(" <a href=\"/talent/create\">");if(t.s(t.f("translate",c,p,1),c,p,0,347,383,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("talent_sidebar_post_a_job|Post a Job");});c.pop();}t.b("</a>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);});c.pop();}if(!t.s(t.f("options",c,p,1),c,p,1,0,0,"")){t.b("    <div class=\"no-searches\">");t.b("\n" + i);t.b("      <p>");if(t.s(t.f("translate",c,p,1),c,p,0,498,564,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("talent_sidebar_empty_no_active_jobs|You Don't Have Any Active Jobs");});c.pop();}t.b("</p>");t.b("\n" + i);t.b("      <p><a href=\"/talent/create\">");if(t.s(t.f("translate",c,p,1),c,p,0,631,679,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("talent_sidebar_post_a_job_rarr|Post a Job &rarr;");});c.pop();}t.b("</a></p>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);};t.b("</form>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<form action=\"{{action}}\" method=\"{{method}}\">\n  {{#options.0}}\n    <ul id=\"searches\" class=\"divided-list menu-section\">\n      {{#options}}\n      <li class=\"divided-item\" data-value=\"{{id}}\">{{title}}</li>\n      {{/options}}\n    </ul>\n    <div>\n      {{#translate}}talent_candidate_popup_or|or{{/translate}} <a href=\"/talent/create\">{{#translate}}talent_sidebar_post_a_job|Post a Job{{/translate}}</a>\n    </div>\n  {{/options.0}}\n  {{^options}}\n    <div class=\"no-searches\">\n      <p>{{#translate}}talent_sidebar_empty_no_active_jobs|You Don't Have Any Active Jobs{{/translate}}</p>\n      <p><a href=\"/talent/create\">{{#translate}}talent_sidebar_post_a_job_rarr|Post a Job &rarr;{{/translate}}</a></p>\n    </div>\n  {{/options}}\n</form>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 153:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"form/textarea": __webpack_require__(84).template,"form/_checkbox": __webpack_require__(110).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<form class=\"send-message js-send-message\">");t.b("\n" + i);if(t.s(t.f("recipient",c,p,1),c,p,0,60,527,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <div class=\"message-label\">");if(t.s(t.f("translate",c,p,1),c,p,0,104,143,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("message_popup_label_recipient|Recipient");});c.pop();}t.b("</div>");t.b("\n" + i);t.b("  <div class=\"recipient\">");t.b("\n" + i);t.b("    <img src=\"");t.b(t.v(t.f("image",c,p,0)));t.b("\" class=\"recipient-image\">");t.b("\n" + i);t.b("    <div class=\"recipient-info\">");t.b("\n" + i);t.b("      <div class=\"recipient-name\">");t.b(t.v(t.f("name",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("      <div class=\"recipient-meta beicons-pre beicons-pre-");t.b(t.v(t.f("icon",c,p,0)));t.b("\">");t.b(t.v(t.f("status",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <div class=\"message-label\">");if(t.s(t.f("translate",c,p,1),c,p,0,469,504,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("message_popup_label_message|Message");});c.pop();}t.b("</div>");t.b("\n" + i);});c.pop();}if(t.s(t.f("body",c,p,1),c,p,0,553,572,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<form/textarea0",c,p,""));});c.pop();}if(t.s(t.f("has_talent_search",c,p,1),c,p,0,606,680,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("job_checkbox",c,p,1),c,p,0,628,660,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<form/_checkbox1",c,p,"      "));});c.pop();}});c.pop();}t.b("</form>");t.b("\n");return t.fl(); },partials: {"<form/textarea0":{name:"form/textarea", partials: {}, subs: {  }},"<form/_checkbox1":{name:"form/_checkbox", partials: {}, subs: {  }}}, subs: {  }}, "<form class=\"send-message js-send-message\">\n  {{#recipient}}\n  <div class=\"message-label\">{{#translate}}message_popup_label_recipient|Recipient{{/translate}}</div>\n  <div class=\"recipient\">\n    <img src=\"{{image}}\" class=\"recipient-image\">\n    <div class=\"recipient-info\">\n      <div class=\"recipient-name\">{{name}}</div>\n      <div class=\"recipient-meta beicons-pre beicons-pre-{{icon}}\">{{status}}</div>\n    </div>\n  </div>\n  <div class=\"message-label\">{{#translate}}message_popup_label_message|Message{{/translate}}</div>\n  {{/recipient}}\n  {{#body}}{{> form/textarea}}{{/body}}\n  {{#has_talent_search}}\n    {{#job_checkbox}}\n      {{> form/_checkbox}}\n    {{/job_checkbox}}\n  {{/has_talent_search}}\n</form>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 154:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"onboarding/tooltip": __webpack_require__(155).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"tooltipi-container tooltip_container--pulse js-container-tooltip\" >");t.b("\n" + i);t.b("  <div class=\"pulse\">");t.b("\n" + i);t.b("    <div class=\"pulse__dot\"></div>");t.b("\n" + i);t.b("    <div class=\"pulse__ring\"></div>");t.b("\n" + i);t.b("  </div>");t.b("\n");t.b("\n" + i);t.b(t.rp("<onboarding/tooltip0",c,p,"  "));t.b("</div>");t.b("\n");return t.fl(); },partials: {"<onboarding/tooltip0":{name:"onboarding/tooltip", partials: {}, subs: {  }}}, subs: {  }}, "<div class=\"tooltipi-container tooltip_container--pulse js-container-tooltip\" >\n  <div class=\"pulse\">\n    <div class=\"pulse__dot\"></div>\n    <div class=\"pulse__ring\"></div>\n  </div>\n\n  {{>onboarding/tooltip}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 155:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"tooltipi tooltipi-white tooltip--pulse\">");t.b("\n" + i);t.b("  <h1 class=\"");if(t.s(t.f("clicked",c,p,1),c,p,0,78,114,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("beicons-pre beicons-pre-check-circle");});c.pop();}t.b("\">");t.b("\n" + i);if(t.s(t.f("follow",c,p,1),c,p,0,144,393,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      ");if(!t.s(t.f("clicked",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("translate",c,p,1),c,p,0,177,232,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("onboarding_pulsePoint_follow_creatives|Follow Creatives");});c.pop();}};t.b("\n" + i);t.b("      ");if(t.s(t.f("clicked",c,p,1),c,p,0,277,376,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("translate",c,p,1),c,p,0,291,353,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("onboarding_pulsePoint_follow_nice|Nice, you are now following ");});c.pop();}t.b(t.v(t.f("user",c,p,0)));t.b("!");});c.pop();}t.b("\n" + i);});c.pop();}if(t.s(t.f("appreciate",c,p,1),c,p,0,424,671,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      ");if(!t.s(t.f("clicked",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("translate",c,p,1),c,p,0,457,528,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("onboarding_pulsePoint_appreciate_projects|Appreciate Projects You Like!");});c.pop();}};t.b("\n" + i);t.b("      ");if(t.s(t.f("clicked",c,p,1),c,p,0,573,654,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("translate",c,p,1),c,p,0,587,640,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("onboarding_pulsePoint_appreciate_good_work|Good work!");});c.pop();}});c.pop();}t.b("\n" + i);});c.pop();}t.b("  </h1>");t.b("\n");t.b("\n" + i);if(t.s(t.f("follow",c,p,1),c,p,0,709,1080,"{{ }}")){t.rs(c,p,function(c,p,t){if(!t.s(t.f("clicked",c,p,1),c,p,1,0,0,"")){t.b("      <p>");if(t.s(t.f("translate",c,p,1),c,p,0,750,830,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("onboarding_pulsePoint_follow_p1|Follow creatives to see their work in your feed.");});c.pop();}t.b("</p>");t.b("\n" + i);t.b("      <p>");if(t.s(t.f("translate",c,p,1),c,p,0,872,1042,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("onboarding_pulsePoint_follow_p2|You'll see their projects as they update and publish them, as well as all the work they appreciate, so you can see what's inspiring them. ");});c.pop();}t.b("</p>");t.b("\n" + i);};});c.pop();}t.b("\n" + i);if(t.s(t.f("appreciate",c,p,1),c,p,0,1110,1657,"{{ }}")){t.rs(c,p,function(c,p,t){if(!t.s(t.f("clicked",c,p,1),c,p,1,0,0,"")){t.b("      <p>");if(t.s(t.f("translate",c,p,1),c,p,0,1151,1303,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("onboarding_pulsePoint_appreciate_p1|Appreciating projects gives them more exposure. Your followers will see the work you appreciate in their home feeds.");});c.pop();}t.b("</p>");t.b("\n" + i);t.b("      <p>");if(t.s(t.f("translate",c,p,1),c,p,0,1345,1418,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("onboarding_pulsePoint_appreciate_p2|Also, it’s just a nice thing to do :)");});c.pop();}t.b("</p>");t.b("\n" + i);};if(t.s(t.f("clicked",c,p,1),c,p,0,1470,1642,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <p>");if(t.s(t.f("translate",c,p,1),c,p,0,1494,1619,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("onboarding_pulsePoint_appreciated_p1|Pro tip: You can see a complete list of the projects you’ve appreciated in your profile.");});c.pop();}t.b("</p>");t.b("\n" + i);});c.pop();}});c.pop();}t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"tooltipi tooltipi-white tooltip--pulse\">\n  <h1 class=\"{{#clicked}}beicons-pre beicons-pre-check-circle{{/clicked}}\">\n    {{#follow}}\n      {{^clicked}}{{#translate}}onboarding_pulsePoint_follow_creatives|Follow Creatives{{/translate}}{{/clicked}}\n      {{#clicked}}{{#translate}}onboarding_pulsePoint_follow_nice|Nice, you are now following {{/translate}}{{user}}!{{/clicked}}\n    {{/follow}}\n    {{#appreciate}}\n      {{^clicked}}{{#translate}}onboarding_pulsePoint_appreciate_projects|Appreciate Projects You Like!{{/translate}}{{/clicked}}\n      {{#clicked}}{{#translate}}onboarding_pulsePoint_appreciate_good_work|Good work!{{/translate}}{{/clicked}}\n    {{/appreciate}}\n  </h1>\n\n  {{#follow}}\n    {{^clicked}}\n      <p>{{#translate}}onboarding_pulsePoint_follow_p1|Follow creatives to see their work in your feed.{{/translate}}</p>\n      <p>{{#translate}}onboarding_pulsePoint_follow_p2|You'll see their projects as they update and publish them, as well as all the work they appreciate, so you can see what's inspiring them. {{/translate}}</p>\n    {{/clicked}}\n  {{/follow}}\n\n  {{#appreciate}}\n    {{^clicked}}\n      <p>{{#translate}}onboarding_pulsePoint_appreciate_p1|Appreciating projects gives them more exposure. Your followers will see the work you appreciate in their home feeds.{{/translate}}</p>\n      <p>{{#translate}}onboarding_pulsePoint_appreciate_p2|Also, it’s just a nice thing to do :){{/translate}}</p>\n    {{/clicked}}\n    {{#clicked}}\n      <p>{{#translate}}onboarding_pulsePoint_appreciated_p1|Pro tip: You can see a complete list of the projects you’ve appreciated in your profile.{{/translate}}</p>\n    {{/clicked}}\n  {{/appreciate}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 158:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(n) {
    "use strict";
    function i(n) {
        n();
    }
    function o(n) {
        var i, o;
        return n.is(t) ? (i = window.innerHeight || t.height(), o = c.height() - i - t.scrollTop()) : (i = n.prop("clientHeight"), 
        o = n.prop("scrollHeight") - i - n.scrollTop()), o / i;
    }
    function e(e) {
        var r = "window" === e ? t : n(e);
        return function() {
            var n, t = o(r);
            for (n in f[e]) t <= Number(n) && f[e][n].wrapped.forEach(i);
        };
    }
    function r(i, o, r) {
        function c() {
            if (!c.blocking) {
                c.blocking = !0;
                var n = o.apply(null, arguments);
                n && "function" == typeof n.then ? n.then(function() {
                    c.blocking = !1, l[r]();
                }) : c.blocking = !1;
            }
        }
        "function" == typeof i && (r = o, o = i, i = 1), r = r || "window", i = Number(i).toString();
        var u, p = "window" === r ? t : n(r);
        f[r] || (f[r] = {}, l[r] = e(r), p.on("scroll", l[r])), u = f[r][i], u || (u = f[r][i] = {
            wrapped: [],
            original: []
        }), u.original.push(o), u.wrapped.push(c), l[r]();
    }
    var t = n(window), c = n(document), l = {}, f = {};
    return r.on = r, r.off = function(i, o) {
        o = o || "window";
        var e, r, c, u = "window" === o ? t : n(o);
        for (e in f[o]) r = f[o][e], c = r.original.indexOf(i), ~c && (r.original.splice(c, 1), 
        r.wrapped.splice(c, 1), r.original.length || delete f[o][e]);
        Object.keys(f[o]).length || (u.off("scroll", l[o]), delete f[o]);
    }, r.check = function(n) {
        n = n || "window", l[n]();
    }, r;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(12) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, r) {
    "use strict";
    return {
        trimIfEmpty: function(t) {
            return Object.keys(t).forEach(function(r) {
                var e, i = t[r];
                "string" == typeof i && (e = i.trim(), t[r] = 0 === e.length ? e : i);
            }), t;
        },
        validateForm: function(e) {
            var i = this.$form.find("[data-validate]:not(:disabled)").toArray();
            if (this.errors = i.reduce(function(i, a) {
                var n = t(a), o = n.data("validate"), s = n.attr("name") || n.attr("id");
                return r(e[s], o) || (i[s] = r.message), i;
            }, {}), Object.keys(this.errors).length) throw this.errors;
            return e;
        }
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(21), __webpack_require__(28), __webpack_require__(42), __webpack_require__(20), __webpack_require__(149), __webpack_require__(177) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, e, i, n, r, o, a) {
    "use strict";
    return e.extend({
        init: function() {
            this._super.apply(this, arguments), this.path = this._model.get("CONSTANTS").REPORT_URL + this.id;
        },
        create: function(e) {
            return t({
                url: this.path,
                type: "POST",
                data: e
            });
        },
        read: function() {
            var e = t({
                url: this.path
            });
            return e.then(this._model.set.bind(this._model)), e;
        },
        render: function() {
            var t = this, e = this._super, i = arguments;
            this.read().then(function() {
                e.apply(t, i);
            }).then(this._view.show.bind(this._view));
        }
    }, {
        VIEW_CLASS: {
            phone: i.extend(a).mixin(o),
            tablet: n.extend(a).mixin(o),
            desktop: r.extend(a).mixin(o)
        },
        init: function(t) {
            var e = t.find(".js-action-report"), i = e.data("id"), n = e.data("type"), r = "/report/" + n + "/", o = {
                CONSTANTS: {
                    REPORT_URL: r
                }
            }, a = new this(i, o);
            return a.setContext(e), a;
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(35), __webpack_require__(2) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, n) {
    "use strict";
    function r() {
        return n({
            url: "/v2/users/me/projects",
            type: "GET"
        });
    }
    function t() {
        return n({
            url: "/v2/users/me",
            type: "GET"
        });
    }
    function i(e, n, r) {
        r = r || 1, n.css({
            transform: "scale(" + e.width() / n.width() * r + ")"
        });
    }
    function s(e) {
        var n = e.find(".js-desktop-screenshot"), r = n.find(".js-project"), t = .9;
        i(n, r, t);
    }
    function o(e) {
        var n = e.find(".js-mobile-screenshot"), r = n.find(".js-header");
        i(n, r);
    }
    return {
        getData: function(n, i) {
            var s = r(), o = t();
            return Promise.all([ s, o ]).then(function(r) {
                var t = r[0].projects, s = r[1].user;
                return {
                    paidCC: n ? n.paidCC : null,
                    first_name: s.first_name,
                    displayName: s.display_name,
                    cover_1: t[0].covers[404],
                    cover_2: t[1].covers[404],
                    field_1: s.fields[0] || "",
                    field_2: s.fields[1] || "",
                    projectSrc: i ? e.getLocation("href").replace("share=1", "iframe=1&minimal=1") : t[0].url + "?iframe=1&minimal=1",
                    numProjects: t.length
                };
            }.bind(this));
        },
        autoScaleContent: function(e) {
            s(e), o(e);
        }
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 162:
/***/ function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(36), __webpack_require__(21), __webpack_require__(5), __webpack_require__(47), __webpack_require__(28), __webpack_require__(42), __webpack_require__(20), __webpack_require__(2), __webpack_require__(194), __webpack_require__(48) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, e, i, o, n, l, c, r, d, s) {
    return e.extend({
        setContext: function(t) {
            if (o.isLoggedIn()) return this._super(t);
            var e = new s({
                id: this.id,
                entity: "project",
                action: "collection"
            });
            e.setContext(t);
        },
        create: function(e) {
            return r({
                url: "/collection/create",
                type: "POST",
                data: {
                    collection_name: e
                }
            }).then(function(i) {
                var o = i.id, n = +t().format("X");
                if (!o) throw i;
                return {
                    id: o,
                    title: e,
                    owners: [],
                    url: "/collection/" + encodeURIComponent(e) + "/" + o,
                    created_on: n,
                    modified_on: n
                };
            }).then(function(t) {
                return this._model.get("collections").unshift(t), this._model.get("project_collection_ids").unshift(t.id), 
                this.update(), t;
            }.bind(this));
        },
        read: function() {
            var t = r({
                url: "/gallery/collections/" + this._model.id()
            }).then(function(t) {
                if (!t.project_collection_ids) throw t;
                return t.collections.sort(function(e, i) {
                    return t.project_collection_ids.indexOf(+i.id) - t.project_collection_ids.indexOf(+e.id);
                }), t;
            });
            return t.then(this._model.set.bind(this._model)), t;
        },
        update: function() {
            return r({
                url: "/collection/project/" + this._model.id(),
                type: "POST",
                data: {
                    collection_ids: this._model.get("project_collection_ids").join("|")
                }
            });
        },
        render: function() {
            var t = this, e = this._super, i = arguments;
            this.read().then(function() {
                e.apply(t, i);
            }).then(this._view.show.bind(this._view));
        }
    }, {
        init: function(t) {
            var e = t.find(".js-action-collection"), i = e.data("id"), o = new this(i);
            return o.setContext(e), o;
        },
        VIEW_CLASS: {
            phone: n.extend(d),
            tablet: l.extend(d),
            desktop: c.extend(d).mixin({
                title: i.translate("collection_dialog_header", "Add to Collections")
            })
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 163:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"portfolio-device-container\">");t.b("\n" + i);t.b("  <div class=\"devices\">");t.b("\n" + i);t.b("    <div class=\"desktop\">");t.b("\n" + i);t.b("      <div class=\"screenshot js-desktop-screenshot\">");t.b("\n" + i);t.b("        <div class=\"project js-project\">");t.b("\n" + i);t.b("          <header class=\"portfolio-header\">");t.b("\n" + i);t.b("            <div class=\"portfolio-name\">");t.b("\n" + i);t.b("              ");t.b(t.v(t.f("displayName",c,p,0)));t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("            <div class=\"portfolio-nav\">");t.b("\n" + i);t.b("              <div class=\"portfolio-nav-item\">");t.b(t.v(t.f("field_1",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("              <div class=\"portfolio-nav-item\">");t.b(t.v(t.f("field_2",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("              <div class=\"portfolio-nav-item\">");if(t.s(t.f("translate",c,p,1),c,p,0,547,579,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_portfolio_nav_1|About Me");});c.pop();}t.b("</div>");t.b("\n" + i);t.b("              <div class=\"portfolio-nav-item\">");if(t.s(t.f("translate",c,p,1),c,p,0,660,691,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_portfolio_nav_2|Contact");});c.pop();}t.b("</div>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("          </header>");t.b("\n" + i);t.b("          <iframe class=\"portfolio-iframe\" src=\"");t.b(t.v(t.f("projectSrc",c,p,0)));t.b("\"></iframe>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("      <div class=\"device\"></div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <div class=\"mobile\">");t.b("\n" + i);t.b("      <div class=\"screenshot js-mobile-screenshot\">");t.b("\n" + i);t.b("        <header class=\"portfolio-header js-header\">");t.b("\n" + i);t.b("          <div class=\"portfolio-name\">");t.b("\n" + i);t.b("            ");t.b(t.v(t.f("displayName",c,p,0)));t.b("\n" + i);t.b("          </div>");t.b("\n" + i);t.b("          <div class=\"hamburger-icon\">");t.b("\n" + i);t.b("            <div class=\"hamburger-part\"></div>");t.b("\n" + i);t.b("            <div class=\"hamburger-part\"></div>");t.b("\n" + i);t.b("            <div class=\"hamburger-part\"></div>");t.b("\n" + i);t.b("          </div>");t.b("\n" + i);t.b("        </header>");t.b("\n" + i);t.b("        <div class=\"cover cover-1\" style=\"background-image: url('");t.b(t.v(t.f("cover_1",c,p,0)));t.b("')\"></div>");t.b("\n" + i);t.b("        <div class=\"cover cover-2\" style=\"background-image: url('");t.b(t.v(t.f("cover_2",c,p,0)));t.b("')\"></div>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("      <div class=\"device\"></div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"portfolio-device-container\">\n  <div class=\"devices\">\n    <div class=\"desktop\">\n      <div class=\"screenshot js-desktop-screenshot\">\n        <div class=\"project js-project\">\n          <header class=\"portfolio-header\">\n            <div class=\"portfolio-name\">\n              {{displayName}}\n            </div>\n            <div class=\"portfolio-nav\">\n              <div class=\"portfolio-nav-item\">{{field_1}}</div>\n              <div class=\"portfolio-nav-item\">{{field_2}}</div>\n              <div class=\"portfolio-nav-item\">{{#translate}}project_portfolio_nav_1|About Me{{/translate}}</div>\n              <div class=\"portfolio-nav-item\">{{#translate}}project_portfolio_nav_2|Contact{{/translate}}</div>\n            </div>\n          </header>\n          <iframe class=\"portfolio-iframe\" src=\"{{projectSrc}}\"></iframe>\n        </div>\n      </div>\n      <div class=\"device\"></div>\n    </div>\n    <div class=\"mobile\">\n      <div class=\"screenshot js-mobile-screenshot\">\n        <header class=\"portfolio-header js-header\">\n          <div class=\"portfolio-name\">\n            {{displayName}}\n          </div>\n          <div class=\"hamburger-icon\">\n            <div class=\"hamburger-part\"></div>\n            <div class=\"hamburger-part\"></div>\n            <div class=\"hamburger-part\"></div>\n          </div>\n        </header>\n        <div class=\"cover cover-1\" style=\"background-image: url('{{cover_1}}')\"></div>\n        <div class=\"cover cover-2\" style=\"background-image: url('{{cover_2}}')\"></div>\n      </div>\n      <div class=\"device\"></div>\n    </div>\n  </div>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 165:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(22), __webpack_require__(55), __webpack_require__(3), __webpack_require__(4), __webpack_require__(158), __webpack_require__(37) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, e, i, s, n, r) {
    "use strict";
    return s.extend({
        init: function(t, e) {
            this.context = t || "window", this.resetParams(e);
        },
        breakpoint: 1,
        offsetKey: "offset",
        offset: 0,
        data: {},
        url: void 0,
        type: "GET",
        _infinitescroll: n,
        _xhr: r,
        hasMoreResults: function(t) {
            throw "InfiniteLoader requires a 'hasMoreResults(response)' function. Please extend and implement.";
        },
        getNextOffset: function(t) {
            throw "InfiniteLoader requires a 'getNextOffset(response)' function. Please extend and implement.";
        },
        loaded: function(t) {
            throw "InfiniteLoader requires a 'loaded(response)' function. Please extend and implement.";
        },
        resetParams: function(t, e, i) {
            return delete this.offset, delete this.data, this.setParams(t, e, i);
        },
        setParams: function(t, e, i) {
            return null != t && (this.offset = t), null != e && (this.data = e), null != i && (this.url = i), 
            this;
        },
        bind: function() {
            return this._boundLoad ? this : (this._boundLoad = this.load.bind(this), this._infinitescroll(this.breakpoint, this._boundLoad, this.context), 
            this);
        },
        _stop: function() {
            this._request && this._request.abort();
        },
        unbind: function() {
            if (this._boundLoad) return this._infinitescroll.off(this._boundLoad, this.context), 
            delete this._boundLoad, this;
        },
        load: function() {
            this.trigger("before"), this._request = this._xhr(this._xhrOptions());
            var t = this._request.then(this.loaded.bind(this));
            return t.then(this.trigger.bind(this, "success"), this.trigger.bind(this, "error")), 
            this._request.then(this._trackState.bind(this)).then(function() {
                return t;
            });
        },
        _xhrOptions: function() {
            var t = "function" == typeof this.data ? this.data() : this.data;
            return t = i({}, t), t[this.offsetKey] = this.offset, {
                url: this.url,
                type: this.type,
                data: t
            };
        },
        _trackState: function(t) {
            if (this.offset = this.getNextOffset(t), !this.hasMoreResults(t)) throw "No more results";
            return t;
        },
        reload: function(t, e, i) {
            this.resetParams(t, e, i), this._stop(), this.unbind();
            var s = this.load();
            return s.then(this.bind.bind(this)), s;
        }
    }).mixin(t);
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(4), __webpack_require__(109), __webpack_require__(66), __webpack_require__(116), __webpack_require__(5), __webpack_require__(92), __webpack_require__(107), __webpack_require__(146), __webpack_require__(181), __webpack_require__(182), __webpack_require__(189), __webpack_require__(183), __webpack_require__(191), __webpack_require__(184), __webpack_require__(185), __webpack_require__(186), __webpack_require__(192), __webpack_require__(187), __webpack_require__(188), __webpack_require__(193), __webpack_require__(71), __webpack_require__(109) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, i, e, o, s, n, r, c, a, h, l, p, d, _, j, u, b, f, $, w, m, x, y) {
    return i.extend({
        init: function(t, i, e, o) {
            this._$context = t, this._$scrollContext = i, this._$project = this._$context.find(".js-project"), 
            this._$projectSidebar = this._$context.find(".js-project-sidebar"), this._isPopup = e, 
            this._config = o || {}, this._data = this._$project.data(), this._projectCoverViews = [];
        },
        bind: function() {
            var i = this._$context.find(".js-project-sidebar-wrap"), n = this._$context.find(".js-project-spam"), r = this._$context.find(".js-picture-lazy"), c = this._$context.find(".js-project-module-image-hd"), a = this._$context.find(".js-social-sharing"), m = this._$context.find(".js-social-sharing-sticky"), P = this._$context.find(".js-sidebar-group");
            this.updateTalent(this._$projectSidebar), this._bindAppreciate(), this._bindOtherProjectsHover(), 
            this._bindBackToTop(), _.init(this._data.id, "project", this._data), this._lazyPicture = s.init(r, {
                threshold: 600,
                container: this._$scrollContext[0]
            }), this._sectionSidebar = j.init(this._$projectSidebar), this._sectionMain = j.init(this._$project), 
            this._lightbox = e.isOn("lightbox") ? p.init(this._$project) : d.init(c), this._socialSharing = u.init(a), 
            this._spam = b.init(n), y.isOn("project_view_chrome") ? m.data("is-admin") || (this._stickySidebar = w.init(this._$scrollContext, m, i, this._isPopup, this._$project, P, t(window))) : this._stickySidebar = $.init(this._$scrollContext, this._$projectSidebar, i, this._isPopup), 
            this._dimensionClasses = l.init(this._$project, this._$project, "width", {
                "breakpoint-comments": 1259,
                "breakpoint-complete-profile": 634
            }), this._data.allow_comments && (this._comments = h.init(this._$project)), this._isPopup || (f.init(this._config), 
            o.init(this._$context)), this._renderFollowPulsePoint(), x();
        },
        _bindOtherProjectsHover: function() {
            var i = this;
            this._$context.find(".js-project-cover").each(function() {
                var e = new r(t(this));
                e.rendered(), i._projectCoverViews.push(e);
            });
        },
        _createFollowPulsePoint: function(t) {
            this.followPulse = new c({
                from: "follow",
                user: t
            }), this.followPulse.render(this.$followButtonContainter);
        },
        _renderFollowPulsePoint: function() {
            this.$followButtonContainter = this._$projectSidebar.find(".js-hide-phone>.js-action-follow");
            var t = this.$followButtonContainter.data();
            if (t && !t.following && this._data.pulse_points_follow) return "project" === t.entity ? void this._createFollowPulsePoint(n.translate("pulsePoint_project", "multiple people")) : "user" === t.entity ? void o.loadUser(t.followee).then(function(t) {
                this._createFollowPulsePoint(t.user.display_name);
            }.bind(this)) : void 0;
        },
        _bindBackToTop: function() {
            var i = this._$scrollContext[0] === window ? t("body, html") : this._$scrollContext;
            this._$projectSidebar.find(".js-back-to-top").on("click", function() {
                i.animate({
                    scrollTop: 0
                }, 250).promise().then(function() {
                    this._$scrollContext.trigger("scroll");
                }.bind(this));
            }.bind(this));
        },
        _bindAppreciate: function() {
            var i = this._$context.find(".js-appreciate"), e = this._$context.find(".js-stats-appreciations");
            this._appreciate = new a({
                id: this._data.id,
                renderPulsePoint: this._data.pulse_points_appreciate
            }, i), this._appreciate.render(), this.listenTo(this._appreciate, "appreciate", function() {
                e.each(function() {
                    var i = parseInt(t(this).text(), 10) + 1;
                    t(this).text(" " + i);
                });
            });
        },
        unbind: function() {
            this.talent && this.talent.destroy(), _.destroy(), this._isPopup || (f.destroy(), 
            o.destroy(this._$context)), this._projectCoverViews.forEach(function(t) {
                t.destroy();
            }), this._projectCoverViews = [], this._lightbox.destroy(), this._socialSharing.destroy(), 
            this._lazyPicture.destroy(), this._appreciate.destroy(), this._sectionSidebar.destroy(), 
            this._sectionMain.destroy(), this._spam.destroy(), this._stickySidebar && this._stickySidebar.destroy(), 
            this._dimensionClasses.destroy(), this._data.allow_comments && this._comments.destroy(), 
            this.followPulse && this.followPulse.destroy();
        }
    }).extend(m);
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(30), __webpack_require__(32), __webpack_require__(171), __webpack_require__(22) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(i, t, e, n) {
    "use strict";
    var s = i.extend({
        _initView: function() {
            this._super.apply(this, arguments), this.listenTo(this._view, "all", this.trigger);
        },
        destroy: function() {
            this.stopListening(), this._super();
        }
    }, {
        MODEL_CLASS: t,
        VIEW_CLASS: e
    }).mixin(n);
    return s;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(7), __webpack_require__(3), __webpack_require__(21), __webpack_require__(13), __webpack_require__(20), __webpack_require__(35), __webpack_require__(161), __webpack_require__(203) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, e, o, i, n, r, l, s, u) {
    "use strict";
    var d = r.extend({
        mustache: u,
        templateData: function() {
            var t = this._model.data();
            return t.classes = [ "portfolio-modal", "hide-phone" ], t;
        },
        rendered: function() {
            this._super(), this._controller.log("portfolio_upsell_rendered"), this._bindClickEvents(), 
            this._autoScaleContent(), t(window).on("resize.be-controller-portfoliopopup", this._autoScaleContent.bind(this));
        },
        _autoScaleContent: function() {
            s.autoScaleContent(this.$view), this.position();
        },
        _bindClickEvents: function() {
            t(".js-portfolio-button").click(function() {
                this._controller.log("portfolio_upsell_clicked"), l.open("https://myportfolio.com", "_blank"), 
                this.hide();
            }.bind(this));
        },
        hide: function() {
            this._super(), t(window).off("resize.be-controller-portfoliopopup");
        }
    });
    return i.extend({
        init: function() {
            this._super.apply(this, arguments), this.relay(this._view, "hide");
        },
        log: function(t) {
            n.info("project_publish", t, {
                paidCC: this._model.get("paidCC"),
                numProjects: this._model.get("numProjects")
            });
        },
        render: function(t) {
            var e = this._super.bind(this);
            return s.getData(t, !0).then(function(t) {
                return this._model.set(t), e();
            }.bind(this), function() {
                this.trigger("hide");
            }.bind(this));
        }
    }, {
        VIEW_CLASS: {
            desktop: d,
            tablet: d,
            mobile: d
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(7) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e) {
    "use strict";
    var r = [], n = function(n) {
        var t = new e();
        return t.reject(n), (this || r).reduce(function(e, r) {
            return e.catch(r);
        }, t);
    };
    return Object.defineProperty(n, "handlers", {
        value: r
    }), n;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(3), __webpack_require__(21), __webpack_require__(20), __webpack_require__(13), __webpack_require__(205) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, t, i, n, l, o) {
    "use strict";
    var s = n.extend({
        mustache: o,
        templateData: function() {
            return {
                url: this._model.get("url"),
                classes: [ "share-link-dialog" ],
                fullBleed: !0
            };
        },
        rendered: function() {
            this._super();
            var e = this.$view.find(".js-share-link"), t = e.find(".js-share-input");
            t.focus().select(), e.on("click", function() {
                t.select();
            }), l.info("social_sharing", "Copy Link Clicked", {
                location: this._model.get("loggedLocation")
            });
        }
    });
    return i.extend({}, {
        VIEW_CLASS: s
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(24), __webpack_require__(18), __webpack_require__(38), __webpack_require__(65), __webpack_require__(206) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, t, i, n, r, s) {
    "use strict";
    var o = {
        3e3: "close",
        5e3: "flag"
    }, d = t.extend({
        template: i(s, e),
        templateData: function() {
            var e = this._super();
            return e.permissions = e.permissions.reduce(function(e, t) {
                return e[o[t]] = !0, e;
            }, {}), e;
        },
        rendered: function() {
            this.$view.hide().fadeIn().on("click", ".js-delete", function() {
                this.$view.fadeOut(this.trigger.bind(this, "remove"));
            }.bind(this)), r.init(this.$view, "LLL", {
                fromNow: !0
            });
        }
    });
    return d;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(72), __webpack_require__(176), __webpack_require__(70), __webpack_require__(216) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, n, t, o, r) {
    "use strict";
    var a = new RegExp(r.usernameMatch.source, "g");
    return function(r, u) {
        u = e.extend({
            maxMentions: 5
        }, u), t.init(u), r.length && r.parent().addClass("ui-front").end().one("focus", t.getLocal).automention({
            delay: 50,
            itemTemplate: o,
            source: t.source,
            appendTo: u.appendTo
        }).on("automentionopen", function() {
            var t, o, r = this.value, i = {}, s = e(this);
            r.replace(a, function(e, n) {
                i[e] = n;
            }), Object.keys(i).length > u.maxMentions && (t = s.data("beAutomention"), o = s.data("errorbar") || new n.Errorline(t.menu.element), 
            o.render("<strong>You may only mention " + u.maxMentions + " users</strong>"), o.$view.prependTo(t.menu.element), 
            s.data("errorbar", o));
        });
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(3), __webpack_require__(4), __webpack_require__(106), __webpack_require__(2), __webpack_require__(168) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, s, e, i, n, o) {
    "use strict";
    return e.extend({
        _posts: [],
        loading: !1,
        moreSelector: ".see-more-button-container",
        init: function(t, s, e) {
            var n = t.find(".js-comments-list");
            this.data = s || {}, this.callback = e, this.loading = !1, this.$content = n, this.$more = t.find(this.moreSelector), 
            this.get = this.more.bind(this, void 0), this.$more.on("click", this.get), i.delegate(this.$content, function(t) {
                t.$context.remove(), this.trigger("spam");
            }.bind(this));
        },
        set: function(t) {
            return s(this.data, t), this;
        },
        more: function(t) {
            var s;
            return this.loading = !0, s = this.load(t), s.then(this.render.bind(this)).finally(this.after.bind(this)), 
            s.finally(this.callback), s;
        },
        destroy: function() {
            this.stopListening(), this.clear(), this.$more.off("click", this.get);
        },
        load: function(t) {
            return n({
                url: "/comments/" + this.data.type,
                data: s({
                    sort_order: "desc"
                }, this.data, t)
            });
        },
        render: function(t) {
            var s;
            return t && t.comments && (s = t.comments.map(this._makePost, this), this._posts = this._posts.concat(s)), 
            this._posts["asc" === this.data.order ? "reduceRight" : "reduce"](function(t, s) {
                return s.render(t.$content), t;
            }, this), t;
        },
        after: function() {
            this.data.offset = this._posts.length ? this._posts[this._posts.length - 1].id : void 0;
        },
        _makePost: function(t) {
            t.type = this.data.type;
            var s = new o(t.id, t);
            return this.listenTo(s, "remove", this.remove.bind(this, s)), s;
        },
        add: function(t) {
            var s = t instanceof o ? t : this._makePost(t);
            this._posts.unshift(s), this.render();
        },
        remove: function(t) {
            var s;
            ~(s = this._posts.indexOf(t)) && (n({
                type: "DELETE",
                url: "/comments/" + this.data.type + "?comment_id=" + t.id
            }), this._posts.splice(s, 1), t.destroy());
        },
        clear: function() {
            return this._posts.forEach(function(t) {
                t.destroy();
            }), this._posts = [], this;
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(11) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e) {
    "use strict";
    var t = e.extend({
        _submit: function(e) {
            return this._super(e).then(function() {
                this.$form.find(":input").val("").removeAttr("checked selected");
            }.bind(this));
        }
    });
    return t;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(286) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(i, r) {
    "use strict";
    return function(s, l) {
        var n = 0;
        return s.find(".js-iscroll-item").each(function() {
            i(this).is(":visible") && (n += i(this).outerWidth(!0));
        }), l && (n += parseInt(s.find(".js-iscroll").css("padding-right"), 10)), s.find(".js-iscroll").width(n), 
        new r(s.find(".js-iscroll-wrap")[0], {
            vScroll: !1,
            vScrollbar: !1,
            hScrollbar: !1
        });
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(49), __webpack_require__(53), __webpack_require__(2) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(n, e, t) {
    "use strict";
    function r(n) {
        for (var e = {}, t = 0; t < n.length; ++t) e[n[t].id] = n[t];
        return e;
    }
    function o(n) {
        var e = {};
        return n.filter(function(n) {
            return !(n.id in e) && (e[n.id] = n, !0);
        });
    }
    function c(n) {
        return a = r(n);
    }
    function i() {
        var n;
        return a ? (n = new e(), n.resolve(a)) : n = t(f.local).then(c), n;
    }
    function u(n) {
        return i().then(L.bind(n));
    }
    function l(n, r) {
        l._cache = l._cache || {}, l._cache[n] = l._cache[n] || {};
        var o, c;
        return r.length < s && (c = []), l._cache[n][r] && (c = l._cache[n][r]), c ? (o = new e(), 
        o.resolve(c), o) : t({
            url: n,
            data: {
                q: r
            }
        }).then(function(e) {
            return c = g.call(e, r), l._cache[n][r] = c, c;
        });
    }
    var a, f = {
        global: "/mentions/search",
        following: "/mentions/search/following",
        local: ""
    }, s = 2, h = 5, m = function(n) {
        return this[n];
    }, d = function(n) {
        var e = this.toLocaleLowerCase();
        return 0 === n.first_name.toLocaleLowerCase().indexOf(e) || 0 === n.last_name.toLocaleLowerCase().indexOf(e) || 0 === n.username.toLocaleLowerCase().indexOf(e);
    }, g = function(n) {
        return this.filter(d, n);
    }, v = function(n) {
        return Object.keys(this).map(m, this).filter(d, n);
    }, L = function(n) {
        return v.call(n, this);
    };
    n = n.get("be/mentionSource");
    var b = l.bind(null, f.following), w = l.bind(null, f.global);
    return {
        init: function(n) {
            return n.maxResults && (h = n.maxResults), n.minLength && (s = n.minLength), n.local && (f.local = n.local), 
            a = null, this;
        },
        getLocal: i,
        source: function(e, t) {
            function r() {
                t(o(i).slice(0, h));
            }
            var c = [ u, b, w ].map(function(n) {
                return n(e.term);
            }), i = [];
            c.reduce(function(e, t) {
                return (e ? e.then(function() {
                    return t;
                }) : t).then(function(n) {
                    n.forEach(function(n) {
                        n.value = n.username;
                    }), i = i.concat(n), r();
                }, function(e) {
                    n.error(e);
                });
            }, null).then(null, r);
        }
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(3), __webpack_require__(5), __webpack_require__(210) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, t, s, l) {
    "use strict";
    return {
        mustache: l,
        templateData: function() {
            return t({
                title: s.translate("report_popup_header_report", "Report"),
                classes: [ "report" ],
                buttons: [ {
                    label: s.translate("report_popup_button_send", "Send"),
                    classes: [ "left", "form-button-default", "form-submit" ]
                }, {
                    label: s.translate("report_popup_button_cancel", "Cancel"),
                    classes: [ "left", "form-button-cancel" ]
                } ],
                comments: {
                    id: "message",
                    placeholder: s.translate("report_popup_placeholder_comments", "Comments"),
                    classes: [ "form-text-normal" ]
                }
            }, this._model.data(), e(document.body).hasClass("logged-out") ? {
                email: {
                    id: "email",
                    placeholder: s.translate("report_popup_placeholder_email_address", "Email Address"),
                    classes: [ "form-text-normal" ]
                }
            } : {});
        },
        rendered: function() {
            this.selectList(), this.onSubmit(function(e) {
                this._controller.create(e).then(this.hide.bind(this));
            }.bind(this)), this.onCancel(), this._super();
        },
        hide: function() {
            this._super.apply(this, arguments), this.$view = null;
        }
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(290) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e) {
    return e("beconfig-page_gates");
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(91), __webpack_require__(28), __webpack_require__(20), __webpack_require__(195) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, t, n, o, i) {
    var r = o.extend(i), a = n.extend(i), s = t.extend({
        render: function() {
            this._view && (this._view.render(document.body), this._view.position());
        },
        disableSafeBrowsing: function() {
            return e({
                type: "PATCH",
                url: "/account/safe_browsing_setting",
                data: {
                    safe_browsing_setting: 0
                }
            }).then(function() {
                window.location.reload();
            }, console.error);
        }
    }, {
        VIEW_CLASS: {
            phone: a,
            tablet: r,
            desktop: r
        }
    });
    return s;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(91), __webpack_require__(28), __webpack_require__(20), __webpack_require__(57), __webpack_require__(213) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, t, i, n, o) {
    var r = {
        mustache: o,
        hide: function() {
            n.back();
        }
    }, a = i.extend(r), d = t.extend(r), s = e.extend({
        render: function() {
            this._view && (this._view.render(document.body), this._view.position());
        }
    }, {
        VIEW_CLASS: {
            phone: d,
            tablet: a,
            desktop: a
        }
    });
    return s;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(4), __webpack_require__(12), __webpack_require__(172), __webpack_require__(173), __webpack_require__(174), __webpack_require__(5), __webpack_require__(47), __webpack_require__(48) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, n, i, e, o, s, m, r, a) {
    return n.extend({
        _total: 0,
        init: function(t) {
            this._$context = t, this._id = t.data("id"), this._$view = t.find(".js-post-comment-block"), 
            this._$commentText = t.find(".js-comment-textarea"), this._$linkWarning = t.find(".js-comment-link-warning"), 
            this._commentContainer = this._initCommentContainer();
        },
        bind: function() {
            e(this._$commentText, {
                local: "/mentions/project/" + this._id
            }), this._bindLinkWarning(), this._bindForm(), this._commentContainer.get(), r.isLoggedIn() || this._bindSignupDialog();
        },
        unbind: function() {
            this._form && this._form.destroy(), this._commentContainer.destroy(), this._$view && this._$view.remove();
        },
        _bindSignupDialog: function() {
            var t = this._$context.find(".js-comments-signup"), n = new a({
                id: this._id,
                entity: "project",
                action: "comment"
            });
            n.setContext(t);
        },
        _bindLinkWarning: function() {
            this._$commentText.on("keyup change", function() {
                this._toggleLinkWarning();
            }.bind(this));
        },
        _toggleLinkWarning: function() {
            var t = this._$commentText.val();
            this._$linkWarning.toggleClass("hide", !this._containsLink(t));
        },
        _containsLink: function(t) {
            if (t) return i(t, "ContainsUrl");
        },
        _setTotal: function(t) {
            this._total = t;
            var n = this._$context.find(".js-comments-total");
            n.text(t ? "(" + t + ")" : "");
        },
        _initCommentContainer: function() {
            var t, n = this._id, i = this, e = ".js-see-more", s = this._$context.find(e);
            return t = o.extend({
                moreSelector: e
            }).init(this._$context, {
                type: "project",
                entity_id: n
            }, function(t) {
                s.toggleClass("hide", !t.more), i._setTotal(+t.total);
            }), this.listenTo(t, "remove", function() {
                this._setTotal(this._total - 1);
            }), t;
        },
        _bindForm: function() {
            function t(t) {
                if (!t.id || !t.user) throw t;
                n._commentContainer.add({
                    id: t.id,
                    user: t.user,
                    comment: t.comment,
                    posted_on: m.translate("comments_just_now", "Just now"),
                    permissions: [ 3e3 ]
                }), n._setTotal(n._total + 1);
            }
            var n = this, i = this._id, e = this._$view.find(".js-submit");
            e.length && (this._form = s.extend({
                hideButtonText: m.translate("comments_hidebutton_posting", "Posting...")
            }).init(this._$view).on("success", function() {
                n._toggleLinkWarning(), this.showButtons();
            }), this._form.commit = function(n) {
                return n.data.entity_id = i, this.then(t), this;
            });
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(4) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(s, i) {
    return i.extend({
        init: function(s, i, t, e) {
            this._$target = s, this._$sizer = i, this._classMap = e, this._measure = this._$sizer[t].bind(this._$sizer), 
            this._resizeCallback = this._applyBreakpointClasses.bind(this);
        },
        bind: function() {
            this._applyBreakpointClasses(), s(window).on("resize", this._resizeCallback);
        },
        _applyBreakpointClasses: function() {
            var s = this._measure();
            Object.keys(this._classMap).forEach(function(i) {
                this._$target.toggleClass(i, s < this._classMap[i]);
            }, this);
        },
        destroy: function() {
            s(window).off("resize", this._resizeCallback);
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(3), __webpack_require__(4), __webpack_require__(90) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, n, i) {
    return i.extend({
        fancyBoxOptions: {
            padding: 0,
            loop: !0,
            nextEffect: "fade",
            prevEffect: "fade",
            title: "",
            helpers: {
                title: {
                    type: "outside"
                }
            }
        },
        init: function(t) {
            this._$context = t;
        },
        bind: function() {
            this._bindFancyBox(), this._setCursorCss();
        },
        _bindFancyBox: function() {
            var i = n({}, {
                afterShow: this.trigger.bind(this, "show"),
                afterClose: this.trigger.bind(this, "hide")
            }, this.fancyBoxOptions);
            this._$context.each(function() {
                var n = t(this);
                n.attr("data-fancybox-group", "gallery").attr("href", n.data("hd-src")).fancybox(i);
            });
        },
        _setCursorCss: function() {
            [ "-moz-zoom-in", "zoom-in", 'url("/assets/img/site/-ie-zoom-in.cur"), pointer, hand' ].forEach(function(t) {
                this._$context.css("cursor", t);
            }, this);
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(4), __webpack_require__(142), __webpack_require__(41), __webpack_require__(117), __webpack_require__(65), __webpack_require__(118), __webpack_require__(162) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, e, i, n, o, s, c, r) {
    return e.extend({
        init: function(t) {
            this.$context = t;
        },
        bind: function() {
            this._message = i.init(this.$context), this._collection = r.init(this.$context), 
            n.init(this.$context), o.init(this.$context), s.init(this.$context), c.init(this.$context);
        },
        unbind: function() {
            this._message.destroy(), this._collection.destroy(), o.destroy(this.$context);
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(4), __webpack_require__(170), __webpack_require__(112) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, n, e, i) {
    return n.extend({
        init: function(t) {
            this.$context = t;
        },
        bind: function() {
            var n = this.$context.data();
            this.$context.on("click", ".js-viral-share-buttons", function(e) {
                i.open(t(this).data("service"), n, t(e.delegateTarget).data("from"));
            }), this._shareLink = e.init(n), this._shareLink.setContext(this.$context.find(".js-viral-copy-link"));
        },
        unbind: function() {
            this._shareLink.destroy();
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(4), __webpack_require__(160), __webpack_require__(106) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, e, n) {
    return t.extend({
        init: function(t) {
            this.$context = t;
        },
        bind: function() {
            this._report = e.init(this.$context), n.delegate(this.$context);
        },
        unbind: function() {
            this._report.destroy(), n.undelegate(this.$context);
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 187:
/***/ function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(3), __webpack_require__(29), __webpack_require__(4), __webpack_require__(122) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, i, s, e, n) {
    return e.extend({
        _isStuck: !1,
        init: function(t, i, s, e) {
            this._topPadding = 15, this._$scrollContext = t, this._$sidebar = i, this._$sidebarSpacer = s, 
            this._topSpacing = this._topPadding + (e ? 0 : n.getHeight());
        },
        bind: function() {
            this.on({
                stick: this._stickToggle
            }), t(window).on("resize.project-lib-stickysidebar", function() {
                this._$sidebar.css(this._isStuck ? this._getStuckCss() : this._getUnstuckCss());
            }.bind(this)), this.listenTo(s, {
                "desktop:enter": function() {
                    this._isStuck && this._stickToggle(!0);
                },
                "desktop:exit": function() {
                    this._stickToggle(!1);
                }
            }), this._$scrollContext.on("scroll.project-lib-stickysidebar", this._setState.bind(this)), 
            this._setState();
        },
        _getStuckScrollTop: function() {
            return this._topSpacing + this._$sidebarSpacer.outerHeight();
        },
        _setState: function() {
            var t = this._$scrollContext.scrollTop(), i = t > this._getStuckScrollTop(), e = s.is("desktop");
            i !== this._isStuck && e && this.trigger("stick", i), this._isStuck = i;
        },
        _getStuckCss: function() {
            return {
                position: "fixed",
                top: this._topSpacing,
                left: this._$sidebarSpacer.offset().left,
                width: this._$sidebarSpacer.css("width"),
                display: ""
            };
        },
        _getUnstuckCss: function() {
            return {
                position: "",
                top: "",
                left: "",
                width: "",
                display: ""
            };
        },
        _stickToggle: function(t) {
            t ? this._stick() : this._unstick();
        },
        _stick: function() {
            this._$sidebar.css(this._getStuckCss()).addClass("is-sticky").hide().fadeIn(function() {
                t(this).css("display", "");
            });
        },
        _unstick: function() {
            var i = this._getUnstuckCss();
            this._$sidebar.fadeOut(function() {
                t(this).css(i).removeClass("is-sticky");
            });
        },
        unbind: function() {
            t(window).off("resize.project-lib-stickysidebar"), this._$scrollContext.off("scroll.project-lib-stickysidebar");
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(3), __webpack_require__(29), __webpack_require__(4), __webpack_require__(122) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, i, o, s, e) {
    return s.extend({
        init: function(t, i, o, s, e, n, h, r) {
            this._$scrollContext = t, this._$socialButtons = i, this._$sidebarSpacer = o, this._sidebarWidth = this._$sidebarSpacer.innerWidth(), 
            this._isPopup = s, this._$projectView = e, this._$sidebarGroup = n, this._$projectWrap = this._$scrollContext.find(".js-project-wrap"), 
            this._$window = h, this._interval = r || 1e3, this._isPopup && (this._topPadding = this._$projectWrap.position().top, 
            this._windowOffset = this._$projectWrap.offset().top - this._topPadding);
        },
        bind: function() {
            var t = this;
            o.is("desktop") && t._initBindingsAndTimer(), o.on("desktop:enter", function() {
                t._initBindingsAndTimer();
            }), o.on("desktop:exit", function() {
                t._removeBindingAndTimer();
            });
        },
        _initBindingsAndTimer: function() {
            var t = this;
            t._calcHeights(), t._checkHeight(), t._positionSidebar(), t._timerId = setInterval(t._checkHeight.bind(t), t._interval), 
            t._$socialButtons.removeClass("hide"), t._$window.on("resize.project-lib-stickySocial", function() {
                t._scrollContextHeight = t._$scrollContext.height(), t._positionSidebar();
            }), t._$scrollContext.on("scroll.project-lib-stickySocial", function() {
                t._positionSidebar();
            });
        },
        _calcHeights: function() {
            this._navHeight = this._isPopup ? 0 : e.getHeight(), this._isPopup || (this._topPadding = Math.round(this._$projectView.offset().top - this._navHeight)), 
            this._topSpacing = this._isPopup ? this._topPadding : this._topPadding + this._navHeight, 
            this._socialHeight = this._$socialButtons.outerHeight(), this._topOffset = this._topSpacing + this._socialHeight, 
            this._scrollContextHeight = this._$scrollContext.height();
        },
        _checkHeight: function() {
            var t = this._$projectView.height() + this._topSpacing, i = this._$sidebarGroup.outerHeight();
            t === this._bottomOfProject && i === this._sidebarGroupHeight || (this._bottomOfProject = t, 
            this._sidebarGroupHeight = i, this._positionSidebar());
        },
        _positionSidebar: function() {
            var t = this._$scrollContext.scrollTop();
            this._bottomOfProject = this._$projectView.height() + this._topSpacing, this._sidebarGroupHeight = this._$sidebarGroup.outerHeight(), 
            this._positionSidebarGroup(t), this._positionSocialButtons(t);
        },
        _positionSidebarGroup: function(t) {
            var i = this._sidebarGroupHeight + t + this._topSpacing + this._socialHeight;
            return i > this._bottomOfProject ? void this._$sidebarGroup.css({
                bottom: "",
                position: "absolute",
                top: t - this._topPadding + (this._bottomOfProject - i)
            }) : t > this._topPadding ? void this._$sidebarGroup.css({
                bottom: "",
                position: "fixed",
                width: this._sidebarWidth,
                top: this._navHeight
            }) : void this._$sidebarGroup.css({
                bottom: "",
                position: "",
                top: ""
            });
        },
        _positionSocialButtons: function(t) {
            var i = t + this._scrollContextHeight, o = this._sidebarGroupHeight + this._$sidebarGroup.offset().top + (this._isPopup ? t - this._windowOffset : 0), s = o + this._socialHeight;
            return this._bottomOfProject < i ? void this._$socialButtons.css({
                position: "absolute",
                top: "",
                bottom: 0
            }) : s >= i ? void this._$socialButtons.css({
                position: "absolute",
                top: o - this._topSpacing,
                bottom: ""
            }) : void this._$socialButtons.css({
                position: "fixed",
                top: "",
                bottom: 0
            });
        },
        _removeBindingAndTimer: function() {
            this._$window.add(this._$scrollContext).off(".project-lib-stickySocial"), clearInterval(this._timerId);
        },
        unbind: function() {
            o.off(null, null, this), this._removeBindingAndTimer();
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _lightbox = __webpack_require__(225), _lightbox2 = _interopRequireDefault(_lightbox), _Component = __webpack_require__(4), _Component2 = _interopRequireDefault(_Component), _LightboxLastSlide = __webpack_require__(190), _LightboxLastSlide2 = _interopRequireDefault(_LightboxLastSlide), _follow = __webpack_require__(41), _follow2 = _interopRequireDefault(_follow);

exports.default = _Component2.default.extend({
    init: function(e) {
        this._$project = e;
    },
    bind: function() {
        var e = this;
        this._lightbox = _lightbox2.default.init({
            context: this._$project,
            slideSelector: ".js-project-lightbox-link",
            isCircular: !1,
            bgColor: "#000",
            opacity: "1"
        }), this._lazyAddLastSlide(), this._$project.on("click.lightbox", ".js-lightbox-caption", function() {
            return e._lightbox.close();
        });
    },
    unbind: function() {
        this._lightbox.destroy(), this._$project.off(".lightbox");
    },
    _lazyAddLastSlide: function() {
        var e = this, t = this._lightbox, i = t.slides, o = {
            id: i.length,
            data: {
                noZoom: !0
            },
            content: (0, _jquery2.default)("<div>")
        };
        i.push(o), t.on("activate", function(t) {
            if (t.id === o.id && !e._overlaySlide) {
                var l = i[i.length - 2].content, n = e._$project.find(".js-lightbox-overlay-slide").html();
                e._overlaySlide = _LightboxLastSlide2.default.init(o.content, n, l), e._overlaySlide.on("viewAgain", function() {
                    return e._lightbox.open(0);
                });
            }
            _follow2.default.init();
        }), t.on("deactivate", function(t) {
            t.id === o.id && e._overlaySlide && (e._overlaySlide.destroy(), delete e._overlaySlide);
        });
    }
}), module.exports = exports.default;

/***/ },

/***/ 190:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _Component = __webpack_require__(4), _Component2 = _interopRequireDefault(_Component), _Cover = __webpack_require__(92), _Cover2 = _interopRequireDefault(_Cover);

exports.default = _Component2.default.extend({
    init: function(e, t, n) {
        this._$context = e, this._template = t, this._lastSlideContent = n, this._projectCoverViews = [];
    },
    bind: function() {
        var e = this;
        this._$context.append(this._getOverlaySlideContent()), this._$context.find(".js-view-again").on("click.lightbox-overlay", function(t) {
            t.stopPropagation(), e.trigger("viewAgain");
        }), this._$context.find(".js-project-cover").each(function(t, n) {
            var o = new _Cover2.default((0, _jquery2.default)(n));
            o.rendered(), e._projectCoverViews.push(o);
        });
    },
    unbind: function() {
        this._projectCoverViews.forEach(function(e) {
            return e.destroy();
        }), this._$context.add(".js-view-again", this._$context).off(".lightbox-overlay"), 
        this._$context.empty();
    },
    _getOverlaySlideContent: function() {
        var e = (0, _jquery2.default)(this._template);
        return e.find(".js-last-slide").append(this._lastSlideContent), e;
    }
}), module.exports = exports.default;

/***/ },

/***/ 191:
/***/ function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(5), __webpack_require__(179), __webpack_require__(180) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, t, n) {
    var a = {
        init: function(a, o, r) {
            if (r.mature_content) {
                var s, c, i = {
                    "restricted-geo": e.translate("mature_content_restricted_geo", '<div class="mature-message">Because you live in a country where adult content is illegal you can\'t view this content on Behance.</div>'),
                    "restricted-age": e.translate("mature_content_restricted_age", '<div class="mature-message">Because you are under 18 years old, you can\'t access adult content on Behance.</div>'),
                    "restricted-safe": e.translate("mature_content_restricted_safe", '<div class="mature-message">You currently have Safe Browsing turned on. Would you like to turn off Safe Browsing to view content on Behance that contain adult content?</div>')
                };
                if ("logged-out" === r.mature_access) s = new n({
                    classes: [ "mature-blocker", "log-in" ],
                    title: e.translate("mature_content_log_in", "Log In"),
                    login: {
                        classes: [ "form-button-default", "form-button-large", "js-adobeid-signin" ],
                        label: e.translate("mature_content_log_in", "Log In")
                    }
                }); else {
                    if (c = i[r.mature_access], !c) return;
                    s = new t(a, {
                        title: e.translate("mature_content_restricted_project_title", "This project contains adult content"),
                        html: c,
                        access: r.mature_access
                    });
                }
                s.render(), this.popup = s;
            }
        },
        destroy: function() {
            this.popup && (this.popup.destroy(), this.popup = null);
        }
    };
    return a;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 192:
/***/ function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(49), __webpack_require__(29), __webpack_require__(38), __webpack_require__(5), __webpack_require__(169), __webpack_require__(143), __webpack_require__(207) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, e, o, i, r, n, a, l) {
    return e = e.get("project/lib/startup"), {
        _share: function(t) {
            a.init({
                text: t.promote.share_text,
                image: t.promote.image,
                loggedLocation: "project/share_popup"
            }).render();
        },
        _portfolio: function(t) {
            var e = new n();
            return e.on("hide", this._share.bind(this, t)).render({
                paidCC: t.portfolio.provisioned
            });
        },
        _fixBackButton: function() {
            var e = window.location.href;
            t(window).on("popstate.project-lib-startup", function(t) {
                t.originalEvent && e !== window.location.href && window.location.replace(window.location.href);
            });
        },
        destroy: function() {
            t(window).off("popstate.project-lib-startup");
        },
        init: function(t) {
            if (this._fixBackButton(), t.unverified) i({
                title: r.translate("project_unverified_popup_title", "Your project is private"),
                classes: [ "unverified-modal" ],
                html: l({
                    verification_url: t.ADOBE_VERIFY,
                    email: t.email
                })
            }); else {
                if (t.portfolio && (o.is("desktop") || o.is("tablet"))) return this._portfolio(t);
                if (t.promote && o.is("desktop")) return this._share(t);
            }
        }
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 193:
/***/ function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(138), __webpack_require__(114) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, e, n) {
    return {
        updateTalent: function(t) {
            var a = t.find(".js-add-talent");
            a.length && (this.talent = new e(a.data("id")), this.talent.setContext(a), this.talent.on("update", function(e) {
                t.find(".js-added-talent-searches").html(n({
                    searches_added_to: e.join(", ")
                }));
            }.bind(this)));
        }
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 194:
/***/ function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(5), __webpack_require__(212), __webpack_require__(8) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, e, i) {
    return {
        mustache: i,
        title: e.translate("collections_title", "Collections"),
        templateData: function() {
            return t.extend({
                classes: [ "list-popup" ],
                title: this.title,
                buttons: [ {
                    label: e.translate("collection_dialog_button_save", "Save"),
                    classes: [ "form-button-default", "collections-save" ]
                } ]
            }, this._model.data());
        },
        rendered: function() {
            this._$saveButton = this.$view.find(".collections-save"), this._super(), this.bindSelections(), 
            this.newCollection(), this.saveCollections();
        },
        saveCollections: function() {
            this.$view.on("click", ".collections-save:not([disabled])", function() {
                this._controller.update(), this.hide(), this._$saveButton.changeInput("disable");
            }.bind(this));
        },
        newCollection: function() {
            var t = this.$view.find("form");
            t.on("submit", function() {
                var e = t.serializeArray(), i = e[0].value;
                return this._controller.create(i).then(function() {
                    this.render(), this.show(), this.position(), this._$saveButton.changeInput("enable");
                }.bind(this)), !1;
            }.bind(this)).on("click", ".form-submit", function() {
                t.submit();
            });
        },
        bindSelections: function() {
            var e = this;
            this._$saveButton.changeInput("disable"), this.select(this._model.get("project_collection_ids")), 
            this.listenTo(this._model, "project_collection_ids", this.select), this.$view.on("click", ".collection", function() {
                var i, n = t(this).data("key"), o = e._model.get("project_collection_ids");
                ~(i = o.indexOf(n)) ? o.splice(i, 1) : o.push(n), e._model.trigger("project_collection_ids", o), 
                e._$saveButton.changeInput("enable");
            });
        },
        select: function(t) {
            return this.$view.find(".collection").removeClass("active"), t && t.forEach(function(t) {
                this.$view.find(".collection[data-key=" + t + "]").addClass("active");
            }, this);
        }
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 195:
/***/ function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(3), __webpack_require__(5), __webpack_require__(208) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, e, n) {
    var a = {
        "restricted-safe": [ {
            label: e.translate("adult_wall_dialog_button_submit", "Turn off Safe Browsing"),
            classes: [ "form-button-default", "form-submit" ]
        }, {
            label: e.translate("adult_wall_dialog_button_cancel", "Cancel"),
            classes: [ "form-button-cancel" ]
        } ]
    };
    return {
        mustache: n,
        templateData: function() {
            var e = t({
                classes: [ "mature-blocker", "safe" ]
            }, this._model.data());
            return e.buttons = a[e.access], e;
        },
        rendered: function() {
            this.$view.on("click", ".form-submit", function() {
                this._controller.disableSafeBrowsing().then(this.hide.bind(this)).then(this.destroy.bind(this));
            }.bind(this)).filter(".blocking-div").on("click", function(t) {
                t.stopImmediatePropagation();
            }), this._super();
        }
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 196:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)();
// imports


// module
exports.push([module.i, "html.lightbox-enabled,\nhtml.lightbox-enabled body {\n  overflow: hidden; }\n\nhtml.lightbox-zoomed .lightbox-content {\n  cursor: zoom-out;\n  overflow: auto; }\n  html.lightbox-zoomed .lightbox-content.zoomable-x {\n    justify-content: flex-start; }\n  html.lightbox-zoomed .lightbox-content.zoomable-y {\n    align-items: baseline; }\n\nhtml.lightbox-zoomed #lightbox-wrap img {\n  max-width: inherit;\n  max-height: inherit; }\n\nhtml.lightbox-zoomed #lightbox-img-wrap .lightbox-extra {\n  display: none; }\n\n.lightbox-link,\n.lightbox-content.zoomable {\n  cursor: zoom-in; }\n\n#lightbox-wrap .lightbox-contents {\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.lightbox-content {\n  align-items: center;\n  display: flex;\n  height: 100vh;\n  justify-content: center;\n  opacity: 1;\n  position: absolute;\n  top: 0;\n  transition: opacity .4s;\n  width: 100vw; }\n\n#lightbox-blocking {\n  align-items: center;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 1002; }\n  #lightbox-blocking .lightbox-spinner {\n    display: none; }\n\n#lightbox-wrap {\n  height: 100vh;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  z-index: 1001; }\n  #lightbox-wrap .offscreen, #lightbox-wrap.offscreen {\n    height: 0;\n    overflow: hidden;\n    visibility: hidden;\n    -webkit-transform: translateX(-99999px);\n    -ms-transform: translateX(-99999px);\n    transform: translateX(-99999px);\n    width: 0; }\n  #lightbox-wrap.loading .lightbox-spinner {\n    display: block; }\n  #lightbox-wrap .hidden {\n    opacity: 0; }\n  #lightbox-wrap .lightbox-contents {\n    display: inline-block;\n    max-height: 100%;\n    max-width: 100%; }\n  #lightbox-wrap.single .next, #lightbox-wrap.single .next:hover,\n  #lightbox-wrap.single .prev,\n  #lightbox-wrap.single .prev:hover {\n    display: none; }\n  #lightbox-wrap.extras-hidden #lightbox-img-wrap .lightbox-extra {\n    opacity: 0;\n    transition: opacity 1s; }\n  #lightbox-wrap img {\n    max-height: 100vh;\n    max-width: 100vw; }\n\n#lightbox-inner-wrap {\n  margin: auto;\n  position: relative;\n  z-index: 1003; }\n  #lightbox-inner-wrap .control {\n    cursor: pointer;\n    position: absolute;\n    z-index: 1003; }\n  #lightbox-inner-wrap svg .lightbox-icon-bg {\n    fill: #696969;\n    opacity: .2; }\n  #lightbox-inner-wrap svg:hover .lightbox-icon-bg {\n    opacity: .4; }\n  #lightbox-inner-wrap .next,\n  #lightbox-inner-wrap .prev {\n    height: 100vh;\n    opacity: 0;\n    top: 0;\n    width: 30vw; }\n    #lightbox-inner-wrap .next:hover,\n    #lightbox-inner-wrap .prev:hover {\n      opacity: 1; }\n    #lightbox-inner-wrap .next.hidden,\n    #lightbox-inner-wrap .prev.hidden {\n      cursor: default; }\n      #lightbox-inner-wrap .next.hidden svg,\n      #lightbox-inner-wrap .prev.hidden svg {\n        display: none; }\n    #lightbox-inner-wrap .next svg,\n    #lightbox-inner-wrap .prev svg {\n      top: -webkit-calc(50% - 30px) ;\n      top: calc(50% - 30px) ;\n      position: absolute; }\n      #lightbox-inner-wrap .next svg .lightbox-icon-arrow,\n      #lightbox-inner-wrap .prev svg .lightbox-icon-arrow {\n        fill: #FFFFFF; }\n  #lightbox-inner-wrap .next {\n    right: 0; }\n    #lightbox-inner-wrap .next svg {\n      right: 20px; }\n  #lightbox-inner-wrap .prev {\n    left: 0; }\n    #lightbox-inner-wrap .prev svg {\n      left: 20px; }\n  #lightbox-inner-wrap .close {\n    position: fixed;\n    height: 40px;\n    right: 20px;\n    top: 20px;\n    width: 40px; }\n    #lightbox-inner-wrap .close:hover {\n      cursor: pointer; }\n    #lightbox-inner-wrap .close .lightbox-icon-bg {\n      fill: #fff; }\n\n@media (max-width: 1024px) {\n  #lightbox-inner-wrap .close {\n    right: 0;\n    top: 0; }\n    #lightbox-inner-wrap .close circle {\n      display: none; }\n  #lightbox-inner-wrap .next:hover,\n  #lightbox-inner-wrap .prev:hover {\n    opacity: 0; } }\n\n@media (min-width: 1024px) {\n  .lightbox-link {\n    position: relative; }\n    .lightbox-link:hover::after {\n      background: rgba(105, 105, 105, 0.2) url(" + __webpack_require__(228) + ") no-repeat center;\n      background-size: 16px;\n      border-radius: 50%;\n      content: '';\n      display: block;\n      height: 36px;\n      position: absolute;\n      right: 10px;\n      top: 10px;\n      width: 36px;\n      z-index: 1000; } }\n\n@media all and (-ms-high-contrast: none) {\n  .lightbox-link,\n  .lightbox-content.zoomable {\n    cursor: pointer; } }\n", ""]);

// exports


/***/ },

/***/ 197:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)();
// imports


// module
exports.push([module.i, "@-webkit-keyframes rotate-forever {\n  0% {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@-moz-keyframes rotate-forever {\n  0% {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes rotate-forever {\n  0% {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n.lightbox-spinner {\n  -webkit-animation-duration: 0.7s;\n  -moz-animation-duration: 0.7s;\n  animation-duration: 0.7s;\n  -webkit-animation-iteration-count: infinite;\n  -moz-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  -webkit-animation-name: rotate-forever;\n  -moz-animation-name: rotate-forever;\n  animation-name: rotate-forever;\n  -webkit-animation-timing-function: linear;\n  -moz-animation-timing-function: linear;\n  animation-timing-function: linear;\n  height: 30px;\n  width: 30px;\n  border: 4px solid #fff;\n  border-right-color: transparent;\n  border-radius: 50%;\n  display: inline-block;\n  opacity: 0.7; }\n", ""]);

// exports


/***/ },

/***/ 198:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)();
// imports


// module
exports.push([module.i, "/*! fancyBox v2.0.4 fancyapps.com | fancyapps.com/fancybox/#license */\n.fancybox-tmp iframe, .fancybox-tmp object {\n  vertical-align: top;\n  padding: 0;\n  margin: 0;\n}\n\n.fancybox-wrap {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1002;\n}\n\n.fancybox-outer {\n  padding: 0;\n  margin: 0;\n  background: #f9f9f9;\n  color: #444;\n  text-shadow: none;\n  -webkit-border-radius: 4px;\n  -moz-border-radius: 4px;\n  border-radius: 4px;\n}\n\n.fancybox-opened {\n  z-index: 1003;\n}\n\n.fancybox-opened .fancybox-outer {\n  -webkit-box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);\n  -moz-box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);\n}\n\n.fancybox-inner {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  position: relative;\n  outline: none;\n  overflow: hidden;\n}\n\n.fancybox-error {\n  color: #444;\n  font: 14px/20px \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  margin: 0;\n  padding: 10px;\n}\n\n.fancybox-image, .fancybox-iframe {\n  display: block;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  padding: 0;\n  margin: 0;\n  vertical-align: top;\n}\n\n.fancybox-image {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n#fancybox-loading {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  margin-top: -21px;\n  margin-left: -21px;\n  width: 42px;\n  height: 42px;\n  background: url(\"//a3.behance.net/img/jquery/plugins/fancybox/loading.gif?cb=1020668724\");\n  opacity: 0.8;\n  cursor: pointer;\n  z-index: 1010;\n}\n\n.fancybox-close, .fancybox-prev span, .fancybox-next span {\n  background-image: url(\"//a3.behance.net/img/jquery/plugins/fancybox/sprite.png?cb=1020668724\");\n}\n\n.fancybox-close {\n  position: absolute;\n  top: -18px;\n  right: -18px;\n  width: 36px;\n  height: 36px;\n  cursor: pointer;\n  z-index: 1004;\n}\n\n.fancybox-prev, .fancybox-next {\n  position: absolute;\n  top: 0;\n  width: 40%;\n  height: 100%;\n  cursor: pointer;\n  background: transparent url(\"//a3.behance.net/img/jquery/blank.gif?cb=1020668724\");\n  /* helps IE */\n  z-index: 1003;\n}\n\n.fancybox-prev {\n  left: 0;\n}\n\n.fancybox-next {\n  right: 0;\n}\n\n.fancybox-prev span, .fancybox-next span {\n  position: absolute;\n  top: 50%;\n  left: -9999px;\n  width: 36px;\n  height: 36px;\n  margin-top: -18px;\n  cursor: pointer;\n  z-index: 1003;\n}\n\n.fancybox-prev span {\n  background-position: 0 -36px;\n}\n\n.fancybox-next span {\n  background-position: 0 -72px;\n}\n\n.fancybox-prev:hover, .fancybox-next:hover {\n  visibility: visible;\n}\n\n.fancybox-prev:hover span {\n  left: 20px;\n}\n\n.fancybox-next:hover span {\n  left: auto;\n  right: 20px;\n}\n\n.fancybox-tmp {\n  position: absolute;\n  top: -9999px;\n  left: -9999px;\n  padding: 0;\n  overflow: visible;\n  visibility: hidden;\n}\n\n/* Overlay helper */\n#fancybox-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  display: none;\n  z-index: 1001;\n  background: #000;\n}\n\n/* Title helper */\n.fancybox-title {\n  visibility: hidden;\n  font: normal 13px/20px \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  position: relative;\n  text-shadow: none;\n  z-index: 1005;\n}\n\n.fancybox-opened .fancybox-title {\n  visibility: visible;\n}\n\n.fancybox-title-float-wrap {\n  position: absolute;\n  bottom: 0;\n  right: 50%;\n  margin-bottom: -35px;\n  z-index: 1003;\n  text-align: center;\n}\n\n.fancybox-title-float-wrap .child {\n  display: inline-block;\n  margin-right: -100%;\n  padding: 2px 20px;\n  background: transparent;\n  /* Fallback for web browsers that doesn't support RGBa */\n  background: rgba(0, 0, 0, 0.8);\n  -webkit-border-radius: 15px;\n  -moz-border-radius: 15px;\n  border-radius: 15px;\n  text-shadow: 0 1px 2px #222;\n  color: #FFF;\n  font-weight: bold;\n  line-height: 24px;\n  white-space: nowrap;\n}\n\n.fancybox-title-outside-wrap {\n  position: relative;\n  margin-top: 10px;\n  color: #fff;\n}\n\n.fancybox-title-inside-wrap {\n  margin-top: 10px;\n}\n\n.fancybox-title-over-wrap {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  color: #fff;\n  padding: 10px;\n  background: #000;\n  background: rgba(0, 0, 0, 0.8);\n}\n\n\n", ""]);

// exports


/***/ },

/***/ 199:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<svg class=\"icon-social\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 20 20\" xml:space=\"preserve\">");t.b("\n" + i);t.b("  <path class=\"circle\" d=\"M20,10c0,5.5-4.5,10-10,10S0,15.5,0,10S4.5,0,10,0S20,4.5,20,10z\"/>");t.b("\n" + i);t.b("  <path class=\"icon\" d=\"M10.8,6.5c0-0.7,0.2-1.2,1-1.2h1.3L13.3,3c0,0-0.7-0.2-1.8-0.2C9,2.8,8,4.3,8,6c0,1.2,0,2.3,0,2.3H6.3v2.5H8");t.b("\n" + i);t.b("    V17h2.8v-6.2h2.3l0.2-2.5h-2.5V6.5z\"/>");t.b("\n" + i);t.b("</svg>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<svg class=\"icon-social\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 20 20\" xml:space=\"preserve\">\n  <path class=\"circle\" d=\"M20,10c0,5.5-4.5,10-10,10S0,15.5,0,10S4.5,0,10,0S20,4.5,20,10z\"/>\n  <path class=\"icon\" d=\"M10.8,6.5c0-0.7,0.2-1.2,1-1.2h1.3L13.3,3c0,0-0.7-0.2-1.8-0.2C9,2.8,8,4.3,8,6c0,1.2,0,2.3,0,2.3H6.3v2.5H8\n    V17h2.8v-6.2h2.3l0.2-2.5h-2.5V6.5z\"/>\n</svg>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 200:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<svg class=\"icon-social\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 20 20\" xml:space=\"preserve\">");t.b("\n" + i);t.b("  <path class=\"circle\" d=\"M20,10c0,5.5-4.5,10-10,10S0,15.5,0,10S4.5,0,10,0S20,4.5,20,10z\"/>");t.b("\n" + i);t.b("  <path class=\"icon\" d=\"M7.5,5.2c0-0.8-0.7-1.5-1.7-1.5S4.2,4.3,4.2,5.2s0.7,1.5,1.7,1.5l0,0C6.8,6.7,7.5,6,7.5,5.2z\"/>");t.b("\n" + i);t.b("  <rect class=\"icon\" x=\"4.7\" y=\"8\" width=\"2.5\" height=\"7\"/>");t.b("\n" + i);t.b("  <path class=\"icon\" d=\"M16.2,11.2c0-2.3-1.2-3.7-2.8-3.7c-1,0-1.8,0.7-2,1.5l-0.2-1H8.7c0,0.3,0,1.7,0,1.7V15h2.5v-3.8");t.b("\n" + i);t.b("    c0-1,0.5-1.7,1.2-1.7c0.8,0,1.3,0.3,1.3,1.7v3.7h2.5V11.2z\"/>");t.b("\n" + i);t.b("</svg>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<svg class=\"icon-social\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 20 20\" xml:space=\"preserve\">\n  <path class=\"circle\" d=\"M20,10c0,5.5-4.5,10-10,10S0,15.5,0,10S4.5,0,10,0S20,4.5,20,10z\"/>\n  <path class=\"icon\" d=\"M7.5,5.2c0-0.8-0.7-1.5-1.7-1.5S4.2,4.3,4.2,5.2s0.7,1.5,1.7,1.5l0,0C6.8,6.7,7.5,6,7.5,5.2z\"/>\n  <rect class=\"icon\" x=\"4.7\" y=\"8\" width=\"2.5\" height=\"7\"/>\n  <path class=\"icon\" d=\"M16.2,11.2c0-2.3-1.2-3.7-2.8-3.7c-1,0-1.8,0.7-2,1.5l-0.2-1H8.7c0,0.3,0,1.7,0,1.7V15h2.5v-3.8\n    c0-1,0.5-1.7,1.2-1.7c0.8,0,1.3,0.3,1.3,1.7v3.7h2.5V11.2z\"/>\n</svg>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 201:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<svg class=\"icon-social\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 20 20\" xml:space=\"preserve\">");t.b("\n" + i);t.b("  <path class=\"circle\" d=\"M20,10c0,5.5-4.5,10-10,10S0,15.5,0,10S4.5,0,10,0S20,4.5,20,10z\"/>");t.b("\n" + i);t.b("	<path class=\"icon\" d=\"M7.4,19.7c0,0,0.8-1.2,0.9-2C8.5,17.2,9,14.8,9,14.8c0.3,0.7,1.3,1.2,2.5,1.2c3.2,0,5.3-3,5.3-6.8");t.b("\n" + i);t.b("		c0-3-2.5-5.7-6.3-5.7c-4.8,0-7.2,3.3-7.2,6.2c0,1.7,0.7,3.3,2,3.8c0.2,0.2,0.5,0,0.5-0.3C5.8,13,6,12.5,6,12.3C6,12,6,12,5.8,11.8");t.b("\n" + i);t.b("		c-0.3-0.5-0.7-1.2-0.7-2C5.2,7.3,7,5,10.2,5c2.7,0,4.2,1.7,4.2,3.8c0,2.8-1.3,5.3-3.2,5.3c-1,0-1.8-0.8-1.5-2");t.b("\n" + i);t.b("		c0.3-1.3,0.8-2.7,0.8-3.5S10,7.2,9.2,7.2c-1,0-2,1.2-2,2.7c0,1,0.3,1.5,0.3,1.5S6.3,16,6.2,16.8C6,17.5,6,18.5,6,19.2");t.b("\n" + i);t.b("		c0,0,0.5,0.2,0.7,0.3c0.1,0,0.3,0.1,0.4,0.1C7.3,19.6,7.4,19.7,7.4,19.7z\"/>");t.b("\n" + i);t.b("</svg>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<svg class=\"icon-social\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 20 20\" xml:space=\"preserve\">\n  <path class=\"circle\" d=\"M20,10c0,5.5-4.5,10-10,10S0,15.5,0,10S4.5,0,10,0S20,4.5,20,10z\"/>\n\t<path class=\"icon\" d=\"M7.4,19.7c0,0,0.8-1.2,0.9-2C8.5,17.2,9,14.8,9,14.8c0.3,0.7,1.3,1.2,2.5,1.2c3.2,0,5.3-3,5.3-6.8\n\t\tc0-3-2.5-5.7-6.3-5.7c-4.8,0-7.2,3.3-7.2,6.2c0,1.7,0.7,3.3,2,3.8c0.2,0.2,0.5,0,0.5-0.3C5.8,13,6,12.5,6,12.3C6,12,6,12,5.8,11.8\n\t\tc-0.3-0.5-0.7-1.2-0.7-2C5.2,7.3,7,5,10.2,5c2.7,0,4.2,1.7,4.2,3.8c0,2.8-1.3,5.3-3.2,5.3c-1,0-1.8-0.8-1.5-2\n\t\tc0.3-1.3,0.8-2.7,0.8-3.5S10,7.2,9.2,7.2c-1,0-2,1.2-2,2.7c0,1,0.3,1.5,0.3,1.5S6.3,16,6.2,16.8C6,17.5,6,18.5,6,19.2\n\t\tc0,0,0.5,0.2,0.7,0.3c0.1,0,0.3,0.1,0.4,0.1C7.3,19.6,7.4,19.7,7.4,19.7z\"/>\n</svg>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 202:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<svg class=\"icon-social\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 20 20\" xml:space=\"preserve\">");t.b("\n" + i);t.b("  <path class=\"circle\" d=\"M20,10c0,5.5-4.5,10-10,10S0,15.5,0,10S4.5,0,10,0S20,4.5,20,10z\"/>");t.b("\n" + i);t.b("  <path class=\"icon\" d=\"M17.5,6.3c-0.5,0.2-1,0.3-1.7,0.5c0.7-0.3,1-0.8,1.2-1.5c-0.5,0.3-1.2,0.5-1.8,0.7c-0.5-0.5-1.2-0.8-2-0.8");t.b("\n" + i);t.b("    c-1.5,0-2.8,1.3-2.8,2.8c0,0.2,0,0.5,0,0.7C8,8.5,5.8,7.3,4.5,5.7c-0.2,0.5-0.3,1-0.3,1.5c0,1,0.5,1.8,1.3,2.3");t.b("\n" + i);t.b("    C5,9.5,4.7,9.3,4.2,9.2l0,0c0,1.3,1,2.5,2.3,2.8c-0.2,0-0.5,0.2-0.7,0.2s-0.3,0-0.5,0c0.3,1.2,1.3,1.8,2.7,2c-1,0.8-2.2,1.3-3.5,1.3");t.b("\n" + i);t.b("    c-0.2,0-0.5,0-0.7,0c1.3,0.8,2.8,1.2,4.3,1.2c5.2,0,8-4.3,8-8c0-0.2,0-0.3,0-0.3C16.7,7.5,17.2,7,17.5,6.3z\"/>");t.b("\n" + i);t.b("</svg>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<svg class=\"icon-social\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 20 20\" xml:space=\"preserve\">\n  <path class=\"circle\" d=\"M20,10c0,5.5-4.5,10-10,10S0,15.5,0,10S4.5,0,10,0S20,4.5,20,10z\"/>\n  <path class=\"icon\" d=\"M17.5,6.3c-0.5,0.2-1,0.3-1.7,0.5c0.7-0.3,1-0.8,1.2-1.5c-0.5,0.3-1.2,0.5-1.8,0.7c-0.5-0.5-1.2-0.8-2-0.8\n    c-1.5,0-2.8,1.3-2.8,2.8c0,0.2,0,0.5,0,0.7C8,8.5,5.8,7.3,4.5,5.7c-0.2,0.5-0.3,1-0.3,1.5c0,1,0.5,1.8,1.3,2.3\n    C5,9.5,4.7,9.3,4.2,9.2l0,0c0,1.3,1,2.5,2.3,2.8c-0.2,0-0.5,0.2-0.7,0.2s-0.3,0-0.5,0c0.3,1.2,1.3,1.8,2.7,2c-1,0.8-2.2,1.3-3.5,1.3\n    c-0.2,0-0.5,0-0.7,0c1.3,0.8,2.8,1.2,4.3,1.2c5.2,0,8-4.3,8-8c0-0.2,0-0.3,0-0.3C16.7,7.5,17.2,7,17.5,6.3z\"/>\n</svg>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 203:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"be/portfolio-device": __webpack_require__(163).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"portfolio-popup-content-inner\">");t.b("\n" + i);t.b(t.rp("<be/portfolio-device0",c,p,"  "));t.b("  <div class=\"portfolio-details-container\">");t.b("\n" + i);t.b("    <div class=\"portfolio-title\">");t.b("\n" + i);t.b("      ");if(t.s(t.f("translate",c,p,1),c,p,0,170,286,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_portfolio_title|Now that you've published a project, build a custom website in minutes with Adobe Portfolio.");});c.pop();}t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <ul class=\"portfolio-list\">");t.b("\n" + i);if(t.s(t.f("paidCC",c,p,1),c,p,0,361,524,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <li class=\"cc\">");if(t.s(t.f("translate",c,p,1),c,p,0,399,498,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_portfolio_list_1_alt|You're a Creative Cloud member, so Portfolio is FREE with your CC plan");});c.pop();}t.b("</li>");t.b("\n" + i);});c.pop();}if(!t.s(t.f("paidCC",c,p,1),c,p,1,0,0,"")){t.b("        <li>");if(t.s(t.f("translate",c,p,1),c,p,0,580,644,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_portfolio_list_1|Free with any Adobe Creative Cloud plan");});c.pop();}t.b("</li>");t.b("\n" + i);};t.b("      <li>");if(t.s(t.f("translate",c,p,1),c,p,0,706,749,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_portfolio_list_2|Syncs with Behance");});c.pop();}t.b("</li>");t.b("\n" + i);t.b("      <li>");if(t.s(t.f("translate",c,p,1),c,p,0,793,836,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_portfolio_list_3|Responsive layouts");});c.pop();}t.b("</li>");t.b("\n" + i);t.b("      <li>");if(t.s(t.f("translate",c,p,1),c,p,0,880,929,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_portfolio_list_4|Access all Typekit fonts");});c.pop();}t.b("</li>");t.b("\n" + i);t.b("    </ul>");t.b("\n" + i);t.b("    <a href=\"https://myportfolio.com\" id=\"portfolio-button\" class=\"js-portfolio-button form-button form-button-massive form-button-default\">");if(t.s(t.f("translate",c,p,1),c,p,0,1113,1161,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_portfolio_start|Start Your Portfolio Now");});c.pop();}t.b("</a>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<be/portfolio-device0":{name:"be/portfolio-device", partials: {}, subs: {  }}}, subs: {  }}, "<div class=\"portfolio-popup-content-inner\">\n  {{> be/portfolio-device}}\n  <div class=\"portfolio-details-container\">\n    <div class=\"portfolio-title\">\n      {{#translate}}project_portfolio_title|Now that you've published a project, build a custom website in minutes with Adobe Portfolio.{{/translate}}\n    </div>\n    <ul class=\"portfolio-list\">\n      {{#paidCC}}\n        <li class=\"cc\">{{#translate}}project_portfolio_list_1_alt|You're a Creative Cloud member, so Portfolio is FREE with your CC plan{{/translate}}</li>\n      {{/paidCC}}\n      {{^paidCC}}\n        <li>{{#translate}}project_portfolio_list_1|Free with any Adobe Creative Cloud plan{{/translate}}</li>\n      {{/paidCC}}\n      <li>{{#translate}}project_portfolio_list_2|Syncs with Behance{{/translate}}</li>\n      <li>{{#translate}}project_portfolio_list_3|Responsive layouts{{/translate}}</li>\n      <li>{{#translate}}project_portfolio_list_4|Access all Typekit fonts{{/translate}}</li>\n    </ul>\n    <a href=\"https://myportfolio.com\" id=\"portfolio-button\" class=\"js-portfolio-button form-button form-button-massive form-button-default\">{{#translate}}project_portfolio_start|Start Your Portfolio Now{{/translate}}</a>\n  </div>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 204:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"be/socialShareButtons": __webpack_require__(88).template,"be/_shareLinkInput": __webpack_require__(113).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"promote-dialog\">");t.b("\n" + i);t.b("  <div class=\"promote-buttons\">");t.b("\n" + i);t.b("    <h2>");t.b("\n" + i);t.b("      ");if(t.s(t.f("header",c,p,1),c,p,0,84,94,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.v(t.f("header",c,p,0)));});c.pop();}t.b("\n" + i);t.b("      ");if(!t.s(t.f("header",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("translate",c,p,1),c,p,0,137,184,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("share_popup_promote_your_work|Promote Your Work");});c.pop();}};t.b("\n" + i);t.b("    </h2>");t.b("\n" + i);t.b(t.rp("<be/socialShareButtons0",c,p,"    "));t.b("  </div>");t.b("\n" + i);t.b(t.rp("<be/_shareLinkInput1",c,p,"  "));t.b("</div>");t.b("\n");return t.fl(); },partials: {"<be/socialShareButtons0":{name:"be/socialShareButtons", partials: {}, subs: {  }},"<be/_shareLinkInput1":{name:"be/_shareLinkInput", partials: {}, subs: {  }}}, subs: {  }}, "<div id=\"promote-dialog\">\n  <div class=\"promote-buttons\">\n    <h2>\n      {{#header}}{{header}}{{/header}}\n      {{^header}}{{#translate}}share_popup_promote_your_work|Promote Your Work{{/translate}}{{/header}}\n    </h2>\n    {{>be/socialShareButtons}}\n  </div>\n  {{>be/_shareLinkInput}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 205:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"be/_shareLinkInput": __webpack_require__(113).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"share-link-inner-dialog\">");t.b("\n" + i);t.b("  <div class=\"share-link-info\">");t.b("\n" + i);t.b("    <h1>");if(t.s(t.f("translate",c,p,1),c,p,0,92,141,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("be_share_link_copy_project_link|Copy Project Link");});c.pop();}t.b("</h1>");t.b("\n" + i);t.b("    <p>");if(t.s(t.f("translate",c,p,1),c,p,0,182,280,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("be_share_link_copy_project_link_with_others|Copy the link below to share this project with others.");});c.pop();}t.b("</p>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b(t.rp("<be/_shareLinkInput0",c,p,"  "));t.b("</div>");t.b("\n");return t.fl(); },partials: {"<be/_shareLinkInput0":{name:"be/_shareLinkInput", partials: {}, subs: {  }}}, subs: {  }}, "<div class=\"share-link-inner-dialog\">\n  <div class=\"share-link-info\">\n    <h1>{{#translate}}be_share_link_copy_project_link|Copy Project Link{{/translate}}</h1>\n    <p>{{#translate}}be_share_link_copy_project_link_with_others|Copy the link below to share this project with others.{{/translate}}</p>\n  </div>\n  {{>be/_shareLinkInput}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 206:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<li class=\"comment-container cfix ");if(t.s(t.d("user.owner",c,p,1),c,p,0,49,62,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("owner-comment");});c.pop();}if(!t.s(t.d("user.owner",c,p,1),c,p,1,0,0,"")){t.b("user-comment");};t.b("\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("  <a class=\"comment-user-image-link left\" href=\"");t.b(t.v(t.d("user.url",c,p,0)));t.b("\">");t.b("\n" + i);t.b("    <img class=\"comment-user-image js-mini-profile\" data-id=\"");t.b(t.v(t.d("user.id",c,p,0)));t.b("\" src=\"");t.b(t.v(t.d("user.image",c,p,0)));t.b("\">");t.b("\n" + i);t.b("  </a>");t.b("\n" + i);t.b("  <div class=\"comment-text-container left relative\">");t.b("\n" + i);t.b("    <div class=\"comment-user-date-wrap ui-corner cfix\">");t.b("\n" + i);t.b("      <a class=\"user-name-link bold js-mini-profile\" data-id=\"");t.b(t.v(t.d("user.id",c,p,0)));t.b("\" href=\"");t.b(t.v(t.d("user.url",c,p,0)));t.b("\">");t.b(t.v(t.d("user.name",c,p,0)));t.b("</a>");t.b("\n" + i);if(t.s(t.f("replied_to",c,p,1),c,p,0,548,686,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <span class=\"bold\">");if(t.s(t.f("translate",c,p,1),c,p,0,588,658,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("comment_replied_to|replied to <a href=\"");t.b(t.v(t.d("user.url",c,p,0)));t.b("\">");t.b(t.v(t.d("user.name",c,p,0)));t.b("</a>");});c.pop();}t.b("</span>");t.b("\n" + i);});c.pop();}t.b("      <span class=\"comment-date ");if(t.s(t.f("timestamp",c,p,1),c,p,0,748,767,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("js-format-timestamp");});c.pop();}t.b("\" data-timestamp=\"");t.b(t.v(t.f("timestamp",c,p,0)));t.b("\">");t.b(t.v(t.f("posted_on",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <div class=\"comment-text-wrap\"><div class=\"comment-text\">");t.b(t.t(t.f("comment",c,p,0)));t.b("</div></div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <div class=\"comment-actions\">");t.b("\n" + i);if(t.s(t.d("permissions.flag",c,p,1),c,p,0,999,1112,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <a class=\"comment-action comment-spam js-action-spam\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" data-type=\"");t.b(t.v(t.f("type",c,p,0)));t.b("comment\"></a>");t.b("\n" + i);});c.pop();}if(t.s(t.d("permissions.close",c,p,1),c,p,0,1160,1224,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <a class=\"comment-action comment-close js-delete\"></a>");t.b("\n" + i);});c.pop();}t.b("  </div>");t.b("\n" + i);t.b("</li>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<li class=\"comment-container cfix {{#user.owner}}owner-comment{{/user.owner}}{{^user.owner}}user-comment{{/user.owner}}\" data-id=\"{{id}}\">\n  <a class=\"comment-user-image-link left\" href=\"{{user.url}}\">\n    <img class=\"comment-user-image js-mini-profile\" data-id=\"{{user.id}}\" src=\"{{user.image}}\">\n  </a>\n  <div class=\"comment-text-container left relative\">\n    <div class=\"comment-user-date-wrap ui-corner cfix\">\n      <a class=\"user-name-link bold js-mini-profile\" data-id=\"{{user.id}}\" href=\"{{user.url}}\">{{user.name}}</a>\n      {{#replied_to}}\n      <span class=\"bold\">{{#translate}}comment_replied_to|replied to <a href=\"{{user.url}}\">{{user.name}}</a>{{/translate}}</span>\n      {{/replied_to}}\n      <span class=\"comment-date {{#timestamp}}js-format-timestamp{{/timestamp}}\" data-timestamp=\"{{timestamp}}\">{{posted_on}}</span>\n    </div>\n    <div class=\"comment-text-wrap\"><div class=\"comment-text\">{{& comment}}</div></div>\n  </div>\n  <div class=\"comment-actions\">\n    {{#permissions.flag}}\n    <a class=\"comment-action comment-spam js-action-spam\" data-id=\"{{id}}\" data-type=\"{{type}}comment\"></a>\n    {{/permissions.flag}}\n    {{#permissions.close}}\n    <a class=\"comment-action comment-close js-delete\"></a>\n    {{/permissions.close}}\n  </div>\n</li>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 207:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"unverified-modal-content\">");t.b("\n" + i);t.b("  <div class=\"unverified-message\">");t.b("\n" + i);t.b("    ");if(t.s(t.f("translate",c,p,1),c,p,0,92,212,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_unverified_popup_message|Your project is currently not visible publicly because your account<br />is unverified.");});c.pop();}t.b("\n" + i);t.b("  </div>");t.b("\n");t.b("\n" + i);t.b("  <div class=\"verify-warning notice-box\">");t.b("\n" + i);t.b("    <p class=\"verify-warning-body\">");t.b("\n" + i);t.b("      ");if(t.s(t.f("translate",c,p,1),c,p,0,335,460,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_unverified_popup_warning_inbox|Please check your inbox ");if(t.s(t.f("email",c,p,1),c,p,0,408,419,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("(");t.b(t.v(t.f("email",c,p,0)));t.b(")");});c.pop();}t.b(" and verify your email address.");});c.pop();}t.b("<br />");t.b("\n" + i);t.b("      ");if(t.s(t.f("translate",c,p,1),c,p,0,501,582,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_unverified_popup_warning_email|Haven't received a verification email yet?");});c.pop();}t.b("\n" + i);t.b("      <br />");t.b("\n" + i);t.b("      <a href=\"");t.b(t.v(t.f("verification_url",c,p,0)));t.b("\">");if(t.s(t.f("translate",c,p,1),c,p,0,661,707,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_unverified_popup_click_here|Click Here");});c.pop();}t.b("</a>.");t.b("\n" + i);t.b("    </p>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"unverified-modal-content\">\n  <div class=\"unverified-message\">\n    {{#translate}}project_unverified_popup_message|Your project is currently not visible publicly because your account<br />is unverified.{{/translate}}\n  </div>\n\n  <div class=\"verify-warning notice-box\">\n    <p class=\"verify-warning-body\">\n      {{#translate}}project_unverified_popup_warning_inbox|Please check your inbox {{#email}}({{email}}){{/email}} and verify your email address.{{/translate}}<br />\n      {{#translate}}project_unverified_popup_warning_email|Haven't received a verification email yet?{{/translate}}\n      <br />\n      <a href=\"{{verification_url}}\">{{#translate}}project_unverified_popup_click_here|Click Here{{/translate}}</a>.\n    </p>\n  </div>\n</div>", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 209:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<a title=\"");if(t.s(t.f("translate",c,p,1),c,p,0,24,56,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("button_message_user|Message User");});c.pop();}t.b("\" class=\"");t.sub("classes",c,p,i);t.b(" js-action-message-user beicons-pre beicons-pre-mail\" data-contact_name=\"");t.b(t.v(t.f("display_name",c,p,0)));t.b("\" data-contact_id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" unselectable=\"on\">");t.sub("label",c,p,i);t.b("</a>");t.b("\n");return t.fl(); },partials: {}, subs: { "classes": function(c,p,t,i) {},"label": function(c,p,t,i) {} }}, "<a title=\"{{#translate}}button_message_user|Message User{{/translate}}\" class=\"{{$classes}}{{/classes}} js-action-message-user beicons-pre beicons-pre-mail\" data-contact_name=\"{{display_name}}\" data-contact_id=\"{{id}}\" unselectable=\"on\">{{$label}}{{/label}}</a>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 210:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"form/textarea": __webpack_require__(84).template,"form/text": __webpack_require__(73).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"entity-report\">");t.b("\n" + i);t.b("  <form>");t.b("\n" + i);if(t.s(t.f("disclaimer",c,p,1),c,p,0,56,119,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <span class=\"disclaimer-wrap\">");t.b(t.t(t.f("disclaimer",c,p,0)));t.b("</span>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.d("options.0",c,p,1),c,p,0,154,336,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <ul id=\"reason\" class=\"divided-list menu-section\">");t.b("\n" + i);if(t.s(t.f("options",c,p,1),c,p,0,228,309,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <li class=\"divided-item reason\" data-value=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b(t.v(t.f("reason",c,p,0)));t.b("</li>");t.b("\n" + i);});c.pop();}t.b("    </ul>");t.b("\n" + i);});c.pop();}t.b("\n" + i);t.b("    <div class=\"menu-section\">");t.b("\n" + i);if(t.s(t.f("comments",c,p,1),c,p,0,402,421,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<form/textarea0",c,p,""));});c.pop();}t.b("    </div>");t.b("\n");t.b("\n" + i);t.b("    <div class=\"menu-section\">");t.b("\n" + i);if(t.s(t.f("email",c,p,1),c,p,0,494,509,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<form/text1",c,p,""));});c.pop();}t.b("    </div>");t.b("\n" + i);t.b("  </form>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<form/textarea0":{name:"form/textarea", partials: {}, subs: {  }},"<form/text1":{name:"form/text", partials: {}, subs: {  }}}, subs: {  }}, "<div class=\"entity-report\">\n  <form>\n    {{#disclaimer}}\n    <span class=\"disclaimer-wrap\">{{{disclaimer}}}</span>\n    {{/disclaimer}}\n\n    {{#options.0}}\n    <ul id=\"reason\" class=\"divided-list menu-section\">\n      {{#options}}\n      <li class=\"divided-item reason\" data-value=\"{{id}}\">{{reason}}</li>\n      {{/options}}\n    </ul>\n    {{/options.0}}\n\n    <div class=\"menu-section\">\n      {{#comments}}{{> form/textarea}}{{/comments}}\n    </div>\n\n    <div class=\"menu-section\">\n      {{#email}}{{> form/text}}{{/email}}\n    </div>\n  </form>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 211:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_reorderButton": __webpack_require__(145).template,"lib/_editButton": __webpack_require__(89).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"controls-overlay hide-phone hide-tablet\">");t.b("\n" + i);if(t.s(t.f("is_team",c,p,1),c,p,0,68,157,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("is_admin_editable",c,p,1),c,p,0,95,132,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_reorderButton0",c,p,"      "));});c.pop();}});c.pop();}if(!t.s(t.f("is_team",c,p,1),c,p,1,0,0,"")){t.b(t.rp("<lib/_reorderButton1",c,p,"    "));};t.b("  <div class=\"controls-overlay-action controls-overlay-menu js-controls-overlay-menu tooltipi-container\">");t.b("\n" + i);t.b(t.rp("<lib/_editButton2",c,p,"    "));t.b("    <span class=\"js-spin overlay-spinner\"></span>");t.b("\n" + i);t.b("    <ul class=\"tooltipi tooltipi-white controls-overlay-menu-items\">");t.b("\n" + i);if(!t.s(t.f("is_team",c,p,1),c,p,1,0,0,"")){t.b("        <li class=\"controls-overlay-menu-item\">");t.b("\n" + i);t.b("          <a href=\"");t.b(t.v(t.f("edit_url",c,p,0)));t.b("\" class=\"js-project-edit beicons-pre beicons-pre-edit\">");t.b("\n" + i);t.b("            ");if(t.s(t.f("translate",c,p,1),c,p,0,662,687,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_project_edit|Edit");});c.pop();}t.b("\n" + i);t.b("          </a>");t.b("\n" + i);t.b("        </li>");t.b("\n" + i);t.b("        <li class=\"controls-overlay-menu-item\">");t.b("\n" + i);t.b("          <a href=\"#\" class=\"js-project-clone beicons-pre beicons-pre-clone\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("            ");if(t.s(t.f("translate",c,p,1),c,p,0,900,927,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_project_clone|Clone");});c.pop();}t.b("\n" + i);t.b("          </a>");t.b("\n" + i);t.b("        </li>");t.b("\n" + i);if(t.s(t.f("share_url",c,p,1),c,p,0,993,1270,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("          <li class=\"controls-overlay-menu-item\">");t.b("\n" + i);t.b("            <a href=\"");t.b(t.v(t.f("share_url",c,p,0)));t.b("\" class=\"js-project-promote beicons-pre beicons-pre-share\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("              ");if(t.s(t.f("translate",c,p,1),c,p,0,1183,1214,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_project_promote|Promote");});c.pop();}t.b("\n" + i);t.b("            </a>");t.b("\n" + i);t.b("          </li>");t.b("\n" + i);});c.pop();}t.b("        <li class=\"controls-overlay-menu-item\">");t.b("\n" + i);t.b("          <a href=\"#\" class=\"js-project-unpublish beicons-pre beicons-pre-unpublish\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("            ");if(t.s(t.f("translate",c,p,1),c,p,0,1462,1497,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_project_unpublish|Unpublish");});c.pop();}t.b("\n" + i);t.b("          </a>");t.b("\n" + i);t.b("        </li>");t.b("\n" + i);if(t.s(t.f("is_founder",c,p,1),c,p,0,1564,1895,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("          <li class=\"controls-overlay-menu-item\">");t.b("\n" + i);t.b("            <a href=\"#\" class=\"js-project-delete beicons-pre beicons-pre-delete\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\"");if(t.s(t.f("multiple_owners",c,p,1),c,p,0,1732,1760,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" data-multiple-owners=\"true\"");});c.pop();}t.b(">");t.b("\n" + i);t.b("              ");if(t.s(t.f("translate",c,p,1),c,p,0,1810,1839,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_project_delete|Delete");});c.pop();}t.b("\n" + i);t.b("            </a>");t.b("\n" + i);t.b("          </li>");t.b("\n" + i);});c.pop();}if(!t.s(t.f("is_founder",c,p,1),c,p,1,0,0,"")){t.b("          <li class=\"controls-overlay-menu-item\">");t.b("\n" + i);t.b("            <a href=\"#\" class=\"js-project-remove-owner beicons-pre beicons-pre-delete\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("              ");if(t.s(t.f("translate",c,p,1),c,p,0,2118,2153,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_project_remove_owner|Remove");});c.pop();}t.b("\n" + i);t.b("            </a>");t.b("\n" + i);t.b("          </li>");t.b("\n" + i);};};if(t.s(t.f("is_team",c,p,1),c,p,0,2262,2889,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("is_member_editable",c,p,1),c,p,0,2294,2543,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("          <li class=\"controls-overlay-menu-item\">");t.b("\n" + i);t.b("            <a href=\"");t.b(t.v(t.f("edit_url",c,p,0)));t.b("\" class=\"js-project-edit beicons-pre beicons-pre-edit\">");t.b("\n" + i);t.b("              ");if(t.s(t.f("translate",c,p,1),c,p,0,2462,2487,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_project_edit|Edit");});c.pop();}t.b("\n" + i);t.b("            </a>");t.b("\n" + i);t.b("          </li>");t.b("\n" + i);});c.pop();}if(t.s(t.f("is_admin_editable",c,p,1),c,p,0,2597,2860,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("          <li class=\"controls-overlay-menu-item\">");t.b("\n" + i);t.b("            <a href=\"#\" class=\"js-project-remove beicons-pre beicons-pre-delete\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("              ");if(t.s(t.f("translate",c,p,1),c,p,0,2775,2804,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_project_remove|Remove");});c.pop();}t.b("\n" + i);t.b("            </a>");t.b("\n" + i);t.b("          </li>");t.b("\n" + i);});c.pop();}});c.pop();}t.b("    </ul>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<lib/_reorderButton0":{name:"lib/_reorderButton", partials: {}, subs: {  }},"<lib/_reorderButton1":{name:"lib/_reorderButton", partials: {}, subs: {  }},"<lib/_editButton2":{name:"lib/_editButton", partials: {}, subs: {  }}}, subs: {  }}, "<div class=\"controls-overlay hide-phone hide-tablet\">\n  {{#is_team}}\n    {{#is_admin_editable}}\n      {{> lib/_reorderButton }}\n    {{/is_admin_editable}}\n  {{/is_team}}\n  {{^is_team}}\n    {{> lib/_reorderButton }}\n  {{/is_team}}\n  <div class=\"controls-overlay-action controls-overlay-menu js-controls-overlay-menu tooltipi-container\">\n    {{> lib/_editButton }}\n    <span class=\"js-spin overlay-spinner\"></span>\n    <ul class=\"tooltipi tooltipi-white controls-overlay-menu-items\">\n      {{^is_team}}\n        <li class=\"controls-overlay-menu-item\">\n          <a href=\"{{edit_url}}\" class=\"js-project-edit beicons-pre beicons-pre-edit\">\n            {{#translate}}profile_project_edit|Edit{{/translate}}\n          </a>\n        </li>\n        <li class=\"controls-overlay-menu-item\">\n          <a href=\"#\" class=\"js-project-clone beicons-pre beicons-pre-clone\" data-id=\"{{id}}\">\n            {{#translate}}profile_project_clone|Clone{{/translate}}\n          </a>\n        </li>\n        {{#share_url}}\n          <li class=\"controls-overlay-menu-item\">\n            <a href=\"{{share_url}}\" class=\"js-project-promote beicons-pre beicons-pre-share\" data-id=\"{{id}}\">\n              {{#translate}}profile_project_promote|Promote{{/translate}}\n            </a>\n          </li>\n        {{/share_url}}\n        <li class=\"controls-overlay-menu-item\">\n          <a href=\"#\" class=\"js-project-unpublish beicons-pre beicons-pre-unpublish\" data-id=\"{{id}}\">\n            {{#translate}}profile_project_unpublish|Unpublish{{/translate}}\n          </a>\n        </li>\n        {{#is_founder}}\n          <li class=\"controls-overlay-menu-item\">\n            <a href=\"#\" class=\"js-project-delete beicons-pre beicons-pre-delete\" data-id=\"{{id}}\"{{#multiple_owners}} data-multiple-owners=\"true\"{{/multiple_owners}}>\n              {{#translate}}profile_project_delete|Delete{{/translate}}\n            </a>\n          </li>\n        {{/is_founder}}\n        {{^is_founder}}\n          <li class=\"controls-overlay-menu-item\">\n            <a href=\"#\" class=\"js-project-remove-owner beicons-pre beicons-pre-delete\" data-id=\"{{id}}\">\n              {{#translate}}profile_project_remove_owner|Remove{{/translate}}\n            </a>\n          </li>\n        {{/is_founder}}\n      {{/is_team}}\n      {{#is_team}}\n        {{#is_member_editable}}\n          <li class=\"controls-overlay-menu-item\">\n            <a href=\"{{edit_url}}\" class=\"js-project-edit beicons-pre beicons-pre-edit\">\n              {{#translate}}profile_project_edit|Edit{{/translate}}\n            </a>\n          </li>\n        {{/is_member_editable}}\n        {{#is_admin_editable}}\n          <li class=\"controls-overlay-menu-item\">\n            <a href=\"#\" class=\"js-project-remove beicons-pre beicons-pre-delete\" data-id=\"{{id}}\">\n              {{#translate}}profile_project_remove|Remove{{/translate}}\n            </a>\n          </li>\n        {{/is_admin_editable}}\n      {{/is_team}}\n    </ul>\n  </div>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 212:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<form>");t.b("\n" + i);t.b("  <div class=\"form-item form-item-text form-item-conjoined left\">");t.b("\n" + i);t.b("    <input type=\"text\" placeholder=\"");if(t.s(t.f("translate",c,p,1),c,p,0,123,188,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_create_new_collection_placeholder|Create a New Collection");});c.pop();}t.b("\" name=\"collection\" class=\"form-text\">");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <div class=\"form-item form-item-a form-item-conjoined left\">");t.b("\n" + i);t.b("    <a class=\"form-button form-submit form-button-light-and-grey\">");if(t.s(t.f("translate",c,p,1),c,p,0,393,419,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_add_collection|Add");});c.pop();}t.b("</a>");t.b("\n" + i);t.b("  </div>");t.b("\n");t.b("\n" + i);t.b("  <ul id=\"collection_ids\" class=\"divided-list");if(!t.s(t.f("collections",c,p,1),c,p,1,0,0,"")){t.b(" empty");};t.b("\">");t.b("\n" + i);if(t.s(t.f("collections",c,p,1),c,p,0,554,632,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <li class=\"divided-item collection\" data-key=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b(t.v(t.f("title",c,p,0)));t.b("</li>");t.b("\n" + i);});c.pop();}t.b("  </ul>");t.b("\n" + i);t.b("</form>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<form>\n  <div class=\"form-item form-item-text form-item-conjoined left\">\n    <input type=\"text\" placeholder=\"{{#translate}}project_create_new_collection_placeholder|Create a New Collection{{/translate}}\" name=\"collection\" class=\"form-text\">\n  </div>\n  <div class=\"form-item form-item-a form-item-conjoined left\">\n    <a class=\"form-button form-submit form-button-light-and-grey\">{{#translate}}project_add_collection|Add{{/translate}}</a>\n  </div>\n\n  <ul id=\"collection_ids\" class=\"divided-list{{^collections}} empty{{/collections}}\">\n    {{#collections}}\n    <li class=\"divided-item collection\" data-key=\"{{id}}\">{{title}}</li>\n    {{/collections}}\n  </ul>\n</form>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 213:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"mature-message login-modal\">");t.b("\n" + i);t.b("  ");if(t.s(t.f("translate",c,p,1),c,p,0,57,193,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_sign_in_mature|You must log in or sign up for Behance<span class=\"hide-phone\"> to view projects containing adult content.</span>");});c.pop();}t.b("\n" + i);if(t.s(t.f("login",c,p,1),c,p,0,220,231,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<button0",c,p,""));});c.pop();}t.b("</div>");t.b("\n");t.b("\n" + i);t.b("<div class=\"popup-buttons login-button\">");t.b("\n" + i);t.b("  ");if(t.s(t.f("translate",c,p,1),c,p,0,307,463,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_no_account_signup|Don't Have an Account? <a class=\"js-adobeid-signup signup\" data-signup-from=\"Mature_Content_SignUpBehance\">Sign up for Behance</a>");});c.pop();}t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<button0":{name:"button", partials: {}, subs: {  }}}, subs: {  }}, "<div class=\"mature-message login-modal\">\n  {{#translate}}project_sign_in_mature|You must log in or sign up for Behance<span class=\"hide-phone\"> to view projects containing adult content.</span>{{/translate}}\n  {{#login}}{{>button}}{{/login}}\n</div>\n\n<div class=\"popup-buttons login-button\">\n  {{#translate}}project_no_account_signup|Don't Have an Account? <a class=\"js-adobeid-signup signup\" data-signup-from=\"Mature_Content_SignUpBehance\">Sign up for Behance</a>{{/translate}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(197);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(59)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../css-loader/index.js!./../../sass-loader/index.js?includePaths[]=/home/bebuilder/net_build2/_export/tmp_build/node_modules/node-bourbon/node_modules/bourbon/app/assets/stylesheets!./spinner.scss", function() {
			var newContent = require("!!./../../css-loader/index.js!./../../sass-loader/index.js?includePaths[]=/home/bebuilder/net_build2/_export/tmp_build/node_modules/node-bourbon/node_modules/bourbon/app/assets/stylesheets!./spinner.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 215:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(198);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(59)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./jquery.fancybox.css", function() {
			var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./jquery.fancybox.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 216:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(34) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t) {
    "use strict";
    var e = /(?:^|[^\w])@(\w+)/;
    return t.widget("be.automention", t.be.autosuggest, {
        _create: function() {
            this._super(), this._on(this.element, {
                mouseup: this.check,
                input: this.check,
                keyup: this.check,
                blur: this._clear
            }), this.menu.element.addClass("mention-menu");
        },
        _mention: {
            value: "",
            start: 0,
            end: 0
        },
        _last: null,
        _value: function(t) {
            if (!t) return this._mention.value;
            var e = this._super(), n = e.indexOf("@", this._mention.start) + 1;
            t = e.substring(0, n) + t, " " !== e.charAt(this._mention.end) && (t += " "), t += e.substring(this._mention.end), 
            this._super(t), this.element.trigger("input");
        },
        _clear: function() {
            this._last = null;
        },
        check: function(t) {
            if (this.element.is(document.activeElement)) {
                var n, i, s, u = document.activeElement.value, a = document.activeElement.selectionStart;
                a && u && (i = u.lastIndexOf(" ", a - 1), s = u.indexOf(" ", a), s = ~s ? s : 1 / 0, 
                n = u.substring(i, s), n = e.exec(n), n = n && n[1], this._last !== n && (this._mention.value = n || "", 
                this._mention.start = i, this._mention.end = s, this.search(null, t), this._trigger("value", t, n)), 
                this._last = n);
            }
        }
    }), t.extend(t.be.automention, {
        usernameMatch: e
    }), t.be.automention;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 217:
/***/ function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;"use strict";

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

!function(e) {
    if ("object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = e(); else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, 
        t.hoverintent = e();
    }
}(function() {
    return function e(t, n, o) {
        function r(u, f) {
            if (!n[u]) {
                if (!t[u]) {
                    var s = "function" == typeof require && require;
                    if (!f && s) return require(u, !0);
                    if (i) return i(u, !0);
                    var c = new Error("Cannot find module '" + u + "'");
                    throw c.code = "MODULE_NOT_FOUND", c;
                }
                var l = n[u] = {
                    exports: {}
                };
                t[u][0].call(l.exports, function(e) {
                    var n = t[u][1][e];
                    return r(n ? n : e);
                }, l, l.exports, e, t, n, o);
            }
            return n[u].exports;
        }
        for (var i = "function" == typeof require && require, u = 0; u < o.length; u++) r(o[u]);
        return r;
    }({
        1: [ function(e, t, n) {
            !function(n) {
                var o = e("xtend"), r = function e(t, n, r) {
                    function e(e, t) {
                        return p && (p = clearTimeout(p)), d = 0, r.call(e, t);
                    }
                    function i(e) {
                        c = e.clientX, l = e.clientY;
                    }
                    function u(e, t) {
                        return p && (p = clearTimeout(p)), Math.abs(v - c) + Math.abs(a - l) < y.sensitivity ? (d = 1, 
                        n.call(e, t)) : (v = c, a = l, void (p = setTimeout(function() {
                            u(e, t);
                        }, y.interval)));
                    }
                    function f(e) {
                        return p && (p = clearTimeout(p)), t.removeEventListener("mousemove", i, !1), 1 !== d && (v = e.clientX, 
                        a = e.clientY, t.addEventListener("mousemove", i, !1), p = setTimeout(function() {
                            u(t, e);
                        }, y.interval)), this;
                    }
                    function s(n) {
                        return p && (p = clearTimeout(p)), t.removeEventListener("mousemove", i, !1), 1 === d && (p = setTimeout(function() {
                            e(t, n);
                        }, y.timeout)), this;
                    }
                    var c, l, v, a, m = {}, d = 0, p = 0, y = {
                        sensitivity: 7,
                        interval: 100,
                        timeout: 0
                    };
                    return m.options = function(e) {
                        return y = o({}, y, e), m;
                    }, m.remove = function() {
                        t && (t.removeEventListener("mouseover", f, !1), t.removeEventListener("mouseout", s, !1));
                    }, t && (t.addEventListener("mouseover", f, !1), t.addEventListener("mouseout", s, !1)), 
                    m;
                };
                n.hoverintent = r, "undefined" != typeof t && t.exports && (t.exports = r);
            }(this);
        }, {
            xtend: 2
        } ],
        2: [ function(e, t, n) {
            function o() {
                for (var e = {}, t = 0; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) r.call(n, o) && (e[o] = n[o]);
                }
                return e;
            }
            t.exports = o;
            var r = Object.prototype.hasOwnProperty;
        }, {} ]
    }, {}, [ 1 ])(1);
});

/***/ },

/***/ 218:
/***/ function(module, exports) {

"use strict";
"use strict";

function idleTimer(e) {
    function t(e) {
        window[e]("load", i), document[e]("mousemove", i), document[e]("scroll", i), document[e]("keypress", i);
    }
    function i() {
        d || (d = !0, r()), clearTimeout(c), c = setTimeout(n, l);
    }
    function n() {
        d && (d = !1, u());
    }
    function o() {
        clearTimeout(c), t("removeEventListener");
    }
    e = e || {};
    var c, u = e.callback || function() {}, r = e.activeCallback || function() {}, l = e.idleTime || 6e4, d = !0;
    return t("addEventListener"), i(), {
        activate: i,
        destroy: o,
        idle: n
    };
}

module.exports = idleTimer;

/***/ },

/***/ 219:
/***/ function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

!function(t) {
    function e(t, n) {
        if (t = t ? t : "", n = n || {}, t instanceof e) return t;
        if (!(this instanceof e)) return new e(t, n);
        var a = r(t);
        this._originalInput = t, this._r = a.r, this._g = a.g, this._b = a.b, this._a = a.a, 
        this._roundA = $(100 * this._a) / 100, this._format = n.format || a.format, this._gradientType = n.gradientType, 
        this._r < 1 && (this._r = $(this._r)), this._g < 1 && (this._g = $(this._g)), this._b < 1 && (this._b = $(this._b)), 
        this._ok = a.ok, this._tc_id = P++;
    }
    function r(t) {
        var e = {
            r: 0,
            g: 0,
            b: 0
        }, r = 1, a = null, o = null, f = null, h = !1, l = !1;
        return "string" == typeof t && (t = E(t)), "object" == ("undefined" == typeof t ? "undefined" : _typeof(t)) && (z(t.r) && z(t.g) && z(t.b) ? (e = n(t.r, t.g, t.b), 
        h = !0, l = "%" === String(t.r).substr(-1) ? "prgb" : "rgb") : z(t.h) && z(t.s) && z(t.v) ? (a = I(t.s), 
        o = I(t.v), e = s(t.h, a, o), h = !0, l = "hsv") : z(t.h) && z(t.s) && z(t.l) && (a = I(t.s), 
        f = I(t.l), e = i(t.h, a, f), h = !0, l = "hsl"), t.hasOwnProperty("a") && (r = t.a)), 
        r = S(r), {
            ok: h,
            format: t.format || l,
            r: D(255, U(e.r, 0)),
            g: D(255, U(e.g, 0)),
            b: D(255, U(e.b, 0)),
            a: r
        };
    }
    function n(t, e, r) {
        return {
            r: 255 * H(t, 255),
            g: 255 * H(e, 255),
            b: 255 * H(r, 255)
        };
    }
    function a(t, e, r) {
        t = H(t, 255), e = H(e, 255), r = H(r, 255);
        var n, a, i = U(t, e, r), o = D(t, e, r), s = (i + o) / 2;
        if (i == o) n = a = 0; else {
            var f = i - o;
            switch (a = s > .5 ? f / (2 - i - o) : f / (i + o), i) {
              case t:
                n = (e - r) / f + (e < r ? 6 : 0);
                break;

              case e:
                n = (r - t) / f + 2;
                break;

              case r:
                n = (t - e) / f + 4;
            }
            n /= 6;
        }
        return {
            h: n,
            s: a,
            l: s
        };
    }
    function i(t, e, r) {
        function n(t, e, r) {
            return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t;
        }
        var a, i, o;
        if (t = H(t, 360), e = H(e, 100), r = H(r, 100), 0 === e) a = i = o = r; else {
            var s = r < .5 ? r * (1 + e) : r + e - r * e, f = 2 * r - s;
            a = n(f, s, t + 1 / 3), i = n(f, s, t), o = n(f, s, t - 1 / 3);
        }
        return {
            r: 255 * a,
            g: 255 * i,
            b: 255 * o
        };
    }
    function o(t, e, r) {
        t = H(t, 255), e = H(e, 255), r = H(r, 255);
        var n, a, i = U(t, e, r), o = D(t, e, r), s = i, f = i - o;
        if (a = 0 === i ? 0 : f / i, i == o) n = 0; else {
            switch (i) {
              case t:
                n = (e - r) / f + (e < r ? 6 : 0);
                break;

              case e:
                n = (r - t) / f + 2;
                break;

              case r:
                n = (t - e) / f + 4;
            }
            n /= 6;
        }
        return {
            h: n,
            s: a,
            v: s
        };
    }
    function s(e, r, n) {
        e = 6 * H(e, 360), r = H(r, 100), n = H(n, 100);
        var a = t.floor(e), i = e - a, o = n * (1 - r), s = n * (1 - i * r), f = n * (1 - (1 - i) * r), h = a % 6, l = [ n, s, o, o, f, n ][h], u = [ f, n, n, s, o, o ][h], c = [ o, o, f, n, n, s ][h];
        return {
            r: 255 * l,
            g: 255 * u,
            b: 255 * c
        };
    }
    function f(t, e, r, n) {
        var a = [ M($(t).toString(16)), M($(e).toString(16)), M($(r).toString(16)) ];
        return n && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
    }
    function h(t, e, r, n, a) {
        var i = [ M($(t).toString(16)), M($(e).toString(16)), M($(r).toString(16)), M(L(n)) ];
        return a && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) && i[3].charAt(0) == i[3].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("");
    }
    function l(t, e, r, n) {
        var a = [ M(L(n)), M($(t).toString(16)), M($(e).toString(16)), M($(r).toString(16)) ];
        return a.join("");
    }
    function u(t, r) {
        r = 0 === r ? 0 : r || 10;
        var n = e(t).toHsl();
        return n.s -= r / 100, n.s = R(n.s), e(n);
    }
    function c(t, r) {
        r = 0 === r ? 0 : r || 10;
        var n = e(t).toHsl();
        return n.s += r / 100, n.s = R(n.s), e(n);
    }
    function g(t) {
        return e(t).desaturate(100);
    }
    function d(t, r) {
        r = 0 === r ? 0 : r || 10;
        var n = e(t).toHsl();
        return n.l += r / 100, n.l = R(n.l), e(n);
    }
    function b(t, r) {
        r = 0 === r ? 0 : r || 10;
        var n = e(t).toRgb();
        return n.r = U(0, D(255, n.r - $(255 * -(r / 100)))), n.g = U(0, D(255, n.g - $(255 * -(r / 100)))), 
        n.b = U(0, D(255, n.b - $(255 * -(r / 100)))), e(n);
    }
    function p(t, r) {
        r = 0 === r ? 0 : r || 10;
        var n = e(t).toHsl();
        return n.l -= r / 100, n.l = R(n.l), e(n);
    }
    function _(t, r) {
        var n = e(t).toHsl(), a = (n.h + r) % 360;
        return n.h = a < 0 ? 360 + a : a, e(n);
    }
    function m(t) {
        var r = e(t).toHsl();
        return r.h = (r.h + 180) % 360, e(r);
    }
    function v(t) {
        var r = e(t).toHsl(), n = r.h;
        return [ e(t), e({
            h: (n + 120) % 360,
            s: r.s,
            l: r.l
        }), e({
            h: (n + 240) % 360,
            s: r.s,
            l: r.l
        }) ];
    }
    function y(t) {
        var r = e(t).toHsl(), n = r.h;
        return [ e(t), e({
            h: (n + 90) % 360,
            s: r.s,
            l: r.l
        }), e({
            h: (n + 180) % 360,
            s: r.s,
            l: r.l
        }), e({
            h: (n + 270) % 360,
            s: r.s,
            l: r.l
        }) ];
    }
    function A(t) {
        var r = e(t).toHsl(), n = r.h;
        return [ e(t), e({
            h: (n + 72) % 360,
            s: r.s,
            l: r.l
        }), e({
            h: (n + 216) % 360,
            s: r.s,
            l: r.l
        }) ];
    }
    function x(t, r, n) {
        r = r || 6, n = n || 30;
        var a = e(t).toHsl(), i = 360 / n, o = [ e(t) ];
        for (a.h = (a.h - (i * r >> 1) + 720) % 360; --r; ) a.h = (a.h + i) % 360, o.push(e(a));
        return o;
    }
    function k(t, r) {
        r = r || 6;
        for (var n = e(t).toHsv(), a = n.h, i = n.s, o = n.v, s = [], f = 1 / r; r--; ) s.push(e({
            h: a,
            s: i,
            v: o
        })), o = (o + f) % 1;
        return s;
    }
    function w(t) {
        var e = {};
        for (var r in t) t.hasOwnProperty(r) && (e[t[r]] = r);
        return e;
    }
    function S(t) {
        return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t;
    }
    function H(e, r) {
        C(e) && (e = "100%");
        var n = q(e);
        return e = D(r, U(0, parseFloat(e))), n && (e = parseInt(e * r, 10) / 100), t.abs(e - r) < 1e-6 ? 1 : e % r / parseFloat(r);
    }
    function R(t) {
        return D(1, U(0, t));
    }
    function F(t) {
        return parseInt(t, 16);
    }
    function C(t) {
        return "string" == typeof t && t.indexOf(".") != -1 && 1 === parseFloat(t);
    }
    function q(t) {
        return "string" == typeof t && t.indexOf("%") != -1;
    }
    function M(t) {
        return 1 == t.length ? "0" + t : "" + t;
    }
    function I(t) {
        return t <= 1 && (t = 100 * t + "%"), t;
    }
    function L(e) {
        return t.round(255 * parseFloat(e)).toString(16);
    }
    function N(t) {
        return F(t) / 255;
    }
    function z(t) {
        return !!X.CSS_UNIT.exec(t);
    }
    function E(t) {
        t = t.replace(j, "").replace(O, "").toLowerCase();
        var e = !1;
        if (G[t]) t = G[t], e = !0; else if ("transparent" == t) return {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            format: "name"
        };
        var r;
        return (r = X.rgb.exec(t)) ? {
            r: r[1],
            g: r[2],
            b: r[3]
        } : (r = X.rgba.exec(t)) ? {
            r: r[1],
            g: r[2],
            b: r[3],
            a: r[4]
        } : (r = X.hsl.exec(t)) ? {
            h: r[1],
            s: r[2],
            l: r[3]
        } : (r = X.hsla.exec(t)) ? {
            h: r[1],
            s: r[2],
            l: r[3],
            a: r[4]
        } : (r = X.hsv.exec(t)) ? {
            h: r[1],
            s: r[2],
            v: r[3]
        } : (r = X.hsva.exec(t)) ? {
            h: r[1],
            s: r[2],
            v: r[3],
            a: r[4]
        } : (r = X.hex8.exec(t)) ? {
            r: F(r[1]),
            g: F(r[2]),
            b: F(r[3]),
            a: N(r[4]),
            format: e ? "name" : "hex8"
        } : (r = X.hex6.exec(t)) ? {
            r: F(r[1]),
            g: F(r[2]),
            b: F(r[3]),
            format: e ? "name" : "hex"
        } : (r = X.hex4.exec(t)) ? {
            r: F(r[1] + "" + r[1]),
            g: F(r[2] + "" + r[2]),
            b: F(r[3] + "" + r[3]),
            a: N(r[4] + "" + r[4]),
            format: e ? "name" : "hex8"
        } : !!(r = X.hex3.exec(t)) && {
            r: F(r[1] + "" + r[1]),
            g: F(r[2] + "" + r[2]),
            b: F(r[3] + "" + r[3]),
            format: e ? "name" : "hex"
        };
    }
    function T(t) {
        var e, r;
        return t = t || {
            level: "AA",
            size: "small"
        }, e = (t.level || "AA").toUpperCase(), r = (t.size || "small").toLowerCase(), "AA" !== e && "AAA" !== e && (e = "AA"), 
        "small" !== r && "large" !== r && (r = "small"), {
            level: e,
            size: r
        };
    }
    var j = /^\s+/, O = /\s+$/, P = 0, $ = t.round, D = t.min, U = t.max, B = t.random;
    e.prototype = {
        isDark: function() {
            return this.getBrightness() < 128;
        },
        isLight: function() {
            return !this.isDark();
        },
        isValid: function() {
            return this._ok;
        },
        getOriginalInput: function() {
            return this._originalInput;
        },
        getFormat: function() {
            return this._format;
        },
        getAlpha: function() {
            return this._a;
        },
        getBrightness: function() {
            var t = this.toRgb();
            return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3;
        },
        getLuminance: function() {
            var e, r, n, a, i, o, s = this.toRgb();
            return e = s.r / 255, r = s.g / 255, n = s.b / 255, a = e <= .03928 ? e / 12.92 : t.pow((e + .055) / 1.055, 2.4), 
            i = r <= .03928 ? r / 12.92 : t.pow((r + .055) / 1.055, 2.4), o = n <= .03928 ? n / 12.92 : t.pow((n + .055) / 1.055, 2.4), 
            .2126 * a + .7152 * i + .0722 * o;
        },
        setAlpha: function(t) {
            return this._a = S(t), this._roundA = $(100 * this._a) / 100, this;
        },
        toHsv: function() {
            var t = o(this._r, this._g, this._b);
            return {
                h: 360 * t.h,
                s: t.s,
                v: t.v,
                a: this._a
            };
        },
        toHsvString: function() {
            var t = o(this._r, this._g, this._b), e = $(360 * t.h), r = $(100 * t.s), n = $(100 * t.v);
            return 1 == this._a ? "hsv(" + e + ", " + r + "%, " + n + "%)" : "hsva(" + e + ", " + r + "%, " + n + "%, " + this._roundA + ")";
        },
        toHsl: function() {
            var t = a(this._r, this._g, this._b);
            return {
                h: 360 * t.h,
                s: t.s,
                l: t.l,
                a: this._a
            };
        },
        toHslString: function() {
            var t = a(this._r, this._g, this._b), e = $(360 * t.h), r = $(100 * t.s), n = $(100 * t.l);
            return 1 == this._a ? "hsl(" + e + ", " + r + "%, " + n + "%)" : "hsla(" + e + ", " + r + "%, " + n + "%, " + this._roundA + ")";
        },
        toHex: function(t) {
            return f(this._r, this._g, this._b, t);
        },
        toHexString: function(t) {
            return "#" + this.toHex(t);
        },
        toHex8: function(t) {
            return h(this._r, this._g, this._b, this._a, t);
        },
        toHex8String: function(t) {
            return "#" + this.toHex8(t);
        },
        toRgb: function() {
            return {
                r: $(this._r),
                g: $(this._g),
                b: $(this._b),
                a: this._a
            };
        },
        toRgbString: function() {
            return 1 == this._a ? "rgb(" + $(this._r) + ", " + $(this._g) + ", " + $(this._b) + ")" : "rgba(" + $(this._r) + ", " + $(this._g) + ", " + $(this._b) + ", " + this._roundA + ")";
        },
        toPercentageRgb: function() {
            return {
                r: $(100 * H(this._r, 255)) + "%",
                g: $(100 * H(this._g, 255)) + "%",
                b: $(100 * H(this._b, 255)) + "%",
                a: this._a
            };
        },
        toPercentageRgbString: function() {
            return 1 == this._a ? "rgb(" + $(100 * H(this._r, 255)) + "%, " + $(100 * H(this._g, 255)) + "%, " + $(100 * H(this._b, 255)) + "%)" : "rgba(" + $(100 * H(this._r, 255)) + "%, " + $(100 * H(this._g, 255)) + "%, " + $(100 * H(this._b, 255)) + "%, " + this._roundA + ")";
        },
        toName: function() {
            return 0 === this._a ? "transparent" : !(this._a < 1) && (V[f(this._r, this._g, this._b, !0)] || !1);
        },
        toFilter: function(t) {
            var r = "#" + l(this._r, this._g, this._b, this._a), n = r, a = this._gradientType ? "GradientType = 1, " : "";
            if (t) {
                var i = e(t);
                n = "#" + l(i._r, i._g, i._b, i._a);
            }
            return "progid:DXImageTransform.Microsoft.gradient(" + a + "startColorstr=" + r + ",endColorstr=" + n + ")";
        },
        toString: function(t) {
            var e = !!t;
            t = t || this._format;
            var r = !1, n = this._a < 1 && this._a >= 0, a = !e && n && ("hex" === t || "hex6" === t || "hex3" === t || "hex4" === t || "hex8" === t || "name" === t);
            return a ? "name" === t && 0 === this._a ? this.toName() : this.toRgbString() : ("rgb" === t && (r = this.toRgbString()), 
            "prgb" === t && (r = this.toPercentageRgbString()), "hex" !== t && "hex6" !== t || (r = this.toHexString()), 
            "hex3" === t && (r = this.toHexString(!0)), "hex4" === t && (r = this.toHex8String(!0)), 
            "hex8" === t && (r = this.toHex8String()), "name" === t && (r = this.toName()), 
            "hsl" === t && (r = this.toHslString()), "hsv" === t && (r = this.toHsvString()), 
            r || this.toHexString());
        },
        clone: function() {
            return e(this.toString());
        },
        _applyModification: function(t, e) {
            var r = t.apply(null, [ this ].concat([].slice.call(e)));
            return this._r = r._r, this._g = r._g, this._b = r._b, this.setAlpha(r._a), this;
        },
        lighten: function() {
            return this._applyModification(d, arguments);
        },
        brighten: function() {
            return this._applyModification(b, arguments);
        },
        darken: function() {
            return this._applyModification(p, arguments);
        },
        desaturate: function() {
            return this._applyModification(u, arguments);
        },
        saturate: function() {
            return this._applyModification(c, arguments);
        },
        greyscale: function() {
            return this._applyModification(g, arguments);
        },
        spin: function() {
            return this._applyModification(_, arguments);
        },
        _applyCombination: function(t, e) {
            return t.apply(null, [ this ].concat([].slice.call(e)));
        },
        analogous: function() {
            return this._applyCombination(x, arguments);
        },
        complement: function() {
            return this._applyCombination(m, arguments);
        },
        monochromatic: function() {
            return this._applyCombination(k, arguments);
        },
        splitcomplement: function() {
            return this._applyCombination(A, arguments);
        },
        triad: function() {
            return this._applyCombination(v, arguments);
        },
        tetrad: function() {
            return this._applyCombination(y, arguments);
        }
    }, e.fromRatio = function(t, r) {
        if ("object" == ("undefined" == typeof t ? "undefined" : _typeof(t))) {
            var n = {};
            for (var a in t) t.hasOwnProperty(a) && ("a" === a ? n[a] = t[a] : n[a] = I(t[a]));
            t = n;
        }
        return e(t, r);
    }, e.equals = function(t, r) {
        return !(!t || !r) && e(t).toRgbString() == e(r).toRgbString();
    }, e.random = function() {
        return e.fromRatio({
            r: B(),
            g: B(),
            b: B()
        });
    }, e.mix = function(t, r, n) {
        n = 0 === n ? 0 : n || 50;
        var a = e(t).toRgb(), i = e(r).toRgb(), o = n / 100, s = {
            r: (i.r - a.r) * o + a.r,
            g: (i.g - a.g) * o + a.g,
            b: (i.b - a.b) * o + a.b,
            a: (i.a - a.a) * o + a.a
        };
        return e(s);
    }, e.readability = function(r, n) {
        var a = e(r), i = e(n);
        return (t.max(a.getLuminance(), i.getLuminance()) + .05) / (t.min(a.getLuminance(), i.getLuminance()) + .05);
    }, e.isReadable = function(t, r, n) {
        var a, i, o = e.readability(t, r);
        switch (i = !1, a = T(n), a.level + a.size) {
          case "AAsmall":
          case "AAAlarge":
            i = o >= 4.5;
            break;

          case "AAlarge":
            i = o >= 3;
            break;

          case "AAAsmall":
            i = o >= 7;
        }
        return i;
    }, e.mostReadable = function(t, r, n) {
        var a, i, o, s, f = null, h = 0;
        n = n || {}, i = n.includeFallbackColors, o = n.level, s = n.size;
        for (var l = 0; l < r.length; l++) a = e.readability(t, r[l]), a > h && (h = a, 
        f = e(r[l]));
        return e.isReadable(t, f, {
            level: o,
            size: s
        }) || !i ? f : (n.includeFallbackColors = !1, e.mostReadable(t, [ "#fff", "#000" ], n));
    };
    var G = e.names = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "0ff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000",
        blanchedalmond: "ffebcd",
        blue: "00f",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        burntsienna: "ea7e5d",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "0ff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkgrey: "a9a9a9",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkslategrey: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dimgrey: "696969",
        dodgerblue: "1e90ff",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "f0f",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        grey: "808080",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgray: "d3d3d3",
        lightgreen: "90ee90",
        lightgrey: "d3d3d3",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslategray: "789",
        lightslategrey: "789",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "0f0",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "f0f",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370db",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "db7093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        rebeccapurple: "663399",
        red: "f00",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        slategrey: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        wheat: "f5deb3",
        white: "fff",
        whitesmoke: "f5f5f5",
        yellow: "ff0",
        yellowgreen: "9acd32"
    }, V = e.hexNames = w(G), X = function() {
        var t = "[-\\+]?\\d+%?", e = "[-\\+]?\\d*\\.\\d+%?", r = "(?:" + e + ")|(?:" + t + ")", n = "[\\s|\\(]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")\\s*\\)?", a = "[\\s|\\(]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")\\s*\\)?";
        return {
            CSS_UNIT: new RegExp(r),
            rgb: new RegExp("rgb" + n),
            rgba: new RegExp("rgba" + a),
            hsl: new RegExp("hsl" + n),
            hsla: new RegExp("hsla" + a),
            hsv: new RegExp("hsv" + n),
            hsva: new RegExp("hsva" + a),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        };
    }();
    "undefined" != typeof module && module.exports ? module.exports = e :  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return e;
    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : window.tinycolor = e;
}(Math);

/***/ },

/***/ 220:
/***/ function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

!function(e, t) {
    "object" === ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : e.touchwipe = t();
}(void 0, function() {
    function e(e, t) {
        return "undefined" != typeof e ? e : t;
    }
    function t(t, n) {
        function o() {
            t.removeEventListener("touchmove", i), f = null, c = !1;
        }
        function i(e) {
            if (r.preventDefaultEvents && e.preventDefault(), c) {
                var t = e.touches[0].pageX, n = e.touches[0].pageY, i = f - t, u = p - n;
                Math.abs(i) >= r.min_move_x ? (o(), i > 0 ? r.wipeLeft(e) : r.wipeRight(e)) : Math.abs(u) >= r.min_move_y && (o(), 
                u > 0 ? r.wipeDown(e) : r.wipeUp(e));
            }
        }
        function u(e) {
            1 === e.touches.length && (f = e.touches[0].pageX, p = e.touches[0].pageY, c = !0, 
            t.addEventListener("touchmove", i));
        }
        n = n || {};
        var f, p, r = {
            min_move_x: e(n.min_move_x, 20),
            min_move_y: e(n.min_move_y, 20),
            wipeLeft: n.wipeLeft || function() {},
            wipeRight: n.wipeRight || function() {},
            wipeUp: n.wipeUp || function() {},
            wipeDown: n.wipeDown || function() {},
            preventDefaultEvents: e(n.preventDefaultEvents, !0)
        }, c = !1;
        return t.addEventListener("touchstart", u), {
            unbind: function() {
                t.removeEventListener("touchstart", u);
            }
        };
    }
    return t;
});

/***/ },

/***/ 221:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t;
    };
}();

__webpack_require__(115);

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _idleTimer = __webpack_require__(218), _idleTimer2 = _interopRequireDefault(_idleTimer), _tinycolor = __webpack_require__(219), _tinycolor2 = _interopRequireDefault(_tinycolor), _vanillaTouchwipe = __webpack_require__(220), _vanillaTouchwipe2 = _interopRequireDefault(_vanillaTouchwipe), _templates = __webpack_require__(226), _onImgLoad = __webpack_require__(223), _zoomable = __webpack_require__(224), ESCAPE_KEYCODE = 27, LEFT_ARROW_KEYCODE = 37, RIGHT_ARROW_KEYCODE = 39, EXTRAS_HIDDEN_CLASS = "extras-hidden", CONTENT_CLASS = "lightbox-content", ENABLED_CLASS = "lightbox-enabled", ZOOMED_CLASS = "lightbox-zoomed", HIDDEN_CLASS = "hidden", OFFSCREEN_CLASS = "offscreen", TRANSITION_END = "webkitTransitionEnd ontransitionend msTransitionEnd transitionend", JS_SLIDE_CLASS = "js-slide", JS_SLIDE_CONTENT_CLASS = "js-slide-content", LOADING_CLASS = "loading", ChromeView = function() {
    function e(t, i, n) {
        _classCallCheck(this, e), this._$context = t, this._controller = i, this._props = n, 
        this._$view = (0, _jquery2.default)(_templates.lightbox).appendTo(t), this._$contents = this._$view.find(".js-contents"), 
        this._$prev = this._$view.find(".js-prev"), this._$next = this._$view.find(".js-next"), 
        this._bindToController();
    }
    return _createClass(e, [ {
        key: "open",
        value: function() {
            var e = this, t = (0, _jquery2.default)("html"), i = function(t, i) {
                i.stopImmediatePropagation(), e._controller[t]();
            };
            this._idleTimer = (0, _idleTimer2.default)({
                callback: function() {
                    return e.hideExtras();
                },
                activeCallback: function() {
                    return e.showExtras();
                },
                idleTime: this._props.idleTimeInMs
            }), this._touch = (0, _vanillaTouchwipe2.default)(this._$view[0], {
                wipeLeft: function(e) {
                    return i("next", e);
                },
                wipeRight: function(e) {
                    return i("prev", e);
                }
            }), this._$context.on("click.lightbox", ".js-next", function(e) {
                return i("next", e);
            }).on("click.lightbox", ".js-prev", function(e) {
                return i("prev", e);
            }).on("click.lightbox", ".js-close", function(e) {
                return i("close", e);
            }).on("click.lightbox", "." + JS_SLIDE_CONTENT_CLASS + "." + _zoomable.ZOOMABLE_CLASS, function() {
                t.toggleClass(ZOOMED_CLASS);
            }), (0, _jquery2.default)(document).on("mouseout.lightbox", function() {
                return e._idleTimer.idle();
            }).on("keydown.lightbox", function(t) {
                switch (t.keyCode) {
                  case LEFT_ARROW_KEYCODE:
                    e._idleTimer.idle(), i("prev", t);
                    break;

                  case RIGHT_ARROW_KEYCODE:
                    e._idleTimer.idle(), i("next", t);
                    break;

                  case ESCAPE_KEYCODE:
                    i("close", t);
                }
            }), t.addClass(ENABLED_CLASS), this._$view.find(".js-blocking").css({
                backgroundColor: this._props.bgColor,
                opacity: this._props.opacity
            }), this._$view.find(".js-close svg").attr("fill", (0, _tinycolor2.default)(this._props.bgColor).isLight() ? "#000" : "#FFF"), 
            this.showExtras(), this._$view.removeClass(OFFSCREEN_CLASS);
        }
    }, {
        key: "renderSlide",
        value: function(e) {
            var t = this, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};
            this._maybeHidePrevNext(), this._appendSlide(e);
            var n = this._$contents.find("." + JS_SLIDE_CLASS + "[data-slide-is-active]"), o = this._$contents.find("." + JS_SLIDE_CLASS + '[data-slide-id="' + e.id + '"]');
            n.removeAttr("data-slide-is-active").find("." + JS_SLIDE_CONTENT_CLASS).addClass(HIDDEN_CLASS).one(TRANSITION_END, function() {
                var e = n.data();
                e.slideIsActive || (t._controller.deactivateSlide(t._controller.slides[e.slideId]), 
                n.remove());
            }), o.attr({
                "data-slide-is-active": !0
            }).removeClass(OFFSCREEN_CLASS);
            var r = o.find("." + JS_SLIDE_CONTENT_CLASS), s = r.find("img"), l = function() {
                r.removeClass(HIDDEN_CLASS), t._appendAdjacentSlides(n, o), i();
            };
            return s.length ? (this._$view.addClass(LOADING_CLASS), void (0, _onImgLoad.onImgLoad)(s, function() {
                t._$view.removeClass(LOADING_CLASS), e.data.noZoom || r.addClass((0, _zoomable.getZoomableClasses)(s[0], (0, 
                _jquery2.default)(window))), l();
            })) : l();
        }
    }, {
        key: "close",
        value: function() {
            this._$view.addClass(OFFSCREEN_CLASS), this._$contents.empty(), (0, _jquery2.default)(document).add(this._$context).off(".lightbox"), 
            (0, _jquery2.default)("html").removeClass(ENABLED_CLASS), this._idleTimer && this._idleTimer.destroy(), 
            this._touch && this._touch.unbind();
        }
    }, {
        key: "destroy",
        value: function() {
            this.close(), this._$view.remove();
        }
    }, {
        key: "hideExtras",
        value: function() {
            this._$view.addClass(EXTRAS_HIDDEN_CLASS);
        }
    }, {
        key: "showExtras",
        value: function() {
            this._$view.removeClass(EXTRAS_HIDDEN_CLASS);
        }
    }, {
        key: "_appendSlide",
        value: function(e) {
            if (e && !this._$contents.find('[data-slide-id="' + e.id + '"]').length) {
                var t = (0, _jquery2.default)("<div>").addClass(JS_SLIDE_CONTENT_CLASS + " " + CONTENT_CLASS + " " + HIDDEN_CLASS).html(this._getSlideContent(e));
                (0, _jquery2.default)("<div>", {
                    "data-slide-id": e.id,
                    class: JS_SLIDE_CLASS + " " + OFFSCREEN_CLASS
                }).append(t).appendTo(this._$contents);
            }
        }
    }, {
        key: "_appendAdjacentSlides",
        value: function(e, t) {
            0 === e.length ? (this._appendSlide(this._controller.getPrevSlide()), this._appendSlide(this._controller.getNextSlide())) : this._appendSlide(e.data("slide-id") < t.data("slide-id") ? this._controller.getNextSlide() : this._controller.getPrevSlide());
        }
    }, {
        key: "_bindToController",
        value: function() {
            var e = this;
            this._controller.on({
                open: function() {
                    return e.open();
                },
                close: function() {
                    return e.close();
                },
                destroy: function() {
                    return e.destroy();
                },
                activate: function(t) {
                    return e.renderSlide(t);
                },
                prefetch: function(t) {
                    return e._appendSlide(t);
                }
            });
        }
    }, {
        key: "_getSlideContent",
        value: function(e) {
            var t = e.data.src;
            return t ? (0, _jquery2.default)("<img />", {
                src: t
            }) : e.content;
        }
    }, {
        key: "_maybeHidePrevNext",
        value: function() {
            var e = this._controller.getPrevSlide(), t = this._controller.getNextSlide();
            this._props.isCircular && (e || t) || (e ? this._$prev.removeClass(HIDDEN_CLASS) : this._$prev.addClass(HIDDEN_CLASS), 
            t ? this._$next.removeClass(HIDDEN_CLASS) : this._$next.addClass(HIDDEN_CLASS));
        }
    } ]), e;
}();

exports.default = ChromeView, module.exports = exports.default;

/***/ },

/***/ 222:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, _createClass = function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t;
    };
}(), _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _hoverintent = __webpack_require__(217), _hoverintent2 = _interopRequireDefault(_hoverintent), SLIDE_ID_ATTR = "lightbox-slide-id", LINK_CLASS = "lightbox-link", Controller = function() {
    function e(t, i) {
        _classCallCheck(this, e), this._props = i, this._$context = t, this._$eventNode = (0, 
        _jquery2.default)("<e/>"), this._$links = this._$context.find(":not(a) > " + this._props.slideSelector), 
        this._hoverlisteners = [], this.slides = this._createSlides(this._$links), this._isOpen = !1, 
        this._bind();
    }
    return _createClass(e, [ {
        key: "on",
        value: function(e, t) {
            var i = function(e) {
                return function(t) {
                    for (var i = arguments.length, n = Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r];
                    return e.apply(null, n);
                };
            };
            "object" === ("undefined" == typeof e ? "undefined" : _typeof(e)) && Object.keys(e).forEach(function(t) {
                return e[t] = i(e[t]);
            }), this._$eventNode.on(e, i(t));
        }
    }, {
        key: "off",
        value: function(e, t) {
            this._$eventNode.off(e, t);
        }
    }, {
        key: "open",
        value: function(e) {
            var t = this.slides[e];
            t && (this._isOpen = !0, this._trigger("open", t), this.activateSlide(t));
        }
    }, {
        key: "close",
        value: function() {
            this._isOpen = !1, this.deactivateSlide(this.activeSlide), this._trigger("close");
        }
    }, {
        key: "next",
        value: function() {
            this.activateSlide(this.getNextSlide());
        }
    }, {
        key: "prev",
        value: function() {
            this.activateSlide(this.getPrevSlide());
        }
    }, {
        key: "getNextSlide",
        value: function() {
            return this._getSlideByDirection(1);
        }
    }, {
        key: "getPrevSlide",
        value: function() {
            return this._getSlideByDirection(-1);
        }
    }, {
        key: "activateSlide",
        value: function(e) {
            e && (this.activeSlide = e, this._trigger("activate", e));
        }
    }, {
        key: "deactivateSlide",
        value: function(e) {
            e && this._trigger("deactivate", e);
        }
    }, {
        key: "destroy",
        value: function() {
            this._isOpen && this.close(), this._removePrefetchOnHover(), this._$links.removeClass(LINK_CLASS).removeData(SLIDE_ID_ATTR).off(".lightbox"), 
            this._trigger("destroy"), this._$eventNode.off();
        }
    }, {
        key: "_bind",
        value: function() {
            var e = this, t = this;
            this._$links.addClass(LINK_CLASS).each(function(t, i) {
                e._addPrefetchOnHover(i, t), (0, _jquery2.default)(i).data(SLIDE_ID_ATTR, t);
            }).on("mousedown.lightbox", function() {
                t._trigger("prefetch", t.slides[(0, _jquery2.default)(this).data(SLIDE_ID_ATTR)]);
            }).on("click.lightbox", function(e) {
                e.stopPropagation(), t.open((0, _jquery2.default)(this).data(SLIDE_ID_ATTR));
            });
        }
    }, {
        key: "_trigger",
        value: function(e, t) {
            this._$eventNode.trigger(e, t);
        }
    }, {
        key: "_createSlides",
        value: function(e) {
            var t = this;
            return e.toArray().map(function(e, i) {
                var n = (0, _jquery2.default)(e);
                return {
                    id: i,
                    data: n.data(),
                    content: n.find(t._props.slideContentSelector).html()
                };
            });
        }
    }, {
        key: "_getSlideByDirection",
        value: function(e) {
            var t = this.activeSlide.id + e, i = this.slides[t];
            return i ? i : this._props.isCircular ? this.slides[e === -1 ? this.slides.length - 1 : 0] : void 0;
        }
    }, {
        key: "_addPrefetchOnHover",
        value: function(e, t) {
            var i = this;
            this._hoverlisteners.push((0, _hoverintent2.default)(e, function() {
                return i._trigger("prefetch", i.slides[t]);
            }, function() {}));
        }
    }, {
        key: "_removePrefetchOnHover",
        value: function() {
            this._hoverlisteners.forEach(function(e) {
                return e.remove();
            });
        }
    } ]), e;
}();

exports.default = Controller, module.exports = exports.default;

/***/ },

/***/ 223:
/***/ function(module, exports) {

"use strict";
"use strict";

function onImgLoad(e, o) {
    var t = e[0];
    return t.complete ? o() : e.load(o);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.onImgLoad = onImgLoad;

/***/ },

/***/ 224:
/***/ function(module, exports) {

"use strict";
"use strict";

function getZoomableClasses(e, o) {
    var s = {
        w: o.width(),
        h: o.height()
    }, t = {
        w: e.naturalWidth,
        h: e.naturalHeight
    }, O = [];
    if (!(s.w >= t.w && s.h >= t.h)) return O.push(ZOOMABLE_CLASS), s.w < t.w && O.push(ZOOMABLE_X_CLASS), 
    s.h < t.h && O.push(ZOOMABLE_Y_CLASS), O.join(" ");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getZoomableClasses = getZoomableClasses;

var ZOOMABLE_CLASS = exports.ZOOMABLE_CLASS = "zoomable", ZOOMABLE_X_CLASS = exports.ZOOMABLE_X_CLASS = "zoomable-x", ZOOMABLE_Y_CLASS = exports.ZOOMABLE_Y_CLASS = "zoomable-y";

/***/ },

/***/ 225:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), __webpack_require__(115);

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _Controller = __webpack_require__(222), _Controller2 = _interopRequireDefault(_Controller), _ChromeView = __webpack_require__(221), _ChromeView2 = _interopRequireDefault(_ChromeView);

exports.default = {
    init: function(e) {
        e = Object.assign({
            context: document.body,
            slideContentSelector: ".js-lightbox-slide-content",
            slideSelector: ".js-lightbox",
            bgColor: "#fff",
            opacity: "0.94",
            idleTimeInMs: 5e3,
            isCircular: !0
        }, e);
        var r = (0, _jquery2.default)(e.context), t = new _Controller2.default(r, e);
        return new _ChromeView2.default(r, t, e), t;
    }
}, module.exports = exports.default;

/***/ },

/***/ 226:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.lightbox = void 0, __webpack_require__(214);

var backdrop = '\n  <div class="js-blocking" id="lightbox-blocking">\n    <span class="lightbox-spinner"></span>\n  </div>\n', prevControl = '\n  <div class="lightbox-extra control prev js-control js-prev">\n    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" width="60" height="60" viewBox="0 0 60 60" xml:space="preserve">\n      <circle class="lightbox-icon-bg" cx="30" cy="30" r="30"/>\n      <path class="lightbox-icon-arrow" d="M36.8,36.4L30.3,30l6.5-6.4l-3.5-3.4l-10,9.8l10,9.8L36.8,36.4z"/>\n    </svg>\n  </div>\n', nextControl = '\n  <div class="lightbox-extra control next js-control js-next">\n    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" width="60" height="60" viewBox="0 0 60 60" xml:space="preserve">\n      <circle class="lightbox-icon-bg" cx="30" cy="30" r="30"/>\n      <path class="lightbox-icon-arrow" d="M24.2,23.5l6.6,6.5l-6.6,6.5l3.6,3.5L37.8,30l-10.1-9.9L24.2,23.5z"/>\n    </svg>\n  </div>\n', closeControl = '\n  <div class="lightbox-extra control close js-control js-close">\n    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">\n      <circle class="lightbox-icon-bg" cx="50" cy="50" r="47.5"/>\n      <polygon class="lightbox-icon-close" points="64.5,39.8 60.2,35.5 50,45.7 39.8,35.5 35.5,39.8 45.7,50 35.5,60.2 39.8,64.5 50,54.3 60.2,64.5 64.5,60.2 54.3,50"/>\n    </svg>\n  </div>\n', lightbox = exports.lightbox = '\n  <div class="js-lightbox-wrap offscreen" id="lightbox-wrap">\n    ' + backdrop + '\n    <div class="js-lightbox-inner-wrap" id="lightbox-inner-wrap">\n      <div class="js-img-wrap" id="lightbox-img-wrap">\n        ' + prevControl + "\n        " + nextControl + "\n        " + closeControl + '\n        <div class="lightbox-contents js-contents"></div>\n      </div>\n    </div>\n  </div>\n';

/***/ },

/***/ 228:
/***/ function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBzdHlsZT0iZmlsbDogd2hpdGUiIHZpZXdCb3g9IjAgMCAyMSAyMSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICA8cGF0aCBkPSJNLTEuMjUyMjIyNTEsMTUuNjAzNDE5NyBDLTEuMzUyNTE5MjcsMTUuNjkzNjg2OCAtMS40MjUyMzMzMywxNS43OTg5OTY4IC0xLjQ3MDM2Njg3LDE1LjkxOTM1MjkgQy0xLjUxNTUwMDQxLDE2LjAzOTcwOSAtMS41MzgwNjY4NCwxNi4xNjAwNjMzIC0xLjUzODA2Njg0LDE2LjI4MDQxOTQgQy0xLjUzODA2Njg0LDE2LjQwMDc3NTUgLTEuNTE1NTAwNDEsMTYuNTIxMTI5OCAtMS40NzAzNjY4NywxNi42NDE0ODU5IEMtMS40MjUyMzMzMywxNi43NjE4NDIgLTEuMzUyNTE5MjcsMTYuODY3MTUyIC0xLjI1MjIyMjUxLDE2Ljk1NzQxOTEgTDMuNTYxOTk3NzEsMjEuNzcxNjM5MyBDMy43NTI1NjE1NSwyMS45NjIyMDMyIDMuOTgwNzMzMjQsMjIuMDU3NDgzNyA0LjI0NjUxOTY1LDIyLjA1NzQ4MzcgQzQuNTEyMzA2MDUsMjIuMDU3NDgzNyA0LjczNTQ2Mjk5LDIxLjk2MjIwMzIgNC45MTU5OTcxNSwyMS43NzE2MzkzIEM1LjEwNjU2MDk4LDIxLjU4MTA3NTUgNS4yMDE4NDE0NywyMS4zNTU0MTEyIDUuMjAxODQxNDcsMjEuMDk0NjM5NiBDNS4yMDE4NDE0NywyMC44MzM4NjggNS4xMDY1NjA5OCwyMC42MDgyMDM3IDQuOTE1OTk3MTUsMjAuNDE3NjM5OSBMMS43NTY2NjUxMywxNy4yNDMyNjM0IEwxMC4wMTYwNjE3LDE3LjI0MzI2MzQgQzEwLjI4Njg2MjksMTcuMjQzMjYzNCAxMC41MTUwMzQ2LDE3LjE1MDQ5MDMgMTAuNzAwNTgzNiwxNi45NjQ5NDEzIEMxMC44ODYxMzI2LDE2Ljc3OTM5MjMgMTAuOTc4OTA1NywxNi41NTEyMjA2IDEwLjk3ODkwNTcsMTYuMjgwNDE5NCBDMTAuOTc4OTA1NywxNi4wMDk2MTgyIDEwLjg4NjEzMjYsMTUuNzgxNDQ2NSAxMC43MDA1ODM2LDE1LjU5NTg5NzUgQzEwLjUxNTAzNDYsMTUuNDEwMzQ4NSAxMC4yODY4NjI5LDE1LjMxNzU3NTMgMTAuMDE2MDYxNywxNS4zMTc1NzUzIEwxLjc1NjY2NTEzLDE1LjMxNzU3NTMgTDQuOTE1OTk3MTUsMTIuMTQzMTk4OSBDNS4xMDY1NjA5OCwxMS45NTI2MzUxIDUuMjAxODQxNDcsMTEuNzI2OTcwNyA1LjIwMTg0MTQ3LDExLjQ2NjE5OTIgQzUuMjAxODQxNDcsMTEuMjA1NDI3NiA1LjEwNjU2MDk4LDEwLjk3OTc2MzMgNC45MTU5OTcxNSwxMC43ODkxOTk1IEM0LjczNTQ2Mjk5LDEwLjU5ODYzNTYgNC41MTIzMDYwNSwxMC41MDMzNTUxIDQuMjQ2NTE5NjUsMTAuNTAzMzU1MSBDMy45ODA3MzMyNCwxMC41MDMzNTUxIDMuNzUyNTYxNTUsMTAuNTk4NjM1NiAzLjU2MTk5NzcxLDEwLjc4OTE5OTUgTC0xLjI1MjIyMjUxLDE1LjYwMzQxOTcgWiIgaWQ9IngiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQuNzIwNDE5LCAxNi4yODA0MTkpIHJvdGF0ZSgtNDUuMDAwMDAwKSB0cmFuc2xhdGUoLTQuNzIwNDE5LCAtMTYuMjgwNDE5KSAiPjwvcGF0aD4KICA8cGF0aCBkPSJNMTAuMzA3Nzc3NCw0LjA0MzQxOTczIEMxMC4yMDc0ODA3LDQuMTMzNjg2ODEgMTAuMTM0NzY2Niw0LjIzODk5NjgzIDEwLjA4OTYzMzEsNC4zNTkzNTI5MyBDMTAuMDQ0NDk5NSw0LjQ3OTcwOTA0IDEwLjAyMTkzMzEsNC42MDAwNjMzNCAxMC4wMjE5MzMxLDQuNzIwNDE5NDUgQzEwLjAyMTkzMzEsNC44NDA3NzU1NiAxMC4wNDQ0OTk1LDQuOTYxMTI5ODYgMTAuMDg5NjMzMSw1LjA4MTQ4NTk3IEMxMC4xMzQ3NjY2LDUuMjAxODQyMDcgMTAuMjA3NDgwNyw1LjMwNzE1MjA5IDEwLjMwNzc3NzQsNS4zOTc0MTkxNyBMMTUuMTIxOTk3NywxMC4yMTE2Mzk0IEMxNS4zMTI1NjE1LDEwLjQwMjIwMzIgMTUuNTQwNzMzMiwxMC40OTc0ODM3IDE1LjgwNjUxOTYsMTAuNDk3NDgzNyBDMTYuMDcyMzA2LDEwLjQ5NzQ4MzcgMTYuMjk1NDYyOSwxMC40MDIyMDMyIDE2LjQ3NTk5NzEsMTAuMjExNjM5NCBDMTYuNjY2NTYwOSwxMC4wMjEwNzU2IDE2Ljc2MTg0MTQsOS43OTU0MTEyNCAxNi43NjE4NDE0LDkuNTM0NjM5NjcgQzE2Ljc2MTg0MTQsOS4yNzM4NjgxMSAxNi42NjY1NjA5LDkuMDQ4MjAzNzkgMTYuNDc1OTk3MSw4Ljg1NzYzOTk1IEwxMy4zMTY2NjUxLDUuNjgzMjYzNDkgTDIxLjU3NjA2MTYsNS42ODMyNjM0OSBDMjEuODQ2ODYyOSw1LjY4MzI2MzQ5IDIyLjA3NTAzNDYsNS41OTA0OTAzOSAyMi4yNjA1ODM2LDUuNDA0OTQxMzkgQzIyLjQ0NjEzMjYsNS4yMTkzOTIzOSAyMi41Mzg5MDU3LDQuOTkxMjIwNjkgMjIuNTM4OTA1Nyw0LjcyMDQxOTQ1IEMyMi41Mzg5MDU3LDQuNDQ5NjE4MjEgMjIuNDQ2MTMyNiw0LjIyMTQ0NjUxIDIyLjI2MDU4MzYsNC4wMzU4OTc1MSBDMjIuMDc1MDM0NiwzLjg1MDM0ODUxIDIxLjg0Njg2MjksMy43NTc1NzU0MSAyMS41NzYwNjE2LDMuNzU3NTc1NDEgTDEzLjMxNjY2NTEsMy43NTc1NzU0MSBMMTYuNDc1OTk3MSwwLjU4MzE5ODk0NyBDMTYuNjY2NTYwOSwwLjM5MjYzNTExMSAxNi43NjE4NDE0LDAuMTY2OTcwNzk0IDE2Ljc2MTg0MTQsLTAuMDkzODAwNzcxNSBDMTYuNzYxODQxNCwtMC4zNTQ1NzIzMzcgMTYuNjY2NTYwOSwtMC41ODAyMzY2NTQgMTYuNDc1OTk3MSwtMC43NzA4MDA0OSBDMTYuMjk1NDYyOSwtMC45NjEzNjQzMjcgMTYuMDcyMzA2LC0xLjA1NjY0NDgyIDE1LjgwNjUxOTYsLTEuMDU2NjQ0ODIgQzE1LjU0MDczMzIsLTEuMDU2NjQ0ODIgMTUuMzEyNTYxNSwtMC45NjEzNjQzMjcgMTUuMTIxOTk3NywtMC43NzA4MDA0OSBMMTAuMzA3Nzc3NCw0LjA0MzQxOTczIFoiIGlkPSJ4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4yODA0MTksIDQuNzIwNDE5KSByb3RhdGUoLTIyNS4wMDAwMDApIHRyYW5zbGF0ZSgtMTYuMjgwNDE5LCAtNC43MjA0MTkpICI+PC9wYXRoPgo8L3N2Zz4K"

/***/ },

/***/ 231:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(53), __webpack_require__(22), __webpack_require__(2), __webpack_require__(91) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(i, e, t, n) {
    "use strict";
    function r(e) {
        if (!e.styles) return e;
        var t = e.styles.local || [], n = new i();
        return t = t.filter(function(i) {
            return i;
        }), requirejs(t.map(function(i) {
            return "css!styles/" + i;
        }), n.resolve.bind(null, e), n.reject), n.thenable();
    }
    var s = n.extend({
        prefilter: function(i) {
            return i;
        },
        _initView: function() {
            this._super.apply(this, arguments), this._view && this.listenTo(this._view, "exit", function() {
                this.trigger("exit");
            });
        },
        open: function(i) {
            this.trigger("preload", i);
            var e = t(i).then(this.prefilter).then(r).then(function(i) {
                this._model._data = {}, this._model.set(i), this.trigger("dataReceived", i);
            }.bind(this)).then(this.render.bind(this)), n = this.trigger.bind(this, "postload");
            return e.then(n, n), e;
        },
        close: function() {
            return this.visible() && this._view.hide(!0), this;
        },
        render: function() {
            var i, e;
            return this._view.$view || (i = document.body), e = this._view.render(i), this._view.show(), 
            e;
        },
        reset: function() {
            this.visible() && (this._view.hide(!0), this._view.destroy());
        },
        visible: function() {
            return this._view.$view && this._view.$view.hasClass("shown");
        }
    }).mixin(e);
    return s;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 232:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(231), __webpack_require__(233) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, t) {
    "use strict";
    var o = e.extend({
        prefilter: function(e) {
            var t;
            return e.styles && (t = [].concat(e.styles.project, e.styles.local), e.styles.local = t), 
            e;
        },
        open: function() {
            return this._view && this._view.block(!0), this._super.apply(this, arguments);
        }
    }, {
        VIEW_CLASS: {
            desktop: t
        }
    });
    return o;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(46), __webpack_require__(29), __webpack_require__(284), __webpack_require__(20), __webpack_require__(125), __webpack_require__(234), __webpack_require__(166), __webpack_require__(244), __webpack_require__(90) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(i, t, e, s, n, o, p, l, h) {
    "use strict";
    var r = n.extend({
        $styles: null,
        init: function() {
            this._super.apply(this, arguments), this.on("prerender", function() {
                document.title = this._model.get("title"), this.$styles = this.$styles || i("<style>", {
                    type: "text/css"
                }).appendTo("head"), p.set(this.$styles[0], this._model.get("styles").inline[0]), 
                this.$view && this.$view.parent().length && this.innerDestroy();
            }, this);
        },
        destroy: function() {
            this.$styles && (this.$styles.remove(), this.$styles = null), e.off(null, null, this), 
            this.$view && (this.$view.remove(), this.$view = null);
        },
        innerInit: function() {
            this._bindings = l.init(this.$popup.find(".js-project-wrap"), this.$popup, !0);
        },
        innerDestroy: function() {
            this._bindings.destroy();
        },
        mustache: h,
        template: function() {
            var i = this._super.apply(this, arguments);
            return i = i.filter(function() {
                return "SCRIPT" !== this.tagName;
            }), i.filter(".popup").prepend(this._model.get("upsell")), i;
        },
        templateData: function() {
            return i.extend({
                toolbar: !1,
                classes: [ "project-view", "js-project-popup" ]
            }, this._super().view);
        },
        rendered: function() {
            this.$popup = this.$view.filter(".popup"), this._bindBlockingDivHide(), this._super(), 
            i.fancybox.hideLoading(), s.page();
        },
        _bindBlockingDivHide: function() {
            this.$popup.find(".action-login").addClass("action-login-noremoval"), this.$popup.find(".js-project-sidebar-wrap, .js-project").on("click", function(i) {
                i.originalEvent.origin = this;
            }.bind(this)), this.$popup.find(".popup-inner-wrap").on("click", function(i) {
                i.originalEvent.origin !== this && this.hide();
            }.bind(this));
        },
        show: function() {
            this._super(), this.block(!0), this.$view.addClass("shown"), this.innerInit(), e.on("desktop:exit", function() {
                this.hide();
            }, this);
        },
        hide: function(i) {
            this.$view && (this._super(), e.off(null, null, this), this.block(!1), this.$view.removeClass("shown"), 
            this.innerDestroy(), i !== !0 && this.trigger("exit"));
        },
        block: function(t) {
            i(document.body).toggleClass("project-popup-open", t).add("html").css("overflow", t ? "hidden" : "");
        }
    });
    return r;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e) {
    "use strict";
    function t(t, s) {
        "undefined" != typeof t.styleSheet ? t.styleSheet.cssText = (t.styleSheet.cssText || "") + s : e(t).append(s);
    }
    function s(e, t) {
        "string" == typeof t && t.length && (e.styleSheet && "undefined" != typeof e.styleSheet.cssText ? e.styleSheet.cssText = t : e.innerHTML = t);
    }
    function n(e) {
        return e.styleSheet && "undefined" != typeof e.styleSheet.cssText ? e.styleSheet.cssText : e.innerHTML;
    }
    return {
        add: t,
        set: s,
        get: n
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(64), __webpack_require__(49), __webpack_require__(22), __webpack_require__(29), __webpack_require__(57), __webpack_require__(125), __webpack_require__(35), __webpack_require__(90) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, e, n, i, s, o, h, r) {
    "use strict";
    n = n.get("popupSession");
    var a = function(t) {
        if (!this.singleton || !this.singleton._view) return void this._setEntrance();
        var e = o.get("state");
        e && e[t] ? s.is("desktop") ? this.show(r.getLocation("href")) : r.replaceLocation(r.getLocation("href")) : this.singleton.reset();
    }, c = function(t) {
        var e = {};
        return e[t] = !0, e;
    }, u = t('<div class="blocking-div">'), d = {
        init: function(n) {
            if (this.singleton) return this.onhist;
            var i = h(c.bind(this, this.entity)), r = this, d = !1;
            return this.onhist = function() {
                s.is("desktop") && !e("touch") && (d || r._setEntrance(), i.apply(this, arguments), 
                r.stateChange());
            }, this.singleton = new this.Dialog("object" == typeof n ? n : void 0), this.singleton.on("preload", function() {
                d = !0, u.appendTo(document.body), t.fancybox.showLoading();
            }).on("postload", function() {
                u.remove();
            }).on("exit", function() {
                o.pushState(this.entrance.state, this.entrance.title, this.entrance.url), this.stateChange(), 
                d = !1;
            }, this), this.relay(this.singleton, "dataReceived postload"), this._setEntrance(), 
            this.stateChange = a.bind(this, this.entity), t(window).on("popstate", this.stateChange), 
            t(document.body).on("click", this.selector, this.onhist), this.onhist;
        },
        show: function(t) {
            var e = this;
            return this.trigger("prerender"), this.singleton.close(), this.singleton.open(t).then(function(t) {
                e.trigger("postrender", t);
            }, function(e) {
                e && 404 === e.status ? (o.back(), r.setLocation(t)) : "readyState" in e && 0 === e.readyState || n.error(e);
            });
        },
        destroy: function() {
            this.singleton && this.singleton.destroy(), this.off(), t(document.body).off("click", this.onhist);
        },
        _setEntrance: function() {
            this.entrance = {
                state: o.getState(),
                title: document.title,
                url: r.getLocation("href")
            };
        }
    };
    return t.extend(d, i);
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 236:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<svg class=\"rotate-icon\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 18 20\" xml:space=\"preserve\">");t.b("\n" + i);t.b("  <path d=\"M16,0c0.2,0,0.3,0,0.5,0.1c0.2,0.1,0.3,0.2,0.4,0.3c0.1,0.1,0.2,0.2,0.3,0.4s0.1,0.3,0.1,0.5v6.2c0,0.2,0,0.3-0.1,0.5");t.b("\n" + i);t.b("      S17,8.3,16.9,8.4c-0.1,0.1-0.2,0.2-0.4,0.3c-0.2,0.1-0.3,0.1-0.5,0.1H9.7c-0.2,0-0.3,0-0.5-0.1C9.1,8.6,8.9,8.5,8.8,8.4");t.b("\n" + i);t.b("      C8.7,8.3,8.6,8.1,8.6,8S8.5,7.7,8.5,7.5c0-0.2,0-0.3,0.1-0.5s0.2-0.3,0.3-0.4c0.1-0.1,0.2-0.2,0.4-0.3c0.2-0.1,0.3-0.1,0.5-0.1");t.b("\n" + i);t.b("      h3.2C12.6,6,12.3,5.8,12,5.6c-0.3-0.2-0.7-0.4-1-0.5c-0.4-0.1-0.7-0.3-1.1-0.3C9.5,4.6,9.1,4.6,8.8,4.6c-0.9,0-1.7,0.2-2.4,0.5");t.b("\n" + i);t.b("      s-1.4,0.8-2,1.3s-1,1.2-1.3,2C2.7,9.2,2.5,10,2.5,10.9s0.2,1.7,0.5,2.4s0.8,1.4,1.3,2s1.2,1,2,1.3c0.8,0.3,1.6,0.5,2.4,0.5");t.b("\n" + i);t.b("      c0.5,0,1-0.1,1.5-0.2s1-0.3,1.4-0.5c0.4-0.2,0.8-0.5,1.2-0.8s0.7-0.7,1-1.1c0.1-0.1,0.2-0.3,0.4-0.3c0.1-0.1,0.3-0.1,0.4-0.2");t.b("\n" + i);t.b("      c0.2,0,0.3,0,0.5,0c0.2,0,0.3,0.1,0.4,0.2c0.1,0.1,0.3,0.2,0.3,0.4c0.1,0.1,0.1,0.3,0.2,0.4s0,0.3,0,0.5c0,0.2-0.1,0.3-0.2,0.5");t.b("\n" + i);t.b("      c-0.4,0.6-0.9,1.1-1.4,1.6c-0.5,0.5-1.1,0.8-1.7,1.2c-0.6,0.3-1.3,0.6-1.9,0.7s-1.4,0.3-2.1,0.3c-1.2,0-2.3-0.2-3.4-0.7");t.b("\n" + i);t.b("      c-1.1-0.5-2-1.1-2.8-1.9c-0.8-0.8-1.4-1.7-1.9-2.8C0.2,13.2,0,12.1,0,10.9c0-1.2,0.2-2.3,0.7-3.4c0.5-1.1,1.1-2,1.9-2.8");t.b("\n" + i);t.b("      c0.8-0.8,1.7-1.4,2.8-1.9c1.1-0.5,2.2-0.7,3.4-0.7c0.6,0,1.1,0.1,1.7,0.2c0.5,0.1,1.1,0.3,1.6,0.5c0.5,0.2,1,0.5,1.4,0.8");t.b("\n" + i);t.b("      c0.5,0.3,0.9,0.6,1.3,1h0V1.2c0-0.2,0-0.3,0.1-0.5s0.2-0.3,0.3-0.4c0.1-0.1,0.2-0.2,0.4-0.3C15.6,0,15.8,0,16,0z\"/>");t.b("\n" + i);t.b("</svg>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<svg class=\"rotate-icon\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 18 20\" xml:space=\"preserve\">\n  <path d=\"M16,0c0.2,0,0.3,0,0.5,0.1c0.2,0.1,0.3,0.2,0.4,0.3c0.1,0.1,0.2,0.2,0.3,0.4s0.1,0.3,0.1,0.5v6.2c0,0.2,0,0.3-0.1,0.5\n      S17,8.3,16.9,8.4c-0.1,0.1-0.2,0.2-0.4,0.3c-0.2,0.1-0.3,0.1-0.5,0.1H9.7c-0.2,0-0.3,0-0.5-0.1C9.1,8.6,8.9,8.5,8.8,8.4\n      C8.7,8.3,8.6,8.1,8.6,8S8.5,7.7,8.5,7.5c0-0.2,0-0.3,0.1-0.5s0.2-0.3,0.3-0.4c0.1-0.1,0.2-0.2,0.4-0.3c0.2-0.1,0.3-0.1,0.5-0.1\n      h3.2C12.6,6,12.3,5.8,12,5.6c-0.3-0.2-0.7-0.4-1-0.5c-0.4-0.1-0.7-0.3-1.1-0.3C9.5,4.6,9.1,4.6,8.8,4.6c-0.9,0-1.7,0.2-2.4,0.5\n      s-1.4,0.8-2,1.3s-1,1.2-1.3,2C2.7,9.2,2.5,10,2.5,10.9s0.2,1.7,0.5,2.4s0.8,1.4,1.3,2s1.2,1,2,1.3c0.8,0.3,1.6,0.5,2.4,0.5\n      c0.5,0,1-0.1,1.5-0.2s1-0.3,1.4-0.5c0.4-0.2,0.8-0.5,1.2-0.8s0.7-0.7,1-1.1c0.1-0.1,0.2-0.3,0.4-0.3c0.1-0.1,0.3-0.1,0.4-0.2\n      c0.2,0,0.3,0,0.5,0c0.2,0,0.3,0.1,0.4,0.2c0.1,0.1,0.3,0.2,0.3,0.4c0.1,0.1,0.1,0.3,0.2,0.4s0,0.3,0,0.5c0,0.2-0.1,0.3-0.2,0.5\n      c-0.4,0.6-0.9,1.1-1.4,1.6c-0.5,0.5-1.1,0.8-1.7,1.2c-0.6,0.3-1.3,0.6-1.9,0.7s-1.4,0.3-2.1,0.3c-1.2,0-2.3-0.2-3.4-0.7\n      c-1.1-0.5-2-1.1-2.8-1.9c-0.8-0.8-1.4-1.7-1.9-2.8C0.2,13.2,0,12.1,0,10.9c0-1.2,0.2-2.3,0.7-3.4c0.5-1.1,1.1-2,1.9-2.8\n      c0.8-0.8,1.7-1.4,2.8-1.9c1.1-0.5,2.2-0.7,3.4-0.7c0.6,0,1.1,0.1,1.7,0.2c0.5,0.1,1.1,0.3,1.6,0.5c0.5,0.2,1,0.5,1.4,0.8\n      c0.5,0.3,0.9,0.6,1.3,1h0V1.2c0-0.2,0-0.3,0.1-0.5s0.2-0.3,0.3-0.4c0.1-0.1,0.2-0.2,0.4-0.3C15.6,0,15.8,0,16,0z\"/>\n</svg>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_button": __webpack_require__(45).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<lib/_button0",c,p,""));return t.fl(); },partials: {"<lib/_button0":{name:"lib/_button", partials: {}, subs: { "attrs": function(c,p,t,i) {t.b("data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\"");},"classes": function(c,p,t,i) {t.b("form-button-light-and-blue js-action-collection");},"icon": function(c,p,t,i) {t.b("beicons-pre beicons-pre-collection");},"label": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,211,261,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_add_to_collection_button|Add to Collection");});c.pop();}} }}}, subs: {  }}, "{{<lib/_button}}\n  {{$attrs}}data-id=\"{{id}}\"{{/attrs}}\n  {{$classes}}form-button-light-and-blue js-action-collection{{/classes}}\n  {{$icon}}beicons-pre beicons-pre-collection{{/icon}}\n  {{$label}}{{#translate}}project_add_to_collection_button|Add to Collection{{/translate}}{{/label}}\n{{/lib/_button}}", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_button": __webpack_require__(45).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<lib/_button0",c,p,""));return t.fl(); },partials: {"<lib/_button0":{name:"lib/_button", partials: {}, subs: { "attrs": function(c,p,t,i) {t.b("data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\"");},"classes": function(c,p,t,i) {t.b("form-button-light-and-grey form-button-large js-action-collection");},"icon": function(c,p,t,i) {t.b("beicons-pre beicons-pre-collection");},"label": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,229,279,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_add_to_collection_button|Add to Collection");});c.pop();}} }}}, subs: {  }}, "{{<lib/_button}}\n  {{$attrs}}data-id=\"{{id}}\"{{/attrs}}\n  {{$classes}}form-button-light-and-grey form-button-large js-action-collection{{/classes}}\n  {{$icon}}beicons-pre beicons-pre-collection{{/icon}}\n  {{$label}}{{#translate}}project_add_to_collection_button|Add to Collection{{/translate}}{{/label}}\n{{/lib/_button}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"profile-list fake-user\">");t.b("\n" + i);t.b("  <span class=\"normal-link profile-list-image-wrap js-mini-profile\"><img class=\"profile-list-image\" src=\"/assets/img/profile/no-image-115.jpg\" /></span>");t.b("\n" + i);t.b("  <div class=\"profile-list-info profile-list-info-row\">");t.b("\n" + i);t.b("    <div class=\"profile-list-name\"><a class=\"normal-link\">");t.b(t.v(t.f("first_name",c,p,0)));t.b("</a></div><!-- /.profile-list-name -->");t.b("\n" + i);t.b("  </div><!-- /.profile-list-info -->");t.b("\n" + i);t.b("</div><!-- /.profile-list -->");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"profile-list fake-user\">\n  <span class=\"normal-link profile-list-image-wrap js-mini-profile\"><img class=\"profile-list-image\" src=\"/assets/img/profile/no-image-115.jpg\" /></span>\n  <div class=\"profile-list-info profile-list-info-row\">\n    <div class=\"profile-list-name\"><a class=\"normal-link\">{{first_name}}</a></div><!-- /.profile-list-name -->\n  </div><!-- /.profile-list-info -->\n</div><!-- /.profile-list -->\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 240:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_profileListItem": __webpack_require__(63).template,"lib/_follow/_link": __webpack_require__(130).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<lib/_profileListItem1",c,p,""));return t.fl(); },partials: {"<lib/_profileListItem1":{name:"lib/_profileListItem", partials: {"<follow_linklib/_follow/_link0":{name:"lib/_follow/_link", partials: {}, subs: { "classes": function(c,p,t,i) {t.b("profile-list-follow-link");},"type": function(c,p,t,i) {t.b("team");} }}}, subs: { "follow_link": function(c,p,t,i) {t.b(t.rp("<follow_linklib/_follow/_link0",c,p,""));} }}}, subs: {  }}, "{{<lib/_profileListItem}}\n  {{$follow_link}}\n    {{<lib/_follow/_link}}\n      {{$classes}}profile-list-follow-link{{/classes}}\n      {{$type}}team{{/type}}\n    {{/lib/_follow/_link}}\n  {{/follow_link}}\n{{/lib/_profileListItem}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div title=\"");if(t.s(t.f("translate",c,p,1),c,p,0,26,58,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("button_message_user|Message User");});c.pop();}t.b("\" class=\"");t.sub("classes",c,p,i);t.b(" js-action-message-user\" data-contact_name=\"");t.b(t.v(t.f("display_name",c,p,0)));t.b("\" data-contact_id=");t.b(t.v(t.f("id",c,p,0)));t.b(">");t.b("\n" + i);t.b("  <a class=\"form-button form-button-light-and-grey beicons-pre beicons-pre-mail\">");if(t.s(t.f("translate",c,p,1),c,p,0,300,322,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("button_message|Message");});c.pop();}t.b("</a>");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: { "classes": function(c,p,t,i) {t.b("profile-action");} }}, "<div title=\"{{#translate}}button_message_user|Message User{{/translate}}\" class=\"{{$classes}}profile-action{{/classes}} js-action-message-user\" data-contact_name=\"{{display_name}}\" data-contact_id={{id}}>\n  <a class=\"form-button form-button-light-and-grey beicons-pre beicons-pre-mail\">{{#translate}}button_message|Message{{/translate}}</a>\n</div>", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 242:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"variable-text variable-text-short js-more-toggle\">");t.sub("shortened",c,p,i);t.b("&#8230; <span class=\"js-more-toggle-link fake-link\">");if(t.s(t.f("translate",c,p,1),c,p,0,156,186,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("moretoggle_read_more|Read More");});c.pop();}t.b("</span></div>");t.b("\n" + i);t.b("<div class=\"variable-text variable-text-full hide\">");t.sub("full",c,p,i);t.b(" <span class=\"js-more-toggle-link fake-link\">");if(t.s(t.f("translate",c,p,1),c,p,0,342,372,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("moretoggle_read_less|Read Less");});c.pop();}t.b("</span></div>");return t.fl(); },partials: {}, subs: { "shortened": function(c,p,t,i) {},"full": function(c,p,t,i) {} }}, "<div class=\"variable-text variable-text-short js-more-toggle\">{{$shortened}}{{/shortened}}&#8230; <span class=\"js-more-toggle-link fake-link\">{{#translate}}moretoggle_read_more|Read More{{/translate}}</span></div>\n<div class=\"variable-text variable-text-full hide\">{{$full}}{{/full}} <span class=\"js-more-toggle-link fake-link\">{{#translate}}moretoggle_read_less|Read Less{{/translate}}</span></div>", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 243:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"js-picture-lazy\">");t.b("\n" + i);if(t.s(t.f("picture",c,p,1),c,p,0,44,334,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("sources",c,p,1),c,p,0,61,125,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <source srcset=\"");t.b(t.v(t.f("srcset",c,p,0)));t.b("\" media=\"");t.b(t.v(t.f("media_query",c,p,0)));t.b("\">");t.b("\n" + i);});c.pop();}if(t.s(t.f("img",c,p,1),c,p,0,150,323,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <img data-src=\"");t.b(t.v(t.f("src",c,p,0)));t.b("\" src=\"");t.b(t.v(t.f("IMAGESURL",c,p,0)));t.b("site/blank.png\" width=\"");t.b(t.v(t.f("width",c,p,0)));t.b("\" height=\"0\" style=\"padding-bottom: ");t.b(t.v(t.f("aspect_ratio",c,p,0)));t.b("; background: rgba(0, 0, 0, 0.03)\">");t.b("\n" + i);});c.pop();}});c.pop();}t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"js-picture-lazy\">\n  {{#picture}}\n    {{#sources}}\n      <source srcset=\"{{srcset}}\" media=\"{{media_query}}\">\n    {{/sources}}\n    {{#img}}\n      <img data-src=\"{{src}}\" src=\"{{IMAGESURL}}site/blank.png\" width=\"{{width}}\" height=\"0\" style=\"padding-bottom: {{aspect_ratio}}; background: rgba(0, 0, 0, 0.03)\">\n    {{/img}}\n  {{/picture}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_layout/_main": __webpack_require__(271).template,"project/_layout/_sidebar": __webpack_require__(274).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(t.s(t.f("project",c,p,1),c,p,0,12,347,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <div id=\"project-wrap\" class=\"js-project-wrap v-");t.b(t.v(t.f("editor_version",c,p,0)));t.b("\">");t.b("\n" + i);if(!t.s(t.f("new_project_chrome",c,p,1),c,p,1,0,0,"")){t.b(t.rp("<project/_layout/_main0",c,p,"      "));};t.b("\n" + i);if(!t.s(t.f("is_iframe",c,p,1),c,p,1,0,0,"")){t.b(t.rp("<project/_layout/_sidebar1",c,p,"      "));};t.b("\n" + i);if(t.s(t.f("new_project_chrome",c,p,1),c,p,0,276,314,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<project/_layout/_main2",c,p,"      "));});c.pop();}t.b("  </div>");t.b("\n" + i);});c.pop();}return t.fl(); },partials: {"<project/_layout/_main0":{name:"project/_layout/_main", partials: {}, subs: {  }},"<project/_layout/_sidebar1":{name:"project/_layout/_sidebar", partials: {}, subs: {  }},"<project/_layout/_main2":{name:"project/_layout/_main", partials: {}, subs: {  }}}, subs: {  }}, "{{#project}}\n  <div id=\"project-wrap\" class=\"js-project-wrap v-{{editor_version}}\">\n    {{^new_project_chrome}}\n      {{>project/_layout/_main}}\n    {{/new_project_chrome}}\n\n    {{^is_iframe}}\n      {{>project/_layout/_sidebar}}\n    {{/is_iframe}}\n\n    {{#new_project_chrome}}\n      {{>project/_layout/_main}}\n    {{/new_project_chrome}}\n  </div>\n{{/project}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_blockHeader": __webpack_require__(26).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<project/_blocks/_blockHeader0",c,p,""));return t.fl(); },partials: {"<project/_blocks/_blockHeader0":{name:"project/_blocks/_blockHeader", partials: {}, subs: { "id": function(c,p,t,i) {t.b("project-block-footer-basic-info");},"title": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,108,143,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_basic_info_label|Basic Info");});c.pop();}},"content": function(c,p,t,i) {t.b("    ");t.b(t.v(t.f("description",c,p,0)));t.b("\n" + i);t.b("    <div class=\"project-published\">");if(t.s(t.f("translate",c,p,1),c,p,0,252,285,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_published_date|Published:");});c.pop();}t.b(" <span class=\"js-format-timestamp\" data-timestamp=\"");t.b(t.v(t.f("published_on",c,p,0)));t.b("\"></span></div>");t.b("\n" + i);} }}}, subs: {  }}, "{{<project/_blocks/_blockHeader}}\n  {{$id}}project-block-footer-basic-info{{/id}}\n  {{$title}}{{#translate}}project_basic_info_label|Basic Info{{/translate}}{{/title}}\n  {{$content}}\n    {{description}}\n    <div class=\"project-published\">{{#translate}}project_published_date|Published:{{/translate}} <span class=\"js-format-timestamp\" data-timestamp=\"{{published_on}}\"></span></div>\n  {{/content}}\n{{/project/_blocks/_blockHeader}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_blockHeader": __webpack_require__(26).template,"project/_blocks/_footer/_commentsButton": __webpack_require__(247).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<project/_blocks/_blockHeader1",c,p,""));return t.fl(); },partials: {"<project/_blocks/_blockHeader1":{name:"project/_blocks/_blockHeader", partials: {"<contentproject/_blocks/_footer/_commentsButton0":{name:"project/_blocks/_footer/_commentsButton", partials: {}, subs: {  }}}, subs: { "id": function(c,p,t,i) {t.b("project-block-footer-comments");},"title": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,184,255,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_comments_title|Comments <span class=\"js-comments-total\"></span>");});c.pop();}},"content": function(c,p,t,i) {if(t.s(t.f("loggedIn",c,p,1),c,p,0,312,1369,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <div class=\"comment-post-container js-post-comment-block cfix\">");t.b("\n" + i);t.b("        <img src=\"");t.b(t.v(t.d("loggedInUser.images.115",c,p,0)));t.b("\" class=\"comment-user-image-link comment-owner-image\">");t.b("\n" + i);t.b("        <div class=\"comment-post\">");t.b("\n" + i);t.b("          <form name=\"comments_form\" method=\"post\" class=\"form clear cfix relative comments-form\" accept-charset=\"utf-8\" id=\"comments_form\" action=\"/comments/project\">");t.b("\n" + i);t.b("            <div class=\"form-item form-item-textarea\" id=\"comment-container\">");t.b("\n" + i);t.b("              <textarea name=\"comment\" class=\"form-textarea js-characters-limited js-comment-textarea\" rows=\"10\" cols=\"60\" id=\"comment\" data-validate=\"required,Generic,length[0,800]\"></textarea>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("            <div class=\"comment-link-warning js-comment-link-warning hide\">");t.b("\n" + i);t.b("              ");if(t.s(t.f("translate",c,p,1),c,p,0,1082,1180,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("comment_link_warning|Posting a link? Please note that links in comments will appear as plain text.");});c.pop();}t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b(t.rp("<contentproject/_blocks/_footer/_commentsButton0",c,p,"            "));t.b("          </form>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);});c.pop();}if(!t.s(t.f("loggedIn",c,p,1),c,p,1,0,0,"")){t.b("    <div class=\"post-comment-logged-out\">");if(t.s(t.f("translate",c,p,1),c,p,0,1456,1580,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_sign_up_to_comment|You must <a class=\"js-comments-signup link-login fake-link\">sign up</a> to join the conversation.");});c.pop();}t.b("</div>");t.b("\n" + i);};t.b("    <div>");t.b("\n" + i);t.b("      <ul class=\"js-comments-list comments-list\"></ul>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <div class=\"js-see-more comments-pagination hide\">");if(t.s(t.f("translate",c,p,1),c,p,0,1763,1806,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_see_more_comments|See More Comments");});c.pop();}t.b(" <span class=\"beicons-pre beicons-pre-arrow-down\"></span></div>");t.b("\n" + i);} }}}, subs: {  }}, "{{!TODO: use actual form/_textarea form partial instead of regular textarea}}\n{{<project/_blocks/_blockHeader}}\n  {{$id}}project-block-footer-comments{{/id}}\n  {{$title}}{{#translate}}project_comments_title|Comments <span class=\"js-comments-total\"></span>{{/translate}}{{/title}}\n  {{$content}}\n    {{#loggedIn}}\n      <div class=\"comment-post-container js-post-comment-block cfix\">\n        <img src=\"{{loggedInUser.images.115}}\" class=\"comment-user-image-link comment-owner-image\">\n        <div class=\"comment-post\">\n          <form name=\"comments_form\" method=\"post\" class=\"form clear cfix relative comments-form\" accept-charset=\"utf-8\" id=\"comments_form\" action=\"/comments/project\">\n            <div class=\"form-item form-item-textarea\" id=\"comment-container\">\n              <textarea name=\"comment\" class=\"form-textarea js-characters-limited js-comment-textarea\" rows=\"10\" cols=\"60\" id=\"comment\" data-validate=\"required,Generic,length[0,800]\"></textarea>\n            </div>\n            <div class=\"comment-link-warning js-comment-link-warning hide\">\n              {{#translate}}comment_link_warning|Posting a link? Please note that links in comments will appear as plain text.{{/translate}}\n            </div>\n            {{>project/_blocks/_footer/_commentsButton}}\n          </form>\n        </div>{{!/.comment-post}}\n      </div>{{!/.comment-post-container}}\n    {{/loggedIn}}\n    {{^loggedIn}}\n    <div class=\"post-comment-logged-out\">{{#translate}}project_sign_up_to_comment|You must <a class=\"js-comments-signup link-login fake-link\">sign up</a> to join the conversation.{{/translate}}</div>\n    {{/loggedIn}}\n    <div>\n      <ul class=\"js-comments-list comments-list\"></ul>\n    </div>\n    <div class=\"js-see-more comments-pagination hide\">{{#translate}}project_see_more_comments|See More Comments{{/translate}} <span class=\"beicons-pre beicons-pre-arrow-down\"></span></div>\n  {{/content}}\n{{/project/_blocks/_blockHeader}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_button": __webpack_require__(45).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<lib/_button0",c,p,""));return t.fl(); },partials: {"<lib/_button0":{name:"lib/_button", partials: {}, subs: { "label": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,43,85,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_post_comment_button|Post a Comment");});c.pop();}},"classes": function(c,p,t,i) {t.b("form-button-default js-submit");} }}}, subs: {  }}, "{{<lib/_button}}\n  {{$label}}{{#translate}}project_post_comment_button|Post a Comment{{/translate}}{{/label}}\n  {{$classes}}form-button-default js-submit{{/classes}}\n{{/lib/_button}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 248:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_blockHeader": __webpack_require__(26).template,"lib/_profileListItem": __webpack_require__(63).template,"lib/_follow/_userLink": __webpack_require__(76).template,"lib/_fakeUserListItem": __webpack_require__(239).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<project/_blocks/_blockHeader5",c,p,""));return t.fl(); },partials: {"<project/_blocks/_blockHeader5":{name:"project/_blocks/_blockHeader", partials: {"<contentlib/_profileListItem1":{name:"lib/_profileListItem", partials: {"<follow_linklib/_follow/_userLink0":{name:"lib/_follow/_userLink", partials: {}, subs: {  }}}, subs: { "follow_link": function(c,p,t,i) {t.b(t.rp("<follow_linklib/_follow/_userLink0",c,p,""));} }},"<contentlib/_profileListItem3":{name:"lib/_profileListItem", partials: {"<follow_linklib/_follow/_userLink2":{name:"lib/_follow/_userLink", partials: {}, subs: {  }}}, subs: { "follow_link": function(c,p,t,i) {t.b(t.rp("<follow_linklib/_follow/_userLink2",c,p,""));} }},"<contentlib/_fakeUserListItem4":{name:"lib/_fakeUserListItem", partials: {}, subs: {  }}}, subs: { "id": function(c,p,t,i) {t.b("project-block-footer-credits");},"title": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,105,134,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_credits_label|Credits");});c.pop();}},"content": function(c,p,t,i) {if(t.s(t.f("owners",c,p,1),c,p,0,189,325,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<contentlib/_profileListItem1",c,p,""));});c.pop();}if(t.s(t.f("credits",c,p,1),c,p,0,353,610,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("username",c,p,1),c,p,0,373,517,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<contentlib/_profileListItem3",c,p,""));});c.pop();}if(!t.s(t.f("username",c,p,1),c,p,1,0,0,"")){t.b(t.rp("<contentlib/_fakeUserListItem4",c,p,"        "));};});c.pop();}} }}}, subs: {  }}, "{{<project/_blocks/_blockHeader}}\n  {{$id}}project-block-footer-credits{{/id}}\n  {{$title}}{{#translate}}project_credits_label|Credits{{/translate}}{{/title}}\n  {{$content}}\n    {{#owners}}\n      {{<lib/_profileListItem}}\n        {{$follow_link}}{{>lib/_follow/_userLink}}{{/follow_link}}\n      {{/lib/_profileListItem}}\n    {{/owners}}\n    {{#credits}}\n      {{#username}}\n        {{<lib/_profileListItem}}\n          {{$follow_link}}{{>lib/_follow/_userLink}}{{/follow_link}}\n        {{/lib/_profileListItem}}\n      {{/username}}\n      {{^username}}\n        {{>lib/_fakeUserListItem}}\n      {{/username}}\n    {{/credits}}\n  {{/content}}\n{{/project/_blocks/_blockHeader}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 249:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"project-block-minimal\">");t.b("\n" + i);if(t.s(t.f("copyright",c,p,1),c,p,0,146,717,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <div id=\"project-block-copyright\">");t.b("\n" + i);t.b("    <div class=\"tooltipi-container\">");t.b("\n" + i);if(t.s(t.d("info.images",c,p,1),c,p,0,243,274,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <img src=\"");t.b(t.v(t.d(".",c,p,0)));t.b("\">");t.b("\n" + i);});c.pop();}t.b("      <div class=\"tooltipi tooltipi-white\">");t.b("\n" + i);t.b("        <div class=\"project-block-header\">");if(t.s(t.f("translate",c,p,1),c,p,0,391,434,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_copyright_info_label|Copyright Info");});c.pop();}t.b("</div>");t.b("\n" + i);t.b("        <p>");t.b(t.v(t.d("info.text",c,p,0)));t.b("</p>");t.b("\n" + i);if(t.s(t.d("info.url",c,p,1),c,p,0,505,668,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <a href=\"");t.b(t.v(t.d("info.url",c,p,0)));t.b("\">");if(t.s(t.f("translate",c,p,1),c,p,0,551,588,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_copyright_read_more|Read More");});c.pop();}t.b("<span class=\"beicons-pre beicons-pre-promote\"></span></a>");t.b("\n" + i);});c.pop();}t.b("      </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);});c.pop();}if(!t.s(t.d("owners.0.is_profile_owner",c,p,1),c,p,1,0,0,"")){t.b("    <div id=\"project-block-spam\" class=\"js-project-spam\">");if(t.s(t.f("loggedIn",c,p,1),c,p,0,835,992,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<a class=\"js-action-spam beicons-pre beicons-pre-spam\" data-type=\"project\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");if(t.s(t.f("translate",c,p,1),c,p,0,941,974,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_mark_as_spam|Mark as Spam");});c.pop();}t.b("</a>");});c.pop();}t.b("<a class=\"js-action-report beicons-pre beicons-pre-report\" data-type=\"project\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");if(t.s(t.f("translate",c,p,1),c,p,0,1115,1136,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_report|Report");});c.pop();}t.b("</a></div>");t.b("\n" + i);};t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"project-block-minimal\">{{!need to wrap the following 2 children in a shared div for css columns to behave correctly}}\n  {{#copyright}}\n  <div id=\"project-block-copyright\">\n    <div class=\"tooltipi-container\">\n      {{#info.images}}\n      <img src=\"{{.}}\">\n      {{/info.images}}\n      <div class=\"tooltipi tooltipi-white\">\n        <div class=\"project-block-header\">{{#translate}}project_copyright_info_label|Copyright Info{{/translate}}</div>\n        <p>{{info.text}}</p>\n        {{#info.url}}\n        <a href=\"{{info.url}}\">{{#translate}}project_copyright_read_more|Read More{{/translate}}<span class=\"beicons-pre beicons-pre-promote\"></span></a>\n        {{/info.url}}\n      </div>\n    </div>\n  </div>\n  {{/copyright}}\n  {{^owners.0.is_profile_owner}}\n    <div id=\"project-block-spam\" class=\"js-project-spam\">{{#loggedIn}}<a class=\"js-action-spam beicons-pre beicons-pre-spam\" data-type=\"project\" data-id=\"{{id}}\">{{#translate}}project_mark_as_spam|Mark as Spam{{/translate}}</a>{{/loggedIn}}<a class=\"js-action-report beicons-pre beicons-pre-report\" data-type=\"project\" data-id=\"{{id}}\">{{#translate}}project_report|Report{{/translate}}</a></div>\n  {{/owners.0.is_profile_owner}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 250:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_blockHeader": __webpack_require__(26).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<project/_blocks/_blockHeader0",c,p,""));return t.fl(); },partials: {"<project/_blocks/_blockHeader0":{name:"project/_blocks/_blockHeader", partials: {}, subs: { "id": function(c,p,t,i) {t.b("project-block-footer-tags");},"title": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,102,125,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_tags_label|Tags");});c.pop();}},"content": function(c,p,t,i) {if(t.s(t.f("tags",c,p,1),c,p,0,178,240,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <a href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" class=\"object-tag\">");t.b(t.v(t.f("title",c,p,0)));t.b("</a>");t.b("\n" + i);});c.pop();}} }}}, subs: {  }}, "{{<project/_blocks/_blockHeader}}\n  {{$id}}project-block-footer-tags{{/id}}\n  {{$title}}{{#translate}}project_tags_label|Tags{{/translate}}{{/title}}\n  {{$content}}\n    {{#tags}}\n      <a href=\"{{url}}\" class=\"object-tag\">{{title}}</a>\n    {{/tags}}\n  {{/content}}\n{{/project/_blocks/_blockHeader}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 251:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_blockHeader": __webpack_require__(26).template,"lib/_follow/_teamLink": __webpack_require__(240).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<project/_blocks/_blockHeader1",c,p,""));return t.fl(); },partials: {"<project/_blocks/_blockHeader1":{name:"project/_blocks/_blockHeader", partials: {"<contentlib/_follow/_teamLink0":{name:"lib/_follow/_teamLink", partials: {}, subs: {  }}}, subs: { "id": function(c,p,t,i) {t.b("project-block-footer-teams");},"title": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,103,142,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_made_for_label|Project Made For");});c.pop();}},"content": function(c,p,t,i) {if(t.s(t.f("teams",c,p,1),c,p,0,196,234,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<contentlib/_follow/_teamLink0",c,p,"      "));});c.pop();}} }}}, subs: {  }}, "{{<project/_blocks/_blockHeader}}\n  {{$id}}project-block-footer-teams{{/id}}\n  {{$title}}{{#translate}}project_made_for_label|Project Made For{{/translate}}{{/title}}\n  {{$content}}\n    {{#teams}}\n      {{>lib/_follow/_teamLink}}\n    {{/teams}}\n  {{/content}}\n{{/project/_blocks/_blockHeader}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 252:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_blockHeader": __webpack_require__(26).template,"project/_blocks/_tools": __webpack_require__(77).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<project/_blocks/_blockHeader1",c,p,""));return t.fl(); },partials: {"<project/_blocks/_blockHeader1":{name:"project/_blocks/_blockHeader", partials: {"<contentproject/_blocks/_tools0":{name:"project/_blocks/_tools", partials: {}, subs: {  }}}, subs: { "id": function(c,p,t,i) {t.b("project-block-footer-tools");},"title": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,103,138,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_tools_used_label|Tools Used");});c.pop();}},"content": function(c,p,t,i) {t.b(t.rp("<contentproject/_blocks/_tools0",c,p,"    "));} }}}, subs: {  }}, "{{<project/_blocks/_blockHeader}}\n  {{$id}}project-block-footer-tools{{/id}}\n  {{$title}}{{#translate}}project_tools_used_label|Tools Used{{/translate}}{{/title}}\n  {{$content}}\n    {{>project/_blocks/_tools}}\n  {{/content}}\n{{/project/_blocks/_blockHeader}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 253:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_sidebar/_headerNewChrome": __webpack_require__(134).template,"project/_blocks/_sidebar/_info": __webpack_require__(135).template,"project/_blocks/_sidebar/_featuresNewChrome": __webpack_require__(133).template,"project/_blocks/_tools": __webpack_require__(77).template,"project/_blocks/_aboutInner": __webpack_require__(132).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"mobile-header\">");t.b("\n");t.b("\n" + i);t.b("  <div class=\"project-data\">");t.b("\n" + i);t.b(t.rp("<project/_blocks/_sidebar/_headerNewChrome0",c,p,"    "));t.b("\n" + i);t.b("    <div class=\"project-data__highlights features-");t.b(t.v(t.d("project.num_features",c,p,0)));t.b("\">");t.b("\n" + i);t.b(t.rp("<project/_blocks/_sidebar/_info1",c,p,"      "));t.b(t.rp("<project/_blocks/_sidebar/_featuresNewChrome2",c,p,"      "));t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n");t.b("\n" + i);t.b("  <ul class=\"mobile-header__actions\">");t.b("\n" + i);t.b("    <li class=\"mobile-header__action beicons-pre beicons-pre-add-projects js-action-collection\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("      ");if(t.s(t.f("translate",c,p,1),c,p,0,474,524,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_add_to_collection_button|Add to Collection");});c.pop();}t.b("\n" + i);t.b("    </li>");t.b("\n");t.b("\n" + i);if(t.s(t.f("has_tools",c,p,1),c,p,0,568,976,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <li class=\"mobile-header__action mobile-header__action--tools beicons-pre beicons-pre-settings tooltipi-container\">");t.b("\n" + i);t.b("        ");if(t.s(t.f("translate",c,p,1),c,p,0,713,748,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_tools_used_label|Tools Used");});c.pop();}t.b("\n" + i);t.b("        <div class=\"tooltipi tooltipi-white\">");t.b("\n" + i);t.b("          <h3 class=\"project-block-header\">");if(t.s(t.f("translate",c,p,1),c,p,0,866,891,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_tools_label|Tools");});c.pop();}t.b("</h3>");t.b("\n" + i);t.b(t.rp("<project/_blocks/_tools3",c,p,"          "));t.b("        </div>");t.b("\n" + i);t.b("    </li>");t.b("\n" + i);});c.pop();}t.b("\n" + i);t.b("    <li class=\"mobile-header__action mobile-header__action--about beicons-pre tooltipi-container\">");t.b("\n" + i);t.b("      ");if(t.s(t.f("translate",c,p,1),c,p,0,1111,1136,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_about_label|About");});c.pop();}t.b("\n" + i);t.b("      <div class=\"tooltipi tooltipi-white\">");t.b("\n" + i);t.b("        <h3 class=\"project-block-header\">");if(t.s(t.f("translate",c,p,1),c,p,0,1250,1275,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_about_label|About");});c.pop();}t.b("</h3>");t.b("\n" + i);t.b(t.rp("<project/_blocks/_aboutInner4",c,p,"        "));t.b("      </div>");t.b("\n" + i);t.b("    </li>");t.b("\n" + i);t.b("  </ul>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<project/_blocks/_sidebar/_headerNewChrome0":{name:"project/_blocks/_sidebar/_headerNewChrome", partials: {}, subs: {  }},"<project/_blocks/_sidebar/_info1":{name:"project/_blocks/_sidebar/_info", partials: {}, subs: {  }},"<project/_blocks/_sidebar/_featuresNewChrome2":{name:"project/_blocks/_sidebar/_featuresNewChrome", partials: {}, subs: {  }},"<project/_blocks/_tools3":{name:"project/_blocks/_tools", partials: {}, subs: {  }},"<project/_blocks/_aboutInner4":{name:"project/_blocks/_aboutInner", partials: {}, subs: {  }}}, subs: {  }}, "<div id=\"mobile-header\">\n\n  <div class=\"project-data\">\n    {{>project/_blocks/_sidebar/_headerNewChrome}}\n\n    <div class=\"project-data__highlights features-{{project.num_features}}\">\n      {{>project/_blocks/_sidebar/_info}}\n      {{>project/_blocks/_sidebar/_featuresNewChrome}}\n    </div>\n  </div>\n\n  <ul class=\"mobile-header__actions\">\n    <li class=\"mobile-header__action beicons-pre beicons-pre-add-projects js-action-collection\" data-id=\"{{id}}\">\n      {{#translate}}project_add_to_collection_button|Add to Collection{{/translate}}\n    </li>\n\n    {{#has_tools}}\n      <li class=\"mobile-header__action mobile-header__action--tools beicons-pre beicons-pre-settings tooltipi-container\">\n        {{#translate}}project_tools_used_label|Tools Used{{/translate}}\n        <div class=\"tooltipi tooltipi-white\">\n          <h3 class=\"project-block-header\">{{#translate}}project_tools_label|Tools{{/translate}}</h3>\n          {{>project/_blocks/_tools}}\n        </div>\n    </li>\n  {{/has_tools}}\n\n    <li class=\"mobile-header__action mobile-header__action--about beicons-pre tooltipi-container\">\n      {{#translate}}project_about_label|About{{/translate}}\n      <div class=\"tooltipi tooltipi-white\">\n        <h3 class=\"project-block-header\">{{#translate}}project_about_label|About{{/translate}}</h3>\n        {{>project/_blocks/_aboutInner}}\n      </div>\n    </li>\n  </ul>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 254:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_button": __webpack_require__(45).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<lib/_button0",c,p,""));return t.fl(); },partials: {"<lib/_button0":{name:"lib/_button", partials: {}, subs: { "attrs": function(c,p,t,i) {t.b("href=\"");t.b(t.v(t.d("URLS.edit",c,p,0)));t.b("\"");},"containerClasses": function(c,p,t,i) {t.b("edit-project-container hide-phone");},"icon": function(c,p,t,i) {t.b("beicons-pre beicons-pre-edit");},"label": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,213,245,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_edit_button|Edit Project");});c.pop();}} }}}, subs: {  }}, "{{<lib/_button}}\n  {{$attrs}}href=\"{{URLS.edit}}\"{{/attrs}}\n  {{$containerClasses}}edit-project-container hide-phone{{/containerClasses}}\n  {{$icon}}beicons-pre beicons-pre-edit{{/icon}}\n  {{$label}}{{#translate}}project_edit_button|Edit Project{{/translate}}{{/label}}\n{{/lib/_button}}", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 255:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_button": __webpack_require__(45).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<lib/_button0",c,p,""));return t.fl(); },partials: {"<lib/_button0":{name:"lib/_button", partials: {}, subs: { "attrs": function(c,p,t,i) {t.b("href=\"");t.b(t.v(t.d("URLS.edit",c,p,0)));t.b("\"");},"containerClasses": function(c,p,t,i) {t.b("edit-project-container hide-phone");},"classes": function(c,p,t,i) {t.b("form-button-default form-button-small");},"icon": function(c,p,t,i) {t.b("beicons-pre beicons-pre-edit");},"label": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,277,309,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_edit_button|Edit Project");});c.pop();}} }}}, subs: {  }}, "{{<lib/_button}}\n  {{$attrs}}href=\"{{URLS.edit}}\"{{/attrs}}\n  {{$containerClasses}}edit-project-container hide-phone{{/containerClasses}}\n  {{$classes}}form-button-default form-button-small{{/classes}}\n  {{$icon}}beicons-pre beicons-pre-edit{{/icon}}\n  {{$label}}{{#translate}}project_edit_button|Edit Project{{/translate}}{{/label}}\n{{/lib/_button}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_blockHeader": __webpack_require__(26).template,"project/_blocks/_aboutInner": __webpack_require__(132).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<project/_blocks/_blockHeader1",c,p,""));t.b("\n");t.b("\n");return t.fl(); },partials: {"<project/_blocks/_blockHeader1":{name:"project/_blocks/_blockHeader", partials: {"<contentproject/_blocks/_aboutInner0":{name:"project/_blocks/_aboutInner", partials: {}, subs: {  }}}, subs: { "id": function(c,p,t,i) {t.b("project-block-sidebar-about");},"title": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,104,129,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_about_label|About");});c.pop();}},"class": function(c,p,t,i) {t.b("hide-sticky");},"content": function(c,p,t,i) {t.b(t.rp("<contentproject/_blocks/_aboutInner0",c,p,"    "));} }}}, subs: {  }}, "{{<project/_blocks/_blockHeader}}\n  {{$id}}project-block-sidebar-about{{/id}}\n  {{$title}}{{#translate}}project_about_label|About{{/translate}}{{/title}}\n  {{$class}}hide-sticky{{/class}}\n  {{$content}}\n    {{>project/_blocks/_aboutInner}}\n  {{/content}}\n{{/project/_blocks/_blockHeader}}\n\n\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_blockHeader": __webpack_require__(26).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<project/_blocks/_blockHeader0",c,p,""));return t.fl(); },partials: {"<project/_blocks/_blockHeader0":{name:"project/_blocks/_blockHeader", partials: {}, subs: { "id": function(c,p,t,i) {t.b("project-block-sidebar-admin-notice");},"title": function(c,p,t,i) {t.b("<span class=\"beicons-pre beicons-pre-report\">");t.b(t.v(t.f("title",c,p,0)));t.b("</span>");},"class": function(c,p,t,i) {t.b("hide-sticky");},"content": function(c,p,t,i) {t.b("    ");t.b(t.t(t.f("body",c,p,0)));t.b("\n" + i);} }}}, subs: {  }}, "{{<project/_blocks/_blockHeader}}\n  {{$id}}project-block-sidebar-admin-notice{{/id}}\n  {{$title}}<span class=\"beicons-pre beicons-pre-report\">{{title}}</span>{{/title}}\n  {{$class}}hide-sticky{{/class}}\n  {{$content}}\n    {{{body}}}\n  {{/content}}\n{{/project/_blocks/_blockHeader}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 258:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_block": __webpack_require__(50).template,"lib/_button": __webpack_require__(45).template,"lib/_collection/_addLarge": __webpack_require__(238).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<project/_blocks/_block3",c,p,""));return t.fl(); },partials: {"<project/_blocks/_block3":{name:"project/_blocks/_block", partials: {"<contentlib/_button0":{name:"lib/_button", partials: {}, subs: { "containerClasses": function(c,p,t,i) {t.b("form-item-appreciate");},"classes": function(c,p,t,i) {t.b("thumb form-button-default form-button-large");},"icon": function(c,p,t,i) {t.b("beicons-pre beicons-pre-thumb");},"label": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,415,460,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_appreciate_project|Appreciate Project");});c.pop();}} }},"<contentlib/_button1":{name:"lib/_button", partials: {}, subs: { "icon": function(c,p,t,i) {},"containerClasses": function(c,p,t,i) {t.b("form-item-thanks");},"classes": function(c,p,t,i) {t.b("text form-button-dark form-button-large");},"label": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,824,863,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_appreciate_thank_you|Thank you!");});c.pop();}} }},"<contentlib/_collection/_addLarge2":{name:"lib/_collection/_addLarge", partials: {}, subs: {  }}}, subs: { "content": function(c,p,t,i) {t.b("    <div class=\"appreciation-button js-appreciate\" data-render-pulse-point=\"true\" data-appreciate-from=\"sidebar\">");t.b("\n" + i);t.b(t.rp("<contentlib/_button0",c,p,""));t.b(t.rp("<contentlib/_button1",c,p,""));t.b("      <div class=\"js-appreciation-date project-appreciation-date beicons-pre beicons-pre-thumb\"></div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b(t.rp("<contentlib/_collection/_addLarge2",c,p,"    "));} }}}, subs: {  }}, "{{<project/_blocks/_block}}\n  {{$content}}\n    <div class=\"appreciation-button js-appreciate\" data-render-pulse-point=\"true\" data-appreciate-from=\"sidebar\">\n      {{<lib/_button}}\n        {{$containerClasses}}form-item-appreciate{{/containerClasses}}\n        {{$classes}}thumb form-button-default form-button-large{{/classes}}\n        {{$icon}}beicons-pre beicons-pre-thumb{{/icon}}\n        {{$label}}{{#translate}}project_appreciate_project|Appreciate Project{{/translate}}{{/label}}\n      {{/lib/_button}}\n      {{! need to set an empty icon value below, otherwise it inherits from the button above}}\n      {{<lib/_button}}\n        {{$icon}}{{/icon}}\n        {{$containerClasses}}form-item-thanks{{/containerClasses}}\n        {{$classes}}text form-button-dark form-button-large{{/classes}}\n        {{$label}}{{#translate}}project_appreciate_thank_you|Thank you!{{/translate}}{{/label}}\n      {{/lib/_button}}\n      <div class=\"js-appreciation-date project-appreciation-date beicons-pre beicons-pre-thumb\"></div>\n    </div>\n    {{>lib/_collection/_addLarge}}\n  {{/content}}\n{{/project/_blocks/_block}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_block": __webpack_require__(50).template,"lib/_button": __webpack_require__(45).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<project/_blocks/_block2",c,p,""));return t.fl(); },partials: {"<project/_blocks/_block2":{name:"project/_blocks/_block", partials: {"<contentlib/_button0":{name:"lib/_button", partials: {}, subs: { "containerClasses": function(c,p,t,i) {t.b("form-item-appreciate");},"classes": function(c,p,t,i) {t.b("thumb form-button-default form-button-large");},"icon": function(c,p,t,i) {t.b("beicons-pre beicons-pre-thumb");},"label": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,429,474,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_appreciate_project|Appreciate Project");});c.pop();}} }},"<contentlib/_button1":{name:"lib/_button", partials: {}, subs: { "icon": function(c,p,t,i) {},"containerClasses": function(c,p,t,i) {t.b("form-item-thanks");},"classes": function(c,p,t,i) {t.b("text form-button-dark form-button-large");},"label": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,838,877,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_appreciate_thank_you|Thank you!");});c.pop();}} }}}, subs: { "class": function(c,p,t,i) {t.b("project-block--buttons");},"content": function(c,p,t,i) {t.b("    <div class=\"appreciation-button js-appreciate\" data-render-pulse-point=\"true\">");t.b("\n" + i);t.b(t.rp("<contentlib/_button0",c,p,""));t.b(t.rp("<contentlib/_button1",c,p,""));t.b("      <div class=\"js-appreciation-date project-appreciation-date beicons-pre beicons-pre-thumb\"></div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);} }}}, subs: {  }}, "{{<project/_blocks/_block}}\n  {{$class}}project-block--buttons{{/class}}\n  {{$content}}\n    <div class=\"appreciation-button js-appreciate\" data-render-pulse-point=\"true\">\n      {{<lib/_button}}\n        {{$containerClasses}}form-item-appreciate{{/containerClasses}}\n        {{$classes}}thumb form-button-default form-button-large{{/classes}}\n        {{$icon}}beicons-pre beicons-pre-thumb{{/icon}}\n        {{$label}}{{#translate}}project_appreciate_project|Appreciate Project{{/translate}}{{/label}}\n      {{/lib/_button}}\n      {{! need to set an empty icon value below, otherwise it inherits from the button above}}\n      {{<lib/_button}}\n        {{$icon}}{{/icon}}\n        {{$containerClasses}}form-item-thanks{{/containerClasses}}\n        {{$classes}}text form-button-dark form-button-large{{/classes}}\n        {{$label}}{{#translate}}project_appreciate_thank_you|Thank you!{{/translate}}{{/label}}\n      {{/lib/_button}}\n      <div class=\"js-appreciation-date project-appreciation-date beicons-pre beicons-pre-thumb\"></div>\n    </div>\n  {{/content}}\n{{/project/_blocks/_block}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 26:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"");t.sub("id",c,p,i);t.b("\" class=\"project-block ");t.sub("class",c,p,i);t.b("\">");t.b("\n" + i);t.b("  <h3 class=\"project-block-header\">");t.sub("title",c,p,i);t.b("</h3>");t.b("\n" + i);t.sub("content",c,p,i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: { "id": function(c,p,t,i) {},"class": function(c,p,t,i) {},"title": function(c,p,t,i) {},"content": function(c,p,t,i) {} }}, "<div id=\"{{$id}}{{/id}}\" class=\"project-block {{$class}}{{/class}}\">\n  <h3 class=\"project-block-header\">{{$title}}{{/title}}</h3>\n  {{$content}}{{/content}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_blockHeader": __webpack_require__(26).template,"project/_blocks/_owner": __webpack_require__(98).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<project/_blocks/_blockHeader1",c,p,""));return t.fl(); },partials: {"<project/_blocks/_blockHeader1":{name:"project/_blocks/_blockHeader", partials: {"<contentproject/_blocks/_owner0":{name:"project/_blocks/_owner", partials: {}, subs: { "ownerInfoClasses": function(c,p,t,i) {t.b("project-owner-info--header");} }}}, subs: { "id": function(c,p,t,i) {t.b("project-block-sidebar-owner");},"title": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,105,132,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_by_label|Project by");});c.pop();}},"content": function(c,p,t,i) {t.b(t.rp("<contentproject/_blocks/_owner0",c,p,""));} }}}, subs: {  }}, "{{<project/_blocks/_blockHeader}}\n  {{$id}}project-block-sidebar-owner{{/id}}\n\n  {{$title}}{{#translate}}project_by_label|Project by{{/translate}}{{/title}}\n\n  {{$content}}\n    {{<project/_blocks/_owner}}\n      {{$ownerInfoClasses}}project-owner-info--header{{/ownerInfoClasses}}\n    {{/project/_blocks/_owner}}\n  {{/content}}\n{{/project/_blocks/_blockHeader}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_block": __webpack_require__(50).template,"lib/_button": __webpack_require__(45).template,"talent/_addedTalentSearchList": __webpack_require__(114).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<project/_blocks/_block2",c,p,""));return t.fl(); },partials: {"<project/_blocks/_block2":{name:"project/_blocks/_block", partials: {"<contentlib/_button0":{name:"lib/_button", partials: {}, subs: { "attrs": function(c,p,t,i) {t.b("data-id=\"");t.b(t.v(t.d("owners.0.id",c,p,0)));t.b("\"");},"icon": function(c,p,t,i) {t.b("beicons-pre beicons-pre-adobe");},"classes": function(c,p,t,i) {t.b("js-add-talent form-button-default form-button-large");},"label": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,335,382,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_button_save_candidate|Save as Candidate");});c.pop();}} }},"<contenttalent/_addedTalentSearchList1":{name:"talent/_addedTalentSearchList", partials: {}, subs: {  }}}, subs: { "id": function(c,p,t,i) {t.b("project-block-sidebar-save-candidate");},"content": function(c,p,t,i) {t.b(t.rp("<contentlib/_button0",c,p,""));t.b("    <span class=\"js-added-talent-searches\">");t.b("\n" + i);if(t.s(t.f("creative_index",c,p,1),c,p,0,497,532,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<contenttalent/_addedTalentSearchList1",c,p,""));});c.pop();}t.b("    </span>");t.b("\n" + i);} }}}, subs: {  }}, "{{<project/_blocks/_block}}\n  {{$id}}project-block-sidebar-save-candidate{{/id}}\n  {{$content}}\n    {{<lib/_button}}\n      {{$attrs}}data-id=\"{{owners.0.id}}\"{{/attrs}}\n      {{$icon}}beicons-pre beicons-pre-adobe{{/icon}}\n      {{$classes}}js-add-talent form-button-default form-button-large{{/classes}}\n      {{$label}}{{#translate}}project_button_save_candidate|Save as Candidate{{/translate}}{{/label}}\n    {{/lib/_button}}\n    <span class=\"js-added-talent-searches\">\n      {{#creative_index}}{{> talent/_addedTalentSearchList}}{{/creative_index}}\n    </span>\n  {{/content}}\n{{/project/_blocks/_block}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_blockHeader": __webpack_require__(26).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<project/_blocks/_blockHeader0",c,p,""));return t.fl(); },partials: {"<project/_blocks/_blockHeader0":{name:"project/_blocks/_blockHeader", partials: {}, subs: { "id": function(c,p,t,i) {t.b("project-block-sidebar-similar-creatives");},"title": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,116,165,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_similar_creatives_label|Similar Creatives");});c.pop();}},"class": function(c,p,t,i) {t.b("hide-sticky");},"content": function(c,p,t,i) {t.b("    <a href=\"");t.b(t.v(t.d("creative_index.view_similar_creatives_url",c,p,0)));t.b("\" class=\"ts-view-more js-search-users-similar\" target=\"_blank\">");if(t.s(t.f("translate",c,p,1),c,p,0,374,410,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_candidates_view_all|View all");});c.pop();}t.b(" &rarr;</a>");t.b("\n" + i);t.b("    <ul class=\"ts-similar-creatives ts-similar-items\">");t.b("\n" + i);if(t.s(t.d("creative_index.similar",c,p,1),c,p,0,524,770,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <li class=\"ts-similar");if(!t.s(t.f("url",c,p,1),c,p,1,0,0,"")){t.b(" empty");};t.b("\">");t.b("\n" + i);if(t.s(t.f("url",c,p,1),c,p,0,593,743,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("          <a href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" target=\"_blank\" class=\"js-mini-profile\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("            <img src=\"");t.b(t.v(t.d("images.50",c,p,0)));t.b("\" />");t.b("\n" + i);t.b("          </a>");t.b("\n" + i);});c.pop();}t.b("      </li>");t.b("\n" + i);});c.pop();}t.b("    </ul>");t.b("\n" + i);} }}}, subs: {  }}, "{{<project/_blocks/_blockHeader}}\n  {{$id}}project-block-sidebar-similar-creatives{{/id}}\n  {{$title}}{{#translate}}project_similar_creatives_label|Similar Creatives{{/translate}}{{/title}}\n  {{$class}}hide-sticky{{/class}}\n  {{$content}}\n    <a href=\"{{creative_index.view_similar_creatives_url}}\" class=\"ts-view-more js-search-users-similar\" target=\"_blank\">{{#translate}}project_candidates_view_all|View all{{/translate}} &rarr;</a>\n    <ul class=\"ts-similar-creatives ts-similar-items\">\n      {{#creative_index.similar}}\n      <li class=\"ts-similar{{^url}} empty{{/url}}\">\n        {{#url}}\n          <a href=\"{{url}}\" target=\"_blank\" class=\"js-mini-profile\" data-id=\"{{id}}\">\n            <img src=\"{{images.50}}\" />\n          </a>\n        {{/url}}\n      </li>\n      {{/creative_index.similar}}\n    </ul>\n  {{/content}}\n{{/project/_blocks/_blockHeader}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_blockHeader": __webpack_require__(26).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<project/_blocks/_blockHeader0",c,p,""));return t.fl(); },partials: {"<project/_blocks/_blockHeader0":{name:"project/_blocks/_blockHeader", partials: {}, subs: { "id": function(c,p,t,i) {t.b("project-block-sidebar-similar-projects");},"title": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,115,162,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_similar_projects_label|Similar Projects");});c.pop();}},"class": function(c,p,t,i) {t.b("hide-sticky");},"content": function(c,p,t,i) {t.b("    <a href=\"");t.b(t.v(t.d("similar_projects.view_similar_projects_url",c,p,0)));t.b("\" class=\"ts-view-more js-search-projects-similar\" target=\"_blank\">");if(t.s(t.f("translate",c,p,1),c,p,0,375,417,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_similar_projects_view_all|View all");});c.pop();}t.b(" &rarr;</a>");t.b("\n" + i);t.b("    <ul class=\"ts-similar-projects ts-similar-items\">");t.b("\n" + i);if(t.s(t.d("similar_projects.similar_projects",c,p,1),c,p,0,541,729,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <li class=\"ts-similar");if(!t.s(t.f("url",c,p,1),c,p,1,0,0,"")){t.b(" empty");};t.b("\">");t.b("\n" + i);if(t.s(t.f("url",c,p,1),c,p,0,610,702,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("          <a href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\">");t.b("\n" + i);t.b("            <img src=\"");t.b(t.v(t.d("covers.115",c,p,0)));t.b("\">");t.b("\n" + i);t.b("          </a>");t.b("\n" + i);});c.pop();}t.b("      </li>");t.b("\n" + i);});c.pop();}t.b("    </ul>");t.b("\n" + i);} }}}, subs: {  }}, "{{<project/_blocks/_blockHeader}}\n  {{$id}}project-block-sidebar-similar-projects{{/id}}\n  {{$title}}{{#translate}}project_similar_projects_label|Similar Projects{{/translate}}{{/title}}\n  {{$class}}hide-sticky{{/class}}\n  {{$content}}\n    <a href=\"{{similar_projects.view_similar_projects_url}}\" class=\"ts-view-more js-search-projects-similar\" target=\"_blank\">{{#translate}}project_similar_projects_view_all|View all{{/translate}} &rarr;</a>\n    <ul class=\"ts-similar-projects ts-similar-items\">\n      {{#similar_projects.similar_projects}}\n      <li class=\"ts-similar{{^url}} empty{{/url}}\">\n        {{#url}}\n          <a href=\"{{url}}\">\n            <img src=\"{{covers.115}}\">\n          </a>\n        {{/url}}\n      </li>\n      {{/similar_projects.similar_projects}}\n    </ul>\n  {{/content}}\n{{/project/_blocks/_blockHeader}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 264:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_blockHeader": __webpack_require__(26).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<project/_blocks/_blockHeader0",c,p,""));return t.fl(); },partials: {"<project/_blocks/_blockHeader0":{name:"project/_blocks/_blockHeader", partials: {}, subs: { "id": function(c,p,t,i) {t.b("project-block-sidebar-ts");},"title": function(c,p,t,i) {t.b("<span class=\"beicons-pre beicons-pre-adobe\">");if(t.s(t.f("translate",c,p,1),c,p,0,145,195,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("talent_sidebar_adobe_talent_info|Adobe Talent Info");});c.pop();}t.b("</span>");},"content": function(c,p,t,i) {t.b("    <div class=\"ts-title ts-creative-info\">");t.b(t.v(t.d("founder.occupation",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("    <div class=\"ts-company ts-creative-info\">");t.b(t.v(t.d("founder.company",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("    <div class=\"ts-links\">");t.b("\n" + i);if(t.s(t.d("founder.website",c,p,1),c,p,0,438,692,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <div class=\"ts-link ts-creative-info\">");t.b("\n" + i);t.b("        <a href=\"");t.b(t.v(t.d("founder.website",c,p,0)));t.b("\" target=\"_blank\">");if(t.s(t.f("translate",c,p,1),c,p,0,552,600,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("talent_sidebar_personal_website|Personal Website");});c.pop();}t.b(" <span class=\"beicons-pre beicons-pre-promote\"></span></a>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);});c.pop();}if(t.s(t.d("founder.resume_url",c,p,1),c,p,0,742,979,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <div class=\"ts-link ts-creative-info\">");t.b("\n" + i);t.b("        <a href=\"");t.b(t.v(t.d("founder.resume_url",c,p,0)));t.b("\" target=\"_blank\">");if(t.s(t.f("translate",c,p,1),c,p,0,859,887,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("talent_sidebar_resume|Resume");});c.pop();}t.b(" <span class=\"beicons-pre beicons-pre-promote\"></span></a>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);});c.pop();}if(t.s(t.d("founder.social_links.linkedin",c,p,1),c,p,0,1043,1315,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <div class=\"ts-link ts-creative-info\">");t.b("\n" + i);t.b("        <a href=\"");t.b(t.v(t.d("founder.social_links.linkedin.url",c,p,0)));t.b("\" target=\"_blank\">");if(t.s(t.f("translate",c,p,1),c,p,0,1175,1223,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("talent_sidebar_linkedin_profile|Linkedin Profile");});c.pop();}t.b(" <span class=\"beicons-pre beicons-pre-promote\"></span></a>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);});c.pop();}t.b("    </div>");t.b("\n" + i);} }}}, subs: {  }}, "{{<project/_blocks/_blockHeader}}\n  {{$id}}project-block-sidebar-ts{{/id}}\n  {{$title}}<span class=\"beicons-pre beicons-pre-adobe\">{{#translate}}talent_sidebar_adobe_talent_info|Adobe Talent Info{{/translate}}</span>{{/title}}\n  {{$content}}\n    <div class=\"ts-title ts-creative-info\">{{founder.occupation}}</div>\n    <div class=\"ts-company ts-creative-info\">{{founder.company}}</div>\n    <div class=\"ts-links\">\n      {{#founder.website}}\n      <div class=\"ts-link ts-creative-info\">\n        <a href=\"{{founder.website}}\" target=\"_blank\">{{#translate}}talent_sidebar_personal_website|Personal Website{{/translate}} <span class=\"beicons-pre beicons-pre-promote\"></span></a>\n      </div>\n      {{/founder.website}}\n      {{#founder.resume_url}}\n      <div class=\"ts-link ts-creative-info\">\n        <a href=\"{{founder.resume_url}}\" target=\"_blank\">{{#translate}}talent_sidebar_resume|Resume{{/translate}} <span class=\"beicons-pre beicons-pre-promote\"></span></a>\n      </div>\n      {{/founder.resume_url}}\n      {{#founder.social_links.linkedin}}\n      <div class=\"ts-link ts-creative-info\">\n        <a href=\"{{founder.social_links.linkedin.url}}\" target=\"_blank\">{{#translate}}talent_sidebar_linkedin_profile|Linkedin Profile{{/translate}} <span class=\"beicons-pre beicons-pre-promote\"></span></a>\n      </div>\n      {{/founder.social_links.linkedin}}\n    </div>\n  {{/content}}\n{{/project/_blocks/_blockHeader}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_block": __webpack_require__(50).template,"project/_blocks/_tools": __webpack_require__(77).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<project/_blocks/_block1",c,p,""));return t.fl(); },partials: {"<project/_blocks/_block1":{name:"project/_blocks/_block", partials: {"<contentproject/_blocks/_tools0":{name:"project/_blocks/_tools", partials: {}, subs: {  }}}, subs: { "content": function(c,p,t,i) {t.b(t.rp("<contentproject/_blocks/_tools0",c,p,"    "));} }}}, subs: {  }}, "{{<project/_blocks/_block}}\n  {{$content}}\n    {{>project/_blocks/_tools}}\n  {{/content}}\n{{/project/_blocks/_block}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_blockHeader": __webpack_require__(26).template,"project/_blocks/_tools": __webpack_require__(77).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<project/_blocks/_blockHeader1",c,p,""));return t.fl(); },partials: {"<project/_blocks/_blockHeader1":{name:"project/_blocks/_blockHeader", partials: {"<contentproject/_blocks/_tools0":{name:"project/_blocks/_tools", partials: {}, subs: {  }}}, subs: { "id": function(c,p,t,i) {t.b("project-block-sidebar-tools");},"class": function(c,p,t,i) {t.b("hide-sticky");},"title": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,138,173,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_tools_used_label|Tools Used");});c.pop();}},"content": function(c,p,t,i) {t.b(t.rp("<contentproject/_blocks/_tools0",c,p,"    "));} }}}, subs: {  }}, "{{<project/_blocks/_blockHeader}}\n  {{$id}}project-block-sidebar-tools{{/id}}\n  {{$class}}hide-sticky{{/class}}\n  {{$title}}{{#translate}}project_tools_used_label|Tools Used{{/translate}}{{/title}}\n  {{$content}}\n    {{>project/_blocks/_tools}}\n  {{/content}}\n{{/project/_blocks/_blockHeader}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"project-stat beicons-pre beicons-pre-");t.sub("icon",c,p,i);t.b(" ");t.sub("class",c,p,i);t.b("\">");t.b("\n" + i);t.b("  ");t.sub("count",c,p,i);t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: { "icon": function(c,p,t,i) {t.b("eye");},"class": function(c,p,t,i) {},"count": function(c,p,t,i) {t.b("0");} }}, "<div class=\"project-stat beicons-pre beicons-pre-{{$icon}}eye{{/icon}} {{$class}}{{/class}}\">\n  {{$count}}0{{/count}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_collection/_add": __webpack_require__(237).template,"lib/_follow/_buttonUser": __webpack_require__(129).template,"lib/_follow/_buttonAll": __webpack_require__(127).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"appreciation\" class=\"show-on-preview unclickable-mask appreciation-button js-appreciate\" data-appreciate-from=\"project\">");t.b("\n" + i);t.b("  <div id=\"sticker\">");t.b("\n" + i);t.b("    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" preserveAspectRatio=\"xMidYMid\" width=\"180\" height=\"180\" viewBox=\"0 0 90 90\" fill=\"url('#appreciation-gradient')\">");t.b("\n" + i);t.b("  		<defs>");t.b("\n" + i);t.b("        <linearGradient id=\"appreciation-gradient\" x1=\"0\" x2=\"0\" y1=\"0\" y2=\"1\">");t.b("\n" + i);t.b("          <stop class=\"appreciation-stop-1\" offset=\"0%\"/>");t.b("\n" + i);t.b("          <stop class=\"appreciation-stop-2\" offset=\"100%\"/>");t.b("\n" + i);t.b("        </linearGradient>");t.b("\n" + i);t.b("      </defs>");t.b("\n" + i);t.b("      <path d=\"M89.999 45 C89.999 46.6 85.8 48 85.7 49.6 C85.481 51.2 89.2 53.5 88.9 55 C88.521 56.6 84.2 57 83.6 58.5 C83.096 60.1 86.2 63.1 85.5 64.5 C84.849 66 80.5 65.4 79.6 66.8 C78.791 68.1 81.2 71.8 80.2 73.1 C79.177 74.3 75.1 72.8 73.9 73.9 C72.794 75.1 74.3 79.2 73.1 80.2 C71.802 81.2 68.1 78.8 66.8 79.7 C65.411 80.5 66 84.9 64.5 85.6 C63.087 86.3 60 83.1 58.5 83.6 C57.008 84.2 56.6 88.5 55 88.9 C53.459 89.2 51.2 85.5 49.6 85.7 C48.002 85.8 46.6 90 45 90 C43.370 90 42 85.8 40.4 85.7 C38.799 85.5 36.5 89.2 35 88.9 C33.403 88.5 33 84.2 31.5 83.6 C29.953 83.1 26.9 86.3 25.5 85.6 C24.013 84.9 24.6 80.5 23.2 79.7 C21.863 78.8 18.2 81.2 16.9 80.2 C15.680 79.2 17.2 75.1 16.1 73.9 C14.927 72.8 10.8 74.3 9.8 73.1 C8.811 71.8 11.2 68.1 10.3 66.8 C9.491 65.4 5.1 66 4.4 64.5 C3.748 63.1 6.9 60.1 6.4 58.5 C5.837 57 1.5 56.6 1.1 55 C0.761 53.5 4.5 51.2 4.3 49.6 C4.157 48 -0 46.6 -0 45 C-0.005 43.4 4.2 42 4.3 40.4 C4.513 38.8 0.8 36.5 1.1 35 C1.473 33.4 5.8 33 6.4 31.5 C6.898 30 3.7 26.9 4.4 25.5 C5.144 24 9.5 24.6 10.3 23.2 C11.203 21.9 8.8 18.2 9.8 16.9 C10.817 15.7 14.9 17.2 16.1 16.1 C17.200 14.9 15.7 10.8 16.9 9.8 C18.191 8.8 21.9 11.2 23.2 10.4 C24.583 9.5 24 5.2 25.5 4.5 C26.907 3.8 30 6.9 31.5 6.4 C32.986 5.8 33.4 1.5 35 1.1 C36.535 0.8 38.8 4.5 40.4 4.3 C41.991 4.2 43.4 0 45 0 C46.623 0 48 4.2 49.6 4.3 C51.195 4.5 53.5 0.8 55 1.1 C56.591 1.5 57 5.8 58.5 6.4 C60.041 6.9 63.1 3.8 64.5 4.5 C65.981 5.2 65.4 9.5 66.8 10.4 C68.131 11.2 71.8 8.8 73.1 9.8 C74.314 10.8 72.8 14.9 73.9 16.1 C75.067 17.2 79.2 15.7 80.2 16.9 C81.183 18.2 78.8 21.9 79.6 23.2 C80.503 24.6 84.8 24 85.6 25.5 C86.246 26.9 83.1 30 83.6 31.5 C84.157 33 88.5 33.4 88.9 35 C89.233 36.5 85.5 38.8 85.7 40.4 C85.837 42 90 43.4 90 45 Z\"/>");t.b("\n" + i);t.b("    </svg>");t.b("\n" + i);t.b("    <div class=\"thumb beicons-pre beicons-pre-thumb\"></div>");t.b("\n" + i);t.b("    <div class=\"text\">");if(t.s(t.f("translate",c,p,1),c,p,0,2436,2476,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_apprecation_thank_you|Thank You!");});c.pop();}t.b("</div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <div class=\"js-appreciation-date project-appreciation-date beicons-pre beicons-pre-thumb\"></div>");t.b("\n" + i);t.b("  <div class=\"tooltipi tooltipi-white\">");t.b("\n" + i);t.b(t.rp("<lib/_collection/_add0",c,p,"    "));if(!t.s(t.f("has_multiple_owners",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("owners",c,p,1),c,p,0,2714,2742,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_follow/_buttonUser1",c,p,""));});c.pop();}};if(t.s(t.f("has_multiple_owners",c,p,1),c,p,0,2806,2833,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_follow/_buttonAll2",c,p,""));});c.pop();}t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<lib/_collection/_add0":{name:"lib/_collection/_add", partials: {}, subs: {  }},"<lib/_follow/_buttonUser1":{name:"lib/_follow/_buttonUser", partials: {}, subs: {  }},"<lib/_follow/_buttonAll2":{name:"lib/_follow/_buttonAll", partials: {}, subs: {  }}}, subs: {  }}, "<div id=\"appreciation\" class=\"show-on-preview unclickable-mask appreciation-button js-appreciate\" data-appreciate-from=\"project\">\n  <div id=\"sticker\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" preserveAspectRatio=\"xMidYMid\" width=\"180\" height=\"180\" viewBox=\"0 0 90 90\" fill=\"url('#appreciation-gradient')\">\n  \t\t<defs>\n        <linearGradient id=\"appreciation-gradient\" x1=\"0\" x2=\"0\" y1=\"0\" y2=\"1\">\n          <stop class=\"appreciation-stop-1\" offset=\"0%\"/>\n          <stop class=\"appreciation-stop-2\" offset=\"100%\"/>\n        </linearGradient>\n      </defs>\n      <path d=\"M89.999 45 C89.999 46.6 85.8 48 85.7 49.6 C85.481 51.2 89.2 53.5 88.9 55 C88.521 56.6 84.2 57 83.6 58.5 C83.096 60.1 86.2 63.1 85.5 64.5 C84.849 66 80.5 65.4 79.6 66.8 C78.791 68.1 81.2 71.8 80.2 73.1 C79.177 74.3 75.1 72.8 73.9 73.9 C72.794 75.1 74.3 79.2 73.1 80.2 C71.802 81.2 68.1 78.8 66.8 79.7 C65.411 80.5 66 84.9 64.5 85.6 C63.087 86.3 60 83.1 58.5 83.6 C57.008 84.2 56.6 88.5 55 88.9 C53.459 89.2 51.2 85.5 49.6 85.7 C48.002 85.8 46.6 90 45 90 C43.370 90 42 85.8 40.4 85.7 C38.799 85.5 36.5 89.2 35 88.9 C33.403 88.5 33 84.2 31.5 83.6 C29.953 83.1 26.9 86.3 25.5 85.6 C24.013 84.9 24.6 80.5 23.2 79.7 C21.863 78.8 18.2 81.2 16.9 80.2 C15.680 79.2 17.2 75.1 16.1 73.9 C14.927 72.8 10.8 74.3 9.8 73.1 C8.811 71.8 11.2 68.1 10.3 66.8 C9.491 65.4 5.1 66 4.4 64.5 C3.748 63.1 6.9 60.1 6.4 58.5 C5.837 57 1.5 56.6 1.1 55 C0.761 53.5 4.5 51.2 4.3 49.6 C4.157 48 -0 46.6 -0 45 C-0.005 43.4 4.2 42 4.3 40.4 C4.513 38.8 0.8 36.5 1.1 35 C1.473 33.4 5.8 33 6.4 31.5 C6.898 30 3.7 26.9 4.4 25.5 C5.144 24 9.5 24.6 10.3 23.2 C11.203 21.9 8.8 18.2 9.8 16.9 C10.817 15.7 14.9 17.2 16.1 16.1 C17.200 14.9 15.7 10.8 16.9 9.8 C18.191 8.8 21.9 11.2 23.2 10.4 C24.583 9.5 24 5.2 25.5 4.5 C26.907 3.8 30 6.9 31.5 6.4 C32.986 5.8 33.4 1.5 35 1.1 C36.535 0.8 38.8 4.5 40.4 4.3 C41.991 4.2 43.4 0 45 0 C46.623 0 48 4.2 49.6 4.3 C51.195 4.5 53.5 0.8 55 1.1 C56.591 1.5 57 5.8 58.5 6.4 C60.041 6.9 63.1 3.8 64.5 4.5 C65.981 5.2 65.4 9.5 66.8 10.4 C68.131 11.2 71.8 8.8 73.1 9.8 C74.314 10.8 72.8 14.9 73.9 16.1 C75.067 17.2 79.2 15.7 80.2 16.9 C81.183 18.2 78.8 21.9 79.6 23.2 C80.503 24.6 84.8 24 85.6 25.5 C86.246 26.9 83.1 30 83.6 31.5 C84.157 33 88.5 33.4 88.9 35 C89.233 36.5 85.5 38.8 85.7 40.4 C85.837 42 90 43.4 90 45 Z\"/>\n    </svg>\n    <div class=\"thumb beicons-pre beicons-pre-thumb\"></div>\n    <div class=\"text\">{{#translate}}project_apprecation_thank_you|Thank You!{{/translate}}</div>\n  </div>\n  <div class=\"js-appreciation-date project-appreciation-date beicons-pre beicons-pre-thumb\"></div>\n  <div class=\"tooltipi tooltipi-white\">\n    {{>lib/_collection/_add}}\n    {{^has_multiple_owners}}{{#owners}}{{>lib/_follow/_buttonUser}}{{/owners}}{{/has_multiple_owners}}\n    {{#has_multiple_owners}}{{>lib/_follow/_buttonAll}}{{/has_multiple_owners}}\n  </div>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_layout/_spacer": __webpack_require__(276).template,"project/_modules/_text": __webpack_require__(283).template,"project/_modules/_image": __webpack_require__(278).template,"project/_modules/_embed": __webpack_require__(277).template,"project/_modules/_lightbox/_lastSlide": __webpack_require__(281).template,"project/_layout/_appreciation": __webpack_require__(268).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"project-canvas\"");if(t.s(t.f("styles",c,p,1),c,p,0,35,58,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" class=\"project-styles\"");});c.pop();}if(t.s(t.f("is_iframe",c,p,1),c,p,0,83,121,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("style=\"max-width: ");t.b(t.v(t.f("canvas_width",c,p,0)));t.b("px;\"");});c.pop();}t.b(">");t.b("\n" + i);t.b("  <div id=\"project-modules\">");t.b("\n" + i);t.b(t.rp("<project/_layout/_spacer0",c,p,"  "));if(t.s(t.f("modules",c,p,1),c,p,0,211,860,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("is_text",c,p,1),c,p,0,228,267,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<project/_modules/_text1",c,p,"      "));});c.pop();}t.b("\n" + i);if(t.s(t.f("is_image",c,p,1),c,p,0,298,338,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<project/_modules/_image2",c,p,"      "));});c.pop();}t.b("\n" + i);if(t.s(t.f("is_audio",c,p,1),c,p,0,370,410,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<project/_modules/_embed3",c,p,"      "));});c.pop();}t.b("\n" + i);if(t.s(t.f("is_video",c,p,1),c,p,0,442,482,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<project/_modules/_embed4",c,p,"      "));});c.pop();}t.b("\n" + i);if(t.s(t.f("is_embed",c,p,1),c,p,0,514,554,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<project/_modules/_embed5",c,p,"      "));});c.pop();}if(t.s(t.f("caption",c,p,1),c,p,0,584,775,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"project-module caption-container align-");t.b(t.v(t.f("caption_alignment",c,p,0)));t.b("\">");t.b("\n" + i);t.b("      <div class=\"module-caption caption caption-text-wrap\">");t.b("\n" + i);t.b("        ");t.b(t.t(t.f("caption",c,p,0)));t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);});c.pop();}t.b("    <div class=\"spacer\">");t.b("\n" + i);t.b("      <div class=\"divider\"></div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);});c.pop();}t.b(t.rp("<project/_modules/_lightbox/_lastSlide6",c,p,"  "));t.b("  </div>");t.b("\n" + i);t.b(t.rp("<project/_layout/_appreciation7",c,p,"  "));t.b("</div>");t.b("\n");return t.fl(); },partials: {"<project/_layout/_spacer0":{name:"project/_layout/_spacer", partials: {}, subs: {  }},"<project/_modules/_text1":{name:"project/_modules/_text", partials: {}, subs: {  }},"<project/_modules/_image2":{name:"project/_modules/_image", partials: {}, subs: {  }},"<project/_modules/_embed3":{name:"project/_modules/_embed", partials: {}, subs: {  }},"<project/_modules/_embed4":{name:"project/_modules/_embed", partials: {}, subs: {  }},"<project/_modules/_embed5":{name:"project/_modules/_embed", partials: {}, subs: {  }},"<project/_modules/_lightbox/_lastSlide6":{name:"project/_modules/_lightbox/_lastSlide", partials: {}, subs: {  }},"<project/_layout/_appreciation7":{name:"project/_layout/_appreciation", partials: {}, subs: {  }}}, subs: {  }}, "<div id=\"project-canvas\"{{#styles}} class=\"project-styles\"{{/styles}}{{#is_iframe}}style=\"max-width: {{canvas_width}}px;\"{{/is_iframe}}>\n  <div id=\"project-modules\">\n  {{>project/_layout/_spacer}}\n  {{#modules}}\n    {{#is_text}}\n      {{>project/_modules/_text}}\n    {{/is_text}}\n\n    {{#is_image}}\n      {{>project/_modules/_image}}\n    {{/is_image}}\n\n    {{#is_audio}}\n      {{>project/_modules/_embed}}\n    {{/is_audio}}\n\n    {{#is_video}}\n      {{>project/_modules/_embed}}\n    {{/is_video}}\n\n    {{#is_embed}}\n      {{>project/_modules/_embed}}\n    {{/is_embed}}\n    {{#caption}}\n    <div class=\"project-module caption-container align-{{caption_alignment}}\">\n      <div class=\"module-caption caption caption-text-wrap\">\n        {{{caption}}}\n      </div>\n    </div>\n    {{/caption}}\n    <div class=\"spacer\">\n      <div class=\"divider\"></div>\n    </div>\n  {{/modules}}\n  {{>project/_modules/_lightbox/_lastSlide}}\n  </div>\n  {{>project/_layout/_appreciation}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 27:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(24), __webpack_require__(51), __webpack_require__(69) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, e, i, n) {
    "use strict";
    return e.extend({
        init: function() {
            this._super.apply(this, arguments), this.on("postrender", this._mapEvents);
        },
        template: function(t) {
            return this.mustache && this.mustache(t, this.partials);
        },
        destroy: function() {
            this._undelegateEvents(), this._super();
        }
    }, {
        domify: t
    }).mixin(i).mixin(n);
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 270:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_footer/_comments": __webpack_require__(246).template,"project/_blocks/_footer/_basicInfo": __webpack_require__(245).template,"project/_blocks/_footer/_teams": __webpack_require__(251).template,"project/_blocks/_footer/_credits": __webpack_require__(248).template,"project/_blocks/_footer/_tags": __webpack_require__(250).template,"project/_blocks/_footer/_tools": __webpack_require__(252).template,"project/_blocks/_footer/_reportAndCopyright": __webpack_require__(249).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"project-footer\" class=\"show-on-preview unclickable-mask cfix ");if(!t.s(t.f("allow_comments",c,p,1),c,p,1,0,0,"")){t.b("disabled-comments");};t.b("\">");t.b("\n" + i);t.b("  <div id=\"project-footer-inner\">");t.b("\n" + i);if(t.s(t.f("allow_comments",c,p,1),c,p,0,185,235,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<project/_blocks/_footer/_comments0",c,p,"      "));});c.pop();}t.b("    <div id=\"project-footer-info-wrap\">");t.b("\n" + i);t.b(t.rp("<project/_blocks/_footer/_basicInfo1",c,p,"      "));if(t.s(t.f("has_teams",c,p,1),c,p,0,361,396,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<project/_blocks/_footer/_teams2",c,p,""));});c.pop();}t.b(t.rp("<project/_blocks/_footer/_credits3",c,p,"      "));t.b(t.rp("<project/_blocks/_footer/_tags4",c,p,"      "));if(t.s(t.f("has_tools",c,p,1),c,p,0,516,551,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<project/_blocks/_footer/_tools5",c,p,""));});c.pop();}t.b(t.rp("<project/_blocks/_footer/_reportAndCopyright6",c,p,"      "));t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<project/_blocks/_footer/_comments0":{name:"project/_blocks/_footer/_comments", partials: {}, subs: {  }},"<project/_blocks/_footer/_basicInfo1":{name:"project/_blocks/_footer/_basicInfo", partials: {}, subs: {  }},"<project/_blocks/_footer/_teams2":{name:"project/_blocks/_footer/_teams", partials: {}, subs: {  }},"<project/_blocks/_footer/_credits3":{name:"project/_blocks/_footer/_credits", partials: {}, subs: {  }},"<project/_blocks/_footer/_tags4":{name:"project/_blocks/_footer/_tags", partials: {}, subs: {  }},"<project/_blocks/_footer/_tools5":{name:"project/_blocks/_footer/_tools", partials: {}, subs: {  }},"<project/_blocks/_footer/_reportAndCopyright6":{name:"project/_blocks/_footer/_reportAndCopyright", partials: {}, subs: {  }}}, subs: {  }}, "<div id=\"project-footer\" class=\"show-on-preview unclickable-mask cfix {{^allow_comments}}disabled-comments{{/allow_comments}}\">\n  <div id=\"project-footer-inner\">\n    {{#allow_comments}}\n      {{>project/_blocks/_footer/_comments}}\n    {{/allow_comments}}\n    <div id=\"project-footer-info-wrap\">\n      {{>project/_blocks/_footer/_basicInfo}}\n      {{#has_teams}}{{>project/_blocks/_footer/_teams}}{{/has_teams}}\n      {{>project/_blocks/_footer/_credits}}\n      {{>project/_blocks/_footer/_tags}}\n      {{#has_tools}}{{>project/_blocks/_footer/_tools}}{{/has_tools}}\n      {{>project/_blocks/_footer/_reportAndCopyright}}\n    </div>\n  </div>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_headerMobile": __webpack_require__(253).template,"project/_layout/_canvas": __webpack_require__(269).template,"project/_layout/_socialSharing": __webpack_require__(275).template,"project/_layout/_ownerBar": __webpack_require__(272).template,"project/_layout/_projectGallery": __webpack_require__(273).template,"project/_layout/_footer": __webpack_require__(270).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"project\" class=\"js-project\"");t.b("\n" + i);t.b("  data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\"");t.b("\n" + i);t.b("  data-mature_content=\"");t.b(t.v(t.f("mature_content",c,p,0)));t.b("\"");t.b("\n" + i);t.b("  data-mature_access=\"");t.b(t.v(t.f("mature_access",c,p,0)));t.b("\"");t.b("\n" + i);t.b("  data-allow_comments=\"");t.b(t.v(t.f("allow_comments",c,p,0)));t.b("\"");t.b("\n" + i);t.b("  data-appreciations=\"");t.b(t.v(t.d("stats.appreciations",c,p,0)));t.b("\"");t.b("\n" + i);if(t.s(t.f("pulse_points",c,p,1),c,p,0,314,451,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    data-pulse_points_follow=\"");t.b(t.v(t.d("pulse_points.display_follow",c,p,0)));t.b("\"");t.b("\n" + i);t.b("    data-pulse_points_appreciate=\"");t.b(t.v(t.d("pulse_points.display_appreciate",c,p,0)));t.b("\"");t.b("\n" + i);});c.pop();}t.b("  ");if(!t.s(t.f("is_iframe",c,p,1),c,p,1,0,0,"")){t.b("style=\"max-width: ");t.b(t.v(t.f("canvas_width",c,p,0)));t.b("px;\"");};t.b(">");t.b("\n" + i);if(!t.s(t.f("is_iframe",c,p,1),c,p,1,0,0,"")){t.b(t.rp("<project/_blocks/_headerMobile0",c,p,"    "));};t.b("  <div id=\"primary-project-content\" class=\"project-styles");if(!t.s(t.d("styles.spacing.project.top_margin",c,p,1),c,p,1,0,0,"")){t.b(" zero-top");};t.b("\">");t.b("\n" + i);t.b(t.rp("<project/_layout/_canvas1",c,p,"    "));t.b("  </div>");t.b("\n" + i);if(!t.s(t.f("is_iframe",c,p,1),c,p,1,0,0,"")){t.b(t.rp("<project/_layout/_socialSharing2",c,p,"    "));t.b(t.rp("<project/_layout/_ownerBar3",c,p,"    "));t.b(t.rp("<project/_layout/_projectGallery4",c,p,"    "));t.b(t.rp("<project/_layout/_footer5",c,p,"    "));};t.b("</div>");t.b("\n");return t.fl(); },partials: {"<project/_blocks/_headerMobile0":{name:"project/_blocks/_headerMobile", partials: {}, subs: {  }},"<project/_layout/_canvas1":{name:"project/_layout/_canvas", partials: {}, subs: {  }},"<project/_layout/_socialSharing2":{name:"project/_layout/_socialSharing", partials: {}, subs: {  }},"<project/_layout/_ownerBar3":{name:"project/_layout/_ownerBar", partials: {}, subs: {  }},"<project/_layout/_projectGallery4":{name:"project/_layout/_projectGallery", partials: {}, subs: {  }},"<project/_layout/_footer5":{name:"project/_layout/_footer", partials: {}, subs: {  }}}, subs: {  }}, "{{!inline max-width used to avoid JS flash of unstyled content}}\n<div id=\"project\" class=\"js-project\"\n  data-id=\"{{id}}\"\n  data-mature_content=\"{{mature_content}}\"\n  data-mature_access=\"{{mature_access}}\"\n  data-allow_comments=\"{{allow_comments}}\"\n  data-appreciations=\"{{stats.appreciations}}\"\n  {{#pulse_points}}\n    data-pulse_points_follow=\"{{pulse_points.display_follow}}\"\n    data-pulse_points_appreciate=\"{{pulse_points.display_appreciate}}\"\n  {{/pulse_points}}\n  {{^is_iframe}}style=\"max-width: {{canvas_width}}px;\"{{/is_iframe}}>\n  {{^is_iframe}}\n    {{>project/_blocks/_headerMobile}}\n  {{/is_iframe}}\n  <div id=\"primary-project-content\" class=\"project-styles{{^styles.spacing.project.top_margin}} zero-top{{/styles.spacing.project.top_margin}}\">\n    {{>project/_layout/_canvas}}\n  </div>\n  {{^is_iframe}}\n    {{>project/_layout/_socialSharing}}\n    {{>project/_layout/_ownerBar}}\n    {{>project/_layout/_projectGallery}}\n    {{>project/_layout/_footer}}\n  {{/is_iframe}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 272:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_owner": __webpack_require__(98).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"project-owner-bar\" class=\"cfix show-on-preview unclickable-mask\">");t.b("\n" + i);t.b("  <div id=\"project-owner-bar-inner\">");t.b("\n" + i);t.b("    <div id=\"project-owner-bar-info\">");t.b("\n" + i);t.b(t.rp("<project/_blocks/_owner0",c,p,""));t.b("    </div>");t.b("\n" + i);if(!t.s(t.f("has_multiple_owners",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("owners",c,p,1),c,p,0,425,622,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <a href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" class=\"view-profile light-link hide-phone\">");if(t.s(t.f("translate",c,p,1),c,p,0,509,590,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_view_complete_profile|View <span class=\"complete\">Complete</span> Profile");});c.pop();}t.b(" &rarr;</a>");t.b("\n" + i);});c.pop();}};t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<project/_blocks/_owner0":{name:"project/_blocks/_owner", partials: {}, subs: { "ownerInfoClasses": function(c,p,t,i) {t.b("project-owner-info--owner-bar");},"ownerActionClasses": function(c,p,t,i) {t.b("dark-background");} }}}, subs: {  }}, "<div id=\"project-owner-bar\" class=\"cfix show-on-preview unclickable-mask\">\n  <div id=\"project-owner-bar-inner\">\n    <div id=\"project-owner-bar-info\">\n      {{<project/_blocks/_owner}}\n        {{$ownerInfoClasses}}project-owner-info--owner-bar{{/ownerInfoClasses}}\n        {{$ownerActionClasses}}dark-background{{/ownerActionClasses}}\n      {{/project/_blocks/_owner}}\n    </div>\n    {{^has_multiple_owners}}\n      {{#owners}}\n        <a href=\"{{url}}\" class=\"view-profile light-link hide-phone\">{{#translate}}project_view_complete_profile|View <span class=\"complete\">Complete</span> Profile{{/translate}} &rarr;</a>\n      {{/owners}}\n    {{/has_multiple_owners}}\n  </div>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 273:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_projectCover": __webpack_require__(101).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(t.s(t.f("hasOtherProjects",c,p,1),c,p,0,21,412,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <div id=\"other-projects\" class=\"unclickable-mask\">");t.b("\n" + i);if(t.s(t.f("otherProjects",c,p,1),c,p,0,97,131,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_projectCover0",c,p,"      "));});c.pop();}if(!t.s(t.f("has_multiple_owners",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("owners",c,p,1),c,p,0,189,346,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <a href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" class=\"view-profile show-phone\">");if(t.s(t.f("translate",c,p,1),c,p,0,260,316,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_view_complete_profile_link|View Complete Profile");});c.pop();}t.b(" &rarr;</a>");t.b("\n" + i);});c.pop();}};t.b("  </div>");t.b("\n" + i);});c.pop();}return t.fl(); },partials: {"<lib/_projectCover0":{name:"lib/_projectCover", partials: {}, subs: {  }}}, subs: {  }}, "{{#hasOtherProjects}}\n  <div id=\"other-projects\" class=\"unclickable-mask\">\n    {{#otherProjects}}\n      {{>lib/_projectCover}}\n    {{/otherProjects}}\n    {{^has_multiple_owners}}{{#owners}}\n      <a href=\"{{url}}\" class=\"view-profile show-phone\">{{#translate}}project_view_complete_profile_link|View Complete Profile{{/translate}} &rarr;</a>\n    {{/owners}}{{/has_multiple_owners}}\n  </div>{{!/#other-projects}}\n{{/hasOtherProjects}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_sidebar/_administrativeNotice": __webpack_require__(257).template,"project/_blocks/_sidebar/_header": __webpack_require__(260).template,"project/_blocks/_sidebar/_about": __webpack_require__(256).template,"project/_blocks/_sidebar/_toolsOld": __webpack_require__(266).template,"project/_blocks/_sidebar/_headerNewChrome": __webpack_require__(134).template,"project/_blocks/_sidebar/_info": __webpack_require__(135).template,"project/_blocks/_sidebar/_featuresNewChrome": __webpack_require__(133).template,"project/_blocks/_sidebar/_tools": __webpack_require__(265).template,"project/_blocks/_sidebar/_buttonsNewChrome": __webpack_require__(259).template,"be/socialShareButtons": __webpack_require__(88).template,"project/_blocks/_sidebar/_buttons": __webpack_require__(258).template,"project/_blocks/_sidebar/_talentsearch": __webpack_require__(264).template,"project/_blocks/_sidebar/_similarProjects": __webpack_require__(263).template,"project/_blocks/_sidebar/_similarCreatives": __webpack_require__(262).template,"project/_blocks/_sidebar/_saveCandidate": __webpack_require__(261).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"project-sidebar\" class=\"show-on-preview unclickable-mask js-project-sidebar-wrap\">");t.b("\n" + i);if(!t.s(t.f("new_project_chrome",c,p,1),c,p,1,0,0,"")){t.b("    <div class=\"project-sidebar-spacer\"></div>");t.b("\n" + i);};t.b("\n" + i);t.b("  <div class=\"js-project-sidebar sticky-project-sidebar\">");t.b("\n" + i);if(t.s(t.f("administrative_notices",c,p,1),c,p,0,281,427,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <div class=\"sidebar-group hide-sticky administrative-notice\">");t.b("\n" + i);t.b(t.rp("<project/_blocks/_sidebar/_administrativeNotice0",c,p,"        "));t.b("      </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);t.b("    <div class=\"sidebar-group js-sidebar-group\">");t.b("\n" + i);if(!t.s(t.f("new_project_chrome",c,p,1),c,p,1,0,0,"")){t.b(t.rp("<project/_blocks/_sidebar/_header1",c,p,"        "));t.b(t.rp("<project/_blocks/_sidebar/_about2",c,p,"        "));if(t.s(t.f("has_tools",c,p,1),c,p,0,646,685,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<project/_blocks/_sidebar/_toolsOld3",c,p,""));});c.pop();}};t.b("\n" + i);if(t.s(t.f("new_project_chrome",c,p,1),c,p,0,760,1052,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<project/_blocks/_sidebar/_headerNewChrome4",c,p,"        "));t.b(t.rp("<project/_blocks/_sidebar/_info5",c,p,"        "));t.b(t.rp("<project/_blocks/_sidebar/_featuresNewChrome6",c,p,"        "));if(t.s(t.f("has_tools",c,p,1),c,p,0,939,975,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<project/_blocks/_sidebar/_tools7",c,p,""));});c.pop();}t.b(t.rp("<project/_blocks/_sidebar/_buttonsNewChrome8",c,p,"        "));});c.pop();}t.b("    </div>");t.b("\n");t.b("\n" + i);if(t.s(t.f("new_project_chrome",c,p,1),c,p,0,1115,1377,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <div class=\"js-social-sharing-sticky social-sharing__sticky hide\" ");if(t.s(t.f("has_admin_sidebar",c,p,1),c,p,0,1210,1230,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("data-is-admin=\"true\"");});c.pop();}t.b(">");t.b("\n" + i);t.b(t.rp("<be/socialShareButtons9",c,p,""));t.b("      </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(!t.s(t.f("new_project_chrome",c,p,1),c,p,1,0,0,"")){t.b("      <div class=\"sidebar-group sticky-sidebar-buttons show-sticky\">");t.b("\n" + i);t.b(t.rp("<project/_blocks/_sidebar/_buttons10",c,p,"        "));t.b("      </div>");t.b("\n" + i);};t.b("\n" + i);if(!t.s(t.f("new_project_chrome",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("has_talent_search",c,p,1),c,p,0,1644,2290,"{{ }}")){t.rs(c,p,function(c,p,t){if(!t.s(t.f("has_multiple_owners",c,p,1),c,p,1,0,0,"")){t.b("          <div class=\"sidebar-group\">");t.b("\n" + i);if(t.s(t.d("founder.has_talent_info",c,p,1),c,p,0,1756,1827,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<project/_blocks/_sidebar/_talentsearch11",c,p,"              "));});c.pop();}if(t.s(t.d("similar_projects.has_similar_projects",c,p,1),c,p,0,1910,1984,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<project/_blocks/_sidebar/_similarProjects12",c,p,"              "));});c.pop();}if(t.s(t.d("creative_index.has_similar",c,p,1),c,p,0,2070,2145,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<project/_blocks/_sidebar/_similarCreatives13",c,p,"              "));});c.pop();}t.b(t.rp("<project/_blocks/_sidebar/_saveCandidate14",c,p,"            "));t.b("          </div>");t.b("\n" + i);};});c.pop();}t.b("\n" + i);t.b("      <a id=\"back-to-top\" class=\"js-back-to-top sidebar-group beicons-pre beicons-pre-arrow-up show-sticky\"></a>");t.b("\n" + i);};t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<project/_blocks/_sidebar/_administrativeNotice0":{name:"project/_blocks/_sidebar/_administrativeNotice", partials: {}, subs: {  }},"<project/_blocks/_sidebar/_header1":{name:"project/_blocks/_sidebar/_header", partials: {}, subs: {  }},"<project/_blocks/_sidebar/_about2":{name:"project/_blocks/_sidebar/_about", partials: {}, subs: {  }},"<project/_blocks/_sidebar/_toolsOld3":{name:"project/_blocks/_sidebar/_toolsOld", partials: {}, subs: {  }},"<project/_blocks/_sidebar/_headerNewChrome4":{name:"project/_blocks/_sidebar/_headerNewChrome", partials: {}, subs: {  }},"<project/_blocks/_sidebar/_info5":{name:"project/_blocks/_sidebar/_info", partials: {}, subs: {  }},"<project/_blocks/_sidebar/_featuresNewChrome6":{name:"project/_blocks/_sidebar/_featuresNewChrome", partials: {}, subs: {  }},"<project/_blocks/_sidebar/_tools7":{name:"project/_blocks/_sidebar/_tools", partials: {}, subs: {  }},"<project/_blocks/_sidebar/_buttonsNewChrome8":{name:"project/_blocks/_sidebar/_buttonsNewChrome", partials: {}, subs: {  }},"<be/socialShareButtons9":{name:"be/socialShareButtons", partials: {}, subs: { "from": function(c,p,t,i) {t.b("sidebar");} }},"<project/_blocks/_sidebar/_buttons10":{name:"project/_blocks/_sidebar/_buttons", partials: {}, subs: {  }},"<project/_blocks/_sidebar/_talentsearch11":{name:"project/_blocks/_sidebar/_talentsearch", partials: {}, subs: {  }},"<project/_blocks/_sidebar/_similarProjects12":{name:"project/_blocks/_sidebar/_similarProjects", partials: {}, subs: {  }},"<project/_blocks/_sidebar/_similarCreatives13":{name:"project/_blocks/_sidebar/_similarCreatives", partials: {}, subs: {  }},"<project/_blocks/_sidebar/_saveCandidate14":{name:"project/_blocks/_sidebar/_saveCandidate", partials: {}, subs: {  }}}, subs: {  }}, "<div id=\"project-sidebar\" class=\"show-on-preview unclickable-mask js-project-sidebar-wrap\">\n  {{^new_project_chrome}}\n    <div class=\"project-sidebar-spacer\"></div>\n  {{/new_project_chrome}}\n\n  <div class=\"js-project-sidebar sticky-project-sidebar\">\n    {{#administrative_notices}}\n      <div class=\"sidebar-group hide-sticky administrative-notice\">\n        {{>project/_blocks/_sidebar/_administrativeNotice}}\n      </div>\n    {{/administrative_notices}}\n\n    <div class=\"sidebar-group js-sidebar-group\">\n      {{^new_project_chrome}}\n        {{>project/_blocks/_sidebar/_header}}\n        {{>project/_blocks/_sidebar/_about}}\n      {{#has_tools}}{{>project/_blocks/_sidebar/_toolsOld}}{{/has_tools}}\n      {{/new_project_chrome}}\n\n      {{#new_project_chrome}}\n        {{>project/_blocks/_sidebar/_headerNewChrome}}\n        {{>project/_blocks/_sidebar/_info}}\n        {{>project/_blocks/_sidebar/_featuresNewChrome}}\n        {{#has_tools}}{{>project/_blocks/_sidebar/_tools}}{{/has_tools}}\n        {{>project/_blocks/_sidebar/_buttonsNewChrome}}\n      {{/new_project_chrome}}\n    </div>\n\n    {{#new_project_chrome}}\n      <div class=\"js-social-sharing-sticky social-sharing__sticky hide\" {{#has_admin_sidebar}}data-is-admin=\"true\"{{/has_admin_sidebar}}>\n        {{<be/socialShareButtons}}\n          {{$from}}sidebar{{/from}}\n        {{/be/socialShareButtons}}\n      </div>\n    {{/new_project_chrome}}\n\n    {{^new_project_chrome}}\n      <div class=\"sidebar-group sticky-sidebar-buttons show-sticky\">\n        {{>project/_blocks/_sidebar/_buttons}}\n      </div>\n    {{/new_project_chrome}}\n\n    {{^new_project_chrome}}\n      {{#has_talent_search}}\n        {{^has_multiple_owners}}\n          <div class=\"sidebar-group\">\n            {{#founder.has_talent_info}}\n              {{>project/_blocks/_sidebar/_talentsearch}}\n            {{/founder.has_talent_info}}\n            {{#similar_projects.has_similar_projects}}\n              {{>project/_blocks/_sidebar/_similarProjects}}\n            {{/similar_projects.has_similar_projects}}\n            {{#creative_index.has_similar}}\n              {{>project/_blocks/_sidebar/_similarCreatives}}\n            {{/creative_index.has_similar}}\n            {{>project/_blocks/_sidebar/_saveCandidate}}\n          </div>\n        {{/has_multiple_owners}}\n      {{/has_talent_search}}\n\n      <a id=\"back-to-top\" class=\"js-back-to-top sidebar-group beicons-pre beicons-pre-arrow-up show-sticky\"></a>\n    {{/new_project_chrome}}\n  </div>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 275:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"be/socialShareButtons": __webpack_require__(88).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"social-sharing--project\">");t.b("\n");t.b("\n" + i);t.b(t.rp("<be/socialShareButtons0",c,p,""));t.b("\n" + i);t.b("  <div class=\"social-sharing__links\">");t.b("\n" + i);if(t.s(t.f("new_project_chrome",c,p,1),c,p,0,200,586,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <span class=\"social-sharing__link beicons-pre beicons-pre-add-projects\">");t.b("\n" + i);t.b("        <a class=\"js-action-collection hide-phone\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");if(t.s(t.f("translate",c,p,1),c,p,0,362,412,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_add_to_collection_button|Add to Collection");});c.pop();}t.b("</a>");t.b("\n" + i);t.b("        <a class=\"js-action-collection show-phone\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");if(t.s(t.f("translate",c,p,1),c,p,0,513,549,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_collection_button|Collection");});c.pop();}t.b("</a>");t.b("\n" + i);t.b("      </span>");t.b("\n" + i);});c.pop();}t.b("\n" + i);t.b("    <span class=\"social-sharing__link beicons-pre beicons-pre-link js-social-sharing\">");t.b("\n" + i);t.b("      <a class=\"js-viral-copy-link\">");if(t.s(t.f("translate",c,p,1),c,p,0,748,790,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_social_sharing_copy_link|Copy link");});c.pop();}t.b("</a>");t.b("\n" + i);t.b("    </span>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<be/socialShareButtons0":{name:"be/socialShareButtons", partials: {}, subs: { "from": function(c,p,t,i) {t.b("project_middle");} }}}, subs: {  }}, "<div class=\"social-sharing--project\">\n\n  {{<be/socialShareButtons}}\n    {{$from}}project_middle{{/from}}\n  {{/be/socialShareButtons}}\n\n  <div class=\"social-sharing__links\">\n    {{#new_project_chrome}}\n      <span class=\"social-sharing__link beicons-pre beicons-pre-add-projects\">\n        <a class=\"js-action-collection hide-phone\" data-id=\"{{id}}\">{{#translate}}project_add_to_collection_button|Add to Collection{{/translate}}</a>\n        <a class=\"js-action-collection show-phone\" data-id=\"{{id}}\">{{#translate}}project_collection_button|Collection{{/translate}}</a>\n      </span>\n    {{/new_project_chrome}}\n\n    <span class=\"social-sharing__link beicons-pre beicons-pre-link js-social-sharing\">\n      <a class=\"js-viral-copy-link\">{{#translate}}project_social_sharing_copy_link|Copy link{{/translate}}</a>\n    </span>\n  </div>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 276:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"project-spacer\">");t.b("\n" + i);t.b("  <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABXgAAAABCAYAAABkHsaZAAAAH0lEQVRYw+3DAQkAAAwEoe9f+pZjoOCqqaqqqqr67wH2oViJHh1OqwAAAABJRU5ErkJggg==\">");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div id=\"project-spacer\">\n  {{!data uri is of public/assets/img/project/spacer.png}}\n  <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABXgAAAABCAYAAABkHsaZAAAAH0lEQVRYw+3DAQkAAAwEoe9f+pZjoOCqqaqqqqr67wH2oViJHh1OqwAAAABJRU5ErkJggg==\">\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"project-module module ");t.b(t.v(t.f("type",c,p,0)));t.b(" project-module-");t.b(t.v(t.f("type",c,p,0)));if(!t.s(t.f("can_access",c,p,1),c,p,1,0,0,"")){t.b(" unsafe");};t.b("\">");t.b("\n" + i);if(t.s(t.f("can_access",c,p,1),c,p,0,123,142,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    ");t.b(t.t(t.f("embed",c,p,0)));t.b("\n" + i);});c.pop();}t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"project-module module {{type}} project-module-{{type}}{{^can_access}} unsafe{{/can_access}}\">\n  {{#can_access}}\n    {{{embed}}}\n  {{/can_access}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 278:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_modules/_lightbox/_content": __webpack_require__(280).template,"lib/_pictureLazy": __webpack_require__(243).template,"lib/_picture": __webpack_require__(131).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"");if(t.s(t.f("is_hd_available",c,p,1),c,p,0,32,58,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("js-project-module-image-hd");});c.pop();}t.b(" project-module module ");t.b(t.v(t.f("type",c,p,0)));t.b(" project-module-");t.b(t.v(t.f("type",c,p,0)));if(t.s(t.f("full_bleed",c,p,1),c,p,0,148,185,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" image-full project-module-image-full");});c.pop();}if(!t.s(t.f("can_access",c,p,1),c,p,1,0,0,"")){t.b(" unsafe");};t.b("\" ");if(t.s(t.f("is_hd_available",c,p,1),c,p,0,259,291,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("data-hd-src=\"");t.b(t.v(t.d("sizes.max_1240",c,p,0)));t.b("\"");});c.pop();}t.b(">");t.b("\n" + i);t.b("  <div class=\"js-project-lightbox-link project-module-image-inner-wrap\">");t.b("\n" + i);t.b(t.rp("<project/_modules/_lightbox/_content0",c,p,"    "));if(!t.s(t.f("is_feature_queue_admin",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("can_access",c,p,1),c,p,0,484,659,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("is_lazy",c,p,1),c,p,0,505,546,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_pictureLazy1",c,p,"          "));});c.pop();}if(!t.s(t.f("is_lazy",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("picture",c,p,1),c,p,0,602,619,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_picture2",c,p,""));});c.pop();}};});c.pop();}};if(t.s(t.f("is_feature_queue_admin",c,p,1),c,p,0,738,791,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("picture",c,p,1),c,p,0,757,774,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_picture3",c,p,""));});c.pop();}});c.pop();}t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<project/_modules/_lightbox/_content0":{name:"project/_modules/_lightbox/_content", partials: {}, subs: {  }},"<lib/_pictureLazy1":{name:"lib/_pictureLazy", partials: {}, subs: {  }},"<lib/_picture2":{name:"lib/_picture", partials: {}, subs: {  }},"<lib/_picture3":{name:"lib/_picture", partials: {}, subs: {  }}}, subs: {  }}, "<div class=\"{{#is_hd_available}}js-project-module-image-hd{{/is_hd_available}} project-module module {{type}} project-module-{{type}}{{#full_bleed}} image-full project-module-image-full{{/full_bleed}}{{^can_access}} unsafe{{/can_access}}\" {{#is_hd_available}}data-hd-src=\"{{sizes.max_1240}}\"{{/is_hd_available}}>\n  <div class=\"js-project-lightbox-link project-module-image-inner-wrap\">\n    {{>project/_modules/_lightbox/_content}}\n    {{^is_feature_queue_admin}}\n      {{#can_access}}\n        {{#is_lazy}}\n          {{>lib/_pictureLazy}}\n        {{/is_lazy}}\n        {{^is_lazy}}\n          {{#picture}}{{>lib/_picture}}{{/picture}}\n        {{/is_lazy}}\n      {{/can_access}}\n    {{/is_feature_queue_admin}}\n    {{#is_feature_queue_admin}}\n      {{#picture}}{{>lib/_picture}}{{/picture}}\n    {{/is_feature_queue_admin}}\n  </div>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 279:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_modules/_lightbox/_profileListItem": __webpack_require__(282).template,"lib/_profileListItem": __webpack_require__(63).template,"lib/_follow/_userLink": __webpack_require__(76).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"lightbox-caption lightbox-extra js-lightbox-caption\">");t.b("\n" + i);if(!t.s(t.f("has_multiple_owners",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("owners",c,p,1),c,p,0,108,168,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<project/_modules/_lightbox/_profileListItem0",c,p,"      "));});c.pop();}};if(t.s(t.f("has_multiple_owners",c,p,1),c,p,0,233,1026,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <div class=\"project-owners-container\">");t.b("\n" + i);t.b("    <div class=\"project-owner-avatars\">");t.b("\n" + i);if(t.s(t.f("owners",c,p,1),c,p,0,332,404,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <img src=\"");t.b(t.v(t.d("images.115",c,p,0)));t.b("\" class=\"multiple-owner-avatar\">");t.b("\n" + i);});c.pop();}t.b("    </div>");t.b("\n" + i);t.b("    <div class=\"project-details multiple-owners-details\">");t.b("\n" + i);t.b("      <div class=\"profile-list-name tooltipi-container\">");t.b("\n" + i);t.b("        <span class=\"multiple-owners-name\">");if(t.s(t.f("translate",c,p,1),c,p,0,599,638,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_multiple_owners|Multiple Owners");});c.pop();}t.b("</span>");t.b("\n" + i);t.b("        <div class=\"tooltipi tooltipi-white multiple-owners-list\">");t.b("\n" + i);if(t.s(t.f("owners",c,p,1),c,p,0,748,908,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_profileListItem2",c,p,""));});c.pop();}t.b("        </div>");t.b("\n" + i);t.b("      </div>");t.b("\n");t.b("\n" + i);t.b("      <div class=\"project-name\">");t.b(t.v(t.d("project.name",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);});c.pop();}t.b("</div>");t.b("\n");return t.fl(); },partials: {"<project/_modules/_lightbox/_profileListItem0":{name:"project/_modules/_lightbox/_profileListItem", partials: {}, subs: {  }},"<lib/_profileListItem2":{name:"lib/_profileListItem", partials: {"<follow_linklib/_follow/_userLink1":{name:"lib/_follow/_userLink", partials: {}, subs: {  }}}, subs: { "follow_link": function(c,p,t,i) {t.b(t.rp("<follow_linklib/_follow/_userLink1",c,p,""));} }}}, subs: {  }}, "<div class=\"lightbox-caption lightbox-extra js-lightbox-caption\">\n  {{^has_multiple_owners}}\n    {{#owners}}\n      {{>project/_modules/_lightbox/_profileListItem}}\n    {{/owners}}\n  {{/has_multiple_owners}}\n  {{#has_multiple_owners}}\n  <div class=\"project-owners-container\">\n    <div class=\"project-owner-avatars\">\n      {{#owners}}\n        <img src=\"{{images.115}}\" class=\"multiple-owner-avatar\">\n      {{/owners}}\n    </div>\n    <div class=\"project-details multiple-owners-details\">\n      <div class=\"profile-list-name tooltipi-container\">\n        <span class=\"multiple-owners-name\">{{#translate}}project_multiple_owners|Multiple Owners{{/translate}}</span>\n        <div class=\"tooltipi tooltipi-white multiple-owners-list\">\n          {{#owners}}\n            {{<lib/_profileListItem}}\n              {{$follow_link}}{{>lib/_follow/_userLink}}{{/follow_link}}\n            {{/lib/_profileListItem}}\n          {{/owners}}\n        </div>\n      </div>\n\n      <div class=\"project-name\">{{project.name}}</div>\n    </div>\n  </div>\n  {{/has_multiple_owners}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 280:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_picture": __webpack_require__(131).template,"project/_modules/_lightbox/_caption": __webpack_require__(279).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<script type=\"text/html\" class=\"js-lightbox-slide-content\">");t.b("\n" + i);if(t.s(t.f("picture_all_sizes",c,p,1),c,p,0,84,101,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_picture0",c,p,""));});c.pop();}t.b(t.rp("<project/_modules/_lightbox/_caption1",c,p,"  "));t.b("</script>");t.b("\n");return t.fl(); },partials: {"<lib/_picture0":{name:"lib/_picture", partials: {}, subs: {  }},"<project/_modules/_lightbox/_caption1":{name:"project/_modules/_lightbox/_caption", partials: {}, subs: {  }}}, subs: {  }}, "<script type=\"text/html\" class=\"js-lightbox-slide-content\">\n  {{#picture_all_sizes}}{{>lib/_picture}}{{/picture_all_sizes}}\n  {{>project/_modules/_lightbox/_caption}}\n</script>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 281:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_profileListItem": __webpack_require__(63).template,"lib/_follow/_userLink": __webpack_require__(76).template,"lib/_projectCover": __webpack_require__(101).template,"_icons/_rotate": __webpack_require__(236).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<script type=\"text/html\" class=\"js-lightbox-overlay-slide\">");t.b("\n" + i);t.b("  <div class=\"lightbox-overlay-slide\">");t.b("\n" + i);t.b("    <div class=\"js-last-slide last-slide\"></div>");t.b("\n" + i);if(t.s(t.f("hasOtherProjects",c,p,1),c,p,0,173,1296,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <div class=\"other-projects\">");t.b("\n" + i);t.b("        <div class=\"owners\">");t.b("\n" + i);t.b("          <span class=\"owners__by\">");if(t.s(t.f("translate",c,p,1),c,p,0,287,330,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_other_projects_by|Other projects by");});c.pop();}t.b("</span>");t.b("\n" + i);t.b("          <div class=\"owners__name tooltipi-container\">");t.b("\n" + i);if(t.s(t.f("has_multiple_owners",c,p,1),c,p,0,442,878,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <span class=\"multiple-owners-name\">");if(t.s(t.f("translate",c,p,1),c,p,0,504,543,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_multiple_owners|Multiple Owners");});c.pop();}t.b("</span>");t.b("\n" + i);t.b("            <div class=\"tooltipi tooltipi-white multiple-owners-list\">");t.b("\n" + i);if(t.s(t.f("owners",c,p,1),c,p,0,661,837,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_profileListItem1",c,p,""));});c.pop();}t.b("            </div>");t.b("\n" + i);});c.pop();}if(!t.s(t.f("has_multiple_owners",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("owners",c,p,1),c,p,0,961,1078,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <a class=\"owners-link js-mini-profile\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\">");t.b(t.v(t.f("display_name",c,p,0)));t.b("</a>");t.b("\n" + i);});c.pop();}};t.b("          </div>");t.b("\n" + i);t.b("        </div>");t.b("\n");t.b("\n" + i);t.b("        <div class=\"project-covers\">");t.b("\n" + i);if(t.s(t.f("otherProjects",c,p,1),c,p,0,1223,1245,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_projectCover2",c,p,""));});c.pop();}t.b("        </div>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);});c.pop();}if(!t.s(t.f("hasOtherProjects",c,p,1),c,p,1,0,0,"")){t.b("    <div class=\"view-again-container\">");t.b("\n" + i);t.b(t.rp("<_icons/_rotate3",c,p,"      "));t.b("      <a class=\"view-again js-view-again\">");if(t.s(t.f("translate",c,p,1),c,p,0,1465,1502,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("view_project_again|View project again");});c.pop();}t.b("</a>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);};t.b("  </div>");t.b("\n" + i);t.b("</script>");t.b("\n");return t.fl(); },partials: {"<lib/_profileListItem1":{name:"lib/_profileListItem", partials: {"<follow_linklib/_follow/_userLink0":{name:"lib/_follow/_userLink", partials: {}, subs: {  }}}, subs: { "follow_link": function(c,p,t,i) {t.b(t.rp("<follow_linklib/_follow/_userLink0",c,p,""));} }},"<lib/_projectCover2":{name:"lib/_projectCover", partials: {}, subs: {  }},"<_icons/_rotate3":{name:"_icons/_rotate", partials: {}, subs: {  }}}, subs: {  }}, "<script type=\"text/html\" class=\"js-lightbox-overlay-slide\">\n  <div class=\"lightbox-overlay-slide\">\n    <div class=\"js-last-slide last-slide\"></div>\n    {{#hasOtherProjects}}\n      <div class=\"other-projects\">\n        <div class=\"owners\">\n          <span class=\"owners__by\">{{#translate}}project_other_projects_by|Other projects by{{/translate}}</span>\n          <div class=\"owners__name tooltipi-container\">\n          {{#has_multiple_owners}}\n            <span class=\"multiple-owners-name\">{{#translate}}project_multiple_owners|Multiple Owners{{/translate}}</span>\n            <div class=\"tooltipi tooltipi-white multiple-owners-list\">\n              {{#owners}}\n                {{<lib/_profileListItem}}\n                  {{$follow_link}}{{>lib/_follow/_userLink}}{{/follow_link}}\n                {{/lib/_profileListItem}}\n              {{/owners}}\n            </div>\n          {{/has_multiple_owners}}\n          {{^has_multiple_owners}}\n            {{#owners}}\n            <a class=\"owners-link js-mini-profile\" data-id=\"{{id}}\" href=\"{{url}}\">{{display_name}}</a>\n            {{/owners}}\n          {{/has_multiple_owners}}\n          </div>\n        </div>\n\n        <div class=\"project-covers\">\n          {{#otherProjects}}{{>lib/_projectCover}}{{/otherProjects}}\n        </div>\n      </div>\n    {{/hasOtherProjects}}\n    {{^hasOtherProjects}}\n    <div class=\"view-again-container\">\n      {{>_icons/_rotate}}\n      <a class=\"view-again js-view-again\">{{#translate}}view_project_again|View project again{{/translate}}</a>\n    </div>\n    {{/hasOtherProjects}}\n  </div>\n</script>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 282:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"profile-list\">");t.b("\n" + i);t.b("  <a class=\"normal-link profile-list-image-wrap js-mini-profile\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\"><img class=\"profile-list-image\" src=\"");t.b(t.v(t.d("images.115",c,p,0)));t.b("\" /></a>");t.b("\n" + i);t.b("  <div class=\"profile-list-info profile-list-info-row\">");t.b("\n" + i);t.b("    <div class=\"profile-list-name\"><a class=\"normal-link js-mini-profile\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\">");t.b(t.v(t.f("display_name",c,p,0)));t.b("</a></div>");t.b("\n" + i);t.sub("follow_link",c,p,i);t.b("    <div class=\"project-name\">");t.b(t.v(t.d("project.name",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: { "follow_link": function(c,p,t,i) {} }}, "<div class=\"profile-list\">\n  <a class=\"normal-link profile-list-image-wrap js-mini-profile\" href=\"{{url}}\" data-id=\"{{id}}\"><img class=\"profile-list-image\" src=\"{{images.115}}\" /></a>\n  <div class=\"profile-list-info profile-list-info-row\">\n    <div class=\"profile-list-name\"><a class=\"normal-link js-mini-profile\" data-id=\"{{id}}\" href=\"{{url}}\">{{display_name}}</a></div>\n    {{$follow_link}}{{/follow_link}}\n    <div class=\"project-name\">{{project.name}}</div>\n  </div>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 283:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(t.s(t.f("can_access",c,p,1),c,p,0,15,154,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<div class=\"project-module module project-module-text text align-");t.b(t.v(t.f("alignment",c,p,0)));t.b("\">");t.b("\n" + i);t.b("  <div class=\"main-text\">");t.b("\n" + i);t.b("    ");t.b(t.t(t.f("text",c,p,0)));t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n" + i);});c.pop();}return t.fl(); },partials: {}, subs: {  }}, "{{#can_access}}\n<div class=\"project-module module project-module-text text align-{{alignment}}\">\n  <div class=\"main-text\">\n    {{{text}}}\n  </div>\n</div>\n{{/can_access}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 284:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(49) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e) {
    "use strict";
    return e = e.get("adobeanalytics"), {
        page: function() {
            if ("undefined" != typeof s_adobe) try {
                s_adobe.pageName = (window.location.hostname + window.location.pathname).replace(/\//g, ":").replace(/^www\./, ""), 
                s_adobe.t();
            } catch (a) {
                e.error(a);
            }
        }
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 286:
/***/ function(module, exports, __webpack_require__) {

!function() {
    var o = Math, t = function(o) {
        return o >> 0;
    }, e = /webkit/i.test(navigator.appVersion) ? "webkit" : /firefox/i.test(navigator.userAgent) ? "Moz" : /trident/i.test(navigator.userAgent) ? "ms" : "opera" in window ? "O" : "", r = /android/gi.test(navigator.appVersion), l = /iphone|ipad/gi.test(navigator.appVersion), n = /playbook/gi.test(navigator.appVersion), i = /hp-tablet/gi.test(navigator.appVersion), s = document.all && !document.getElementsByClassName, a = "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix(), c = "ontouchstart" in window && !i, p = e + "Transform" in document.documentElement.style, m = l || n, h = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(o) {
            return setTimeout(o, 1);
        };
    }(), u = function() {
        return window.cancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
    }(), d = "onorientationchange" in window ? "orientationchange" : "resize", S = c ? "touchstart" : "mousedown", b = c ? "touchmove" : "mousemove", f = c ? "touchend" : "mouseup", x = c ? "touchcancel" : "mouseup", g = "Moz" == e ? "DOMMouseScroll" : "mousewheel", v = document.attachEvent ? "mouseleave" : "mouseout", T = "translate" + (a ? "3d(" : "("), y = a ? ",0)" : ")", w = function(o, t) {
        var n, i = this, h = document;
        i.wrapper = "object" == typeof o ? o : h.getElementById(o), i.wrapper.style.overflow = "hidden", 
        i.scroller = i.wrapper.children[0], i.options = {
            hScroll: !0,
            vScroll: !0,
            x: 0,
            y: 0,
            bounce: !0,
            bounceLock: !1,
            momentum: !0,
            lockDirection: !0,
            useTransform: !0,
            useTransition: !1,
            topOffset: 0,
            checkDOMChanges: !1,
            handleClick: !0,
            hScrollbar: !0,
            vScrollbar: !0,
            fixedScrollbar: r,
            hideScrollbar: l,
            fadeScrollbar: l && a,
            scrollbarClass: "",
            zoom: !1,
            zoomMin: 1,
            zoomMax: 4,
            doubleTapZoom: 2,
            wheelAction: "scroll",
            snap: !1,
            snapThreshold: 1,
            onRefresh: null,
            onBeforeScrollStart: function(o) {
                o.preventDefault ? o.preventDefault() : o.returnValue = !1;
            },
            onScrollStart: null,
            onBeforeScrollMove: null,
            onScrollMove: null,
            onBeforeScrollEnd: null,
            onScrollEnd: null,
            onTouchEnd: null,
            onDestroy: null,
            onZoomStart: null,
            onZoom: null,
            onZoomEnd: null
        };
        for (n in t) i.options[n] = t[n];
        i.x = i.options.x, i.y = i.options.y, i.options.useTransform = !!p && i.options.useTransform, 
        i.options.hScrollbar = i.options.hScroll && i.options.hScrollbar, i.options.vScrollbar = i.options.vScroll && i.options.vScrollbar, 
        i.options.zoom = i.options.useTransform && i.options.zoom, i.options.useTransition = m && i.options.useTransition, 
        i.options.zoom && r && (T = "translate(", y = ")"), i.scroller.style[e + "TransitionProperty"] = i.options.useTransform ? "-" + e.toLowerCase() + "-transform" : "top left", 
        i.scroller.style[e + "TransitionDuration"] = "0", i.scroller.style[e + "TransformOrigin"] = "0 0", 
        i.options.useTransition && (i.scroller.style[e + "TransitionTimingFunction"] = "cubic-bezier(0.33,0.66,0.66,1)"), 
        i.options.useTransform ? i.scroller.style[e + "Transform"] = T + i.x + "px," + i.y + "px" + y : i.scroller.style.cssText += ";position:absolute;top:" + i.y + "px;left:" + i.x + "px", 
        i.options.useTransition && (i.options.fixedScrollbar = !0), i.refresh(), s && (i.scroller.ondragstart = function() {
            return !1;
        }), i._bind(d, window), i._bind(S), c || (i._bind(v, i.wrapper), "none" != i.options.wheelAction && i._bind(g)), 
        i.options.checkDOMChanges && (i.checkDOMTime = setInterval(function() {
            i._checkDOMChanges();
        }, 500));
    };
    w.prototype = {
        enabled: !0,
        x: 0,
        y: 0,
        steps: [],
        scale: 1,
        currPageX: 0,
        currPageY: 0,
        pagesX: [],
        pagesY: [],
        aniTime: null,
        wheelZoomCount: 0,
        handleEvent: function(o) {
            var t = this;
            switch (o.type) {
              case S:
                if (!c && o.button - (s ? 1 : 0) !== 0) return;
                t._start(o);
                break;

              case b:
                t._move(o);
                break;

              case f:
              case x:
                t._end(o);
                break;

              case d:
                t._resize();
                break;

              case g:
                t._wheel(o);
                break;

              case v:
                t._mouseout(o);
                break;

              case "webkitTransitionEnd":
                t._transitionEnd(o);
            }
        },
        _checkDOMChanges: function() {
            this.moved || this.zoomed || this.animating || this.scrollerW == this.scroller.offsetWidth * this.scale && this.scrollerH == this.scroller.offsetHeight * this.scale || this.refresh();
        },
        _scrollbar: function(r) {
            var l, n = this, i = document;
            return n[r + "Scrollbar"] ? (n[r + "ScrollbarWrapper"] || (l = i.createElement("div"), 
            n.options.scrollbarClass ? l.className = n.options.scrollbarClass + r.toUpperCase() : l.style.cssText = "position:absolute;z-index:100;" + ("h" == r ? "height:7px;bottom:1px;left:2px;right:" + (n.vScrollbar ? "7" : "2") + "px" : "width:7px;bottom:" + (n.hScrollbar ? "7" : "2") + "px;top:2px;right:1px"), 
            l.style.cssText += ";pointer-events:none;-" + e + "-transition-property:opacity;-" + e + "-transition-duration:" + (n.options.fadeScrollbar ? "350ms" : "0") + ";overflow:hidden;opacity:" + (n.options.hideScrollbar ? "0" : "1"), 
            n.wrapper.appendChild(l), n[r + "ScrollbarWrapper"] = l, l = i.createElement("div"), 
            n.options.scrollbarClass || (l.style.cssText = "position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);-" + e + "-background-clip:padding-box;-" + e + "-box-sizing:border-box;" + ("h" == r ? "height:100%" : "width:100%") + ";-" + e + "-border-radius:3px;border-radius:3px"), 
            l.style.cssText += ";pointer-events:none;-" + e + "-transition-property:-" + e + "-transform;-" + e + "-transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);-" + e + "-transition-duration:0;-" + e + "-transform:" + T + "0,0" + y, 
            n.options.useTransition && (l.style.cssText += ";-" + e + "-transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"), 
            n[r + "ScrollbarWrapper"].appendChild(l), n[r + "ScrollbarIndicator"] = l), "h" == r ? (n.hScrollbarSize = n.hScrollbarWrapper.clientWidth, 
            n.hScrollbarIndicatorSize = o.max(t(n.hScrollbarSize * n.hScrollbarSize / n.scrollerW), 8), 
            n.hScrollbarIndicator.style.width = n.hScrollbarIndicatorSize + "px", n.hScrollbarMaxScroll = n.hScrollbarSize - n.hScrollbarIndicatorSize, 
            n.hScrollbarProp = n.hScrollbarMaxScroll / n.maxScrollX) : (n.vScrollbarSize = n.vScrollbarWrapper.clientHeight, 
            n.vScrollbarIndicatorSize = o.max(t(n.vScrollbarSize * n.vScrollbarSize / n.scrollerH), 8), 
            n.vScrollbarIndicator.style.height = n.vScrollbarIndicatorSize + "px", n.vScrollbarMaxScroll = n.vScrollbarSize - n.vScrollbarIndicatorSize, 
            n.vScrollbarProp = n.vScrollbarMaxScroll / n.maxScrollY), void n._scrollbarPos(r, !0)) : void (n[r + "ScrollbarWrapper"] && (p && (n[r + "ScrollbarIndicator"].style[e + "Transform"] = ""), 
            n[r + "ScrollbarWrapper"].parentNode.removeChild(n[r + "ScrollbarWrapper"]), n[r + "ScrollbarWrapper"] = null, 
            n[r + "ScrollbarIndicator"] = null));
        },
        _resize: function() {
            var o = this;
            setTimeout(function() {
                o.refresh();
            }, r ? 200 : 0);
        },
        _pos: function(o, r) {
            this.zoomed || (o = this.hScroll ? o : 0, r = this.vScroll ? r : 0, this.options.useTransform ? this.scroller.style[e + "Transform"] = T + o + "px," + r + "px" + y + " scale(" + this.scale + ")" : (o = t(o), 
            r = t(r), this.scroller.style.left = o + "px", this.scroller.style.top = r + "px"), 
            this.x = o, this.y = r, this._scrollbarPos("h"), this._scrollbarPos("v"));
        },
        _scrollbarPos: function(o, r) {
            var l, n = this, i = "h" == o ? n.x : n.y;
            n[o + "Scrollbar"] && (i = n[o + "ScrollbarProp"] * i, i < 0 ? (n.options.fixedScrollbar || (l = n[o + "ScrollbarIndicatorSize"] + t(3 * i), 
            l < 8 && (l = 8), n[o + "ScrollbarIndicator"].style["h" == o ? "width" : "height"] = l + "px"), 
            i = 0) : i > n[o + "ScrollbarMaxScroll"] && (n.options.fixedScrollbar ? i = n[o + "ScrollbarMaxScroll"] : (l = n[o + "ScrollbarIndicatorSize"] - t(3 * (i - n[o + "ScrollbarMaxScroll"])), 
            l < 8 && (l = 8), n[o + "ScrollbarIndicator"].style["h" == o ? "width" : "height"] = l + "px", 
            i = n[o + "ScrollbarMaxScroll"] + (n[o + "ScrollbarIndicatorSize"] - l))), n[o + "ScrollbarWrapper"].style.opacity = r && n.options.hideScrollbar ? "0" : "1", 
            s ? (n[o + "ScrollbarIndicator"].style.position = "absolute", "h" == o ? n[o + "ScrollbarIndicator"].style.left = i + "px" : n[o + "ScrollbarIndicator"].style.top = i + "px") : (n[o + "ScrollbarWrapper"].style[e + "TransitionDelay"] = "0", 
            n[o + "ScrollbarIndicator"].style[e + "Transform"] = T + ("h" == o ? i + "px,0" : "0," + i + "px") + y));
        },
        _start: function(t) {
            var r, l, n, i, s, a = this, p = c ? t.touches[0] : t, m = document.body, h = document.documentElement;
            a.enabled && (a.options.onBeforeScrollStart && a.options.onBeforeScrollStart.call(a, t), 
            (a.options.useTransition || a.options.zoom) && a._transitionTime(0), a.moved = !1, 
            a.animating = !1, a.zoomed = !1, a.distX = 0, a.distY = 0, a.absDistX = 0, a.absDistY = 0, 
            a.dirX = 0, a.dirY = 0, a.options.zoom && c && t.touches.length > 1 && (i = o.abs(t.touches[0].pageX - t.touches[1].pageX), 
            s = o.abs(t.touches[0].pageY - t.touches[1].pageY), a.touchesDistStart = o.sqrt(i * i + s * s), 
            a.originX = o.abs(t.touches[0].pageX + t.touches[1].pageX - 2 * a.wrapperOffsetLeft) / 2 - a.x, 
            a.originY = o.abs(t.touches[0].pageY + t.touches[1].pageY - 2 * a.wrapperOffsetTop) / 2 - a.y, 
            a.options.onZoomStart && a.options.onZoomStart.call(a, t)), a.options.momentum && (a.options.useTransform ? (r = getComputedStyle(a.scroller, null)[e + "Transform"].replace(/[^0-9-.,]/g, "").split(","), 
            l = 1 * r[4], n = 1 * r[5]) : (l = 1 * (a.scroller.currentStyle || getComputedStyle(a.scroller, null)).left.replace(/[^0-9-]/g, ""), 
            n = 1 * (a.scroller.currentStyle || getComputedStyle(a.scroller, null)).top.replace(/[^0-9-]/g, "")), 
            l == a.x && n == a.y || (a.options.useTransition ? a._unbind("webkitTransitionEnd") : u(a.aniTime), 
            a.steps = [], a._pos(l, n))), a.absStartX = a.x, a.absStartY = a.y, a.startX = a.x, 
            a.startY = a.y, a.pointX = p.pageX || p.clientX + m.scrollLeft + h.scrollLeft, a.pointY = p.pageY || p.clientY + m.scrollTop + h.scrollTop, 
            a.startTime = t.timeStamp || new Date().getTime(), a.options.onScrollStart && a.options.onScrollStart.call(a, t), 
            a._bind(b), a._bind(f), a._bind(x));
        },
        _move: function(t) {
            var r, l, n, i = this, s = c ? t.touches[0] : t, a = document.body, p = document.documentElement, m = (s.pageX || s.clientX + a.scrollLeft + p.scrollLeft) - i.pointX, h = (s.pageY || s.clientY + a.scrollTop + p.scrollTop) - i.pointY, u = i.x + m, d = i.y + h, S = t.timeStamp || new Date().getTime();
            return i.options.onBeforeScrollMove && i.options.onBeforeScrollMove.call(i, t), 
            i.options.zoom && c && t.touches.length > 1 ? (r = o.abs(t.touches[0].pageX - t.touches[1].pageX), 
            l = o.abs(t.touches[0].pageY - t.touches[1].pageY), i.touchesDist = o.sqrt(r * r + l * l), 
            i.zoomed = !0, n = 1 / i.touchesDistStart * i.touchesDist * this.scale, n < i.options.zoomMin ? n = .5 * i.options.zoomMin * Math.pow(2, n / i.options.zoomMin) : n > i.options.zoomMax && (n = 2 * i.options.zoomMax * Math.pow(.5, i.options.zoomMax / n)), 
            i.lastScale = n / this.scale, u = this.originX - this.originX * i.lastScale + this.x, 
            d = this.originY - this.originY * i.lastScale + this.y, this.scroller.style[e + "Transform"] = T + u + "px," + d + "px" + y + " scale(" + n + ")", 
            void (i.options.onZoom && i.options.onZoom.call(i, t))) : (i.pointX = s.pageX || s.clientX + a.scrollLeft + p.scrollLeft, 
            i.pointY = s.pageY || s.clientY + a.scrollTop + p.scrollTop, (u > 0 || u < i.maxScrollX) && (u = i.options.bounce ? i.x + m / 2 : u >= 0 || i.maxScrollX >= 0 ? 0 : i.maxScrollX), 
            (d > i.minScrollY || d < i.maxScrollY) && (d = i.options.bounce ? i.y + h / 2 : d >= i.minScrollY || i.maxScrollY >= 0 ? i.minScrollY : i.maxScrollY), 
            i.distX += m, i.distY += h, i.absDistX = o.abs(i.distX), i.absDistY = o.abs(i.distY), 
            void (i.absDistX < 6 && i.absDistY < 6 || (i.options.lockDirection && (i.absDistX > i.absDistY + 5 ? (d = i.y, 
            h = 0) : i.absDistY > i.absDistX + 5 && (u = i.x, m = 0)), i.moved = !0, i._pos(u, d), 
            i.dirX = m > 0 ? -1 : m < 0 ? 1 : 0, i.dirY = h > 0 ? -1 : h < 0 ? 1 : 0, S - i.startTime > 300 && (i.startTime = S, 
            i.startX = i.x, i.startY = i.y), i.options.onScrollMove && i.options.onScrollMove.call(i, t))));
        },
        _end: function(r) {
            if (!c || 0 == r.touches.length) {
                var l, n, i, s, a, p, m, h = this, u = c ? r.changedTouches[0] : r, d = {
                    dist: 0,
                    time: 0
                }, S = {
                    dist: 0,
                    time: 0
                }, g = (r.timeStamp || new Date().getTime()) - h.startTime, v = h.x, w = h.y;
                if (h._unbind(b), h._unbind(f), h._unbind(x), h.options.onBeforeScrollEnd && h.options.onBeforeScrollEnd.call(h, r), 
                h.zoomed) return m = h.scale * h.lastScale, m = Math.max(h.options.zoomMin, m), 
                m = Math.min(h.options.zoomMax, m), h.lastScale = m / h.scale, h.scale = m, h.x = h.originX - h.originX * h.lastScale + h.x, 
                h.y = h.originY - h.originY * h.lastScale + h.y, h.scroller.style[e + "TransitionDuration"] = "200ms", 
                h.scroller.style[e + "Transform"] = T + h.x + "px," + h.y + "px" + y + " scale(" + h.scale + ")", 
                h.zoomed = !1, h.refresh(), void (h.options.onZoomEnd && h.options.onZoomEnd.call(h, r));
                if (!h.moved) return c && (h.doubleTapTimer && h.options.zoom ? (clearTimeout(h.doubleTapTimer), 
                h.doubleTapTimer = null, h.options.onZoomStart && h.options.onZoomStart.call(h, r), 
                h.zoom(h.pointX, h.pointY, 1 == h.scale ? h.options.doubleTapZoom : 1), h.options.onZoomEnd && setTimeout(function() {
                    h.options.onZoomEnd.call(h, r);
                }, 200)) : this.options.handleClick && (h.doubleTapTimer = setTimeout(function() {
                    for (h.doubleTapTimer = null, l = u.target; 1 != l.nodeType; ) l = l.parentNode;
                    "SELECT" != l.tagName && "INPUT" != l.tagName && "TEXTAREA" != l.tagName && (n = document.createEvent("MouseEvents"), 
                    n.initMouseEvent("click", !0, !0, r.view, 1, u.screenX, u.screenY, u.clientX, u.clientY, r.ctrlKey, r.altKey, r.shiftKey, r.metaKey, 0, null), 
                    n._fake = !0, l.dispatchEvent(n));
                }, h.options.zoom ? 250 : 0))), h._resetPos(200), void (h.options.onTouchEnd && h.options.onTouchEnd.call(h, r));
                if (g < 300 && h.options.momentum && (d = v ? h._momentum(v - h.startX, g, -h.x, h.scrollerW - h.wrapperW + h.x, h.options.bounce ? h.wrapperW : 0) : d, 
                S = w ? h._momentum(w - h.startY, g, -h.y, h.maxScrollY < 0 ? h.scrollerH - h.wrapperH + h.y - h.minScrollY : 0, h.options.bounce ? h.wrapperH : 0) : S, 
                v = h.x + d.dist, w = h.y + S.dist, (h.x > 0 && v > 0 || h.x < h.maxScrollX && v < h.maxScrollX) && (d = {
                    dist: 0,
                    time: 0
                }), (h.y > h.minScrollY && w > h.minScrollY || h.y < h.maxScrollY && w < h.maxScrollY) && (S = {
                    dist: 0,
                    time: 0
                })), d.dist || S.dist) return a = o.max(o.max(d.time, S.time), 10), h.options.snap && (i = v - h.absStartX, 
                s = w - h.absStartY, o.abs(i) < h.options.snapThreshold && o.abs(s) < h.options.snapThreshold ? h.scrollTo(h.absStartX, h.absStartY, 200) : (p = h._snap(v, w), 
                v = p.x, w = p.y, a = o.max(p.time, a))), h.scrollTo(t(v), t(w), a), void (h.options.onTouchEnd && h.options.onTouchEnd.call(h, r));
                if (h.options.snap) return i = v - h.absStartX, s = w - h.absStartY, o.abs(i) < h.options.snapThreshold && o.abs(s) < h.options.snapThreshold ? h.scrollTo(h.absStartX, h.absStartY, 200) : (p = h._snap(h.x, h.y), 
                p.x == h.x && p.y == h.y || h.scrollTo(p.x, p.y, p.time)), void (h.options.onTouchEnd && h.options.onTouchEnd.call(h, r));
                h._resetPos(200), h.options.onTouchEnd && h.options.onTouchEnd.call(h, r);
            }
        },
        _resetPos: function(o) {
            var t = this, r = t.x >= 0 ? 0 : t.x < t.maxScrollX ? t.maxScrollX : t.x, l = t.y >= t.minScrollY || t.maxScrollY > 0 ? t.minScrollY : t.y < t.maxScrollY ? t.maxScrollY : t.y;
            return r == t.x && l == t.y ? (t.moved && (t.moved = !1, t.options.onScrollEnd && t.options.onScrollEnd.call(t)), 
            t.hScrollbar && t.options.hideScrollbar && ("webkit" == e && (t.hScrollbarWrapper.style[e + "TransitionDelay"] = "300ms"), 
            t.hScrollbarWrapper.style.opacity = "0"), void (t.vScrollbar && t.options.hideScrollbar && ("webkit" == e && (t.vScrollbarWrapper.style[e + "TransitionDelay"] = "300ms"), 
            t.vScrollbarWrapper.style.opacity = "0"))) : void t.scrollTo(r, l, o || 0);
        },
        _wheel: function(o) {
            var t, e, r, l, n, i = this;
            if ("wheelDeltaX" in o) t = o.wheelDeltaX / 12, e = o.wheelDeltaY / 12; else if ("wheelDelta" in o) t = e = o.wheelDelta / 12; else {
                if (!("detail" in o)) return;
                t = e = 3 * -o.detail;
            }
            return "zoom" == i.options.wheelAction ? (n = i.scale * Math.pow(2, 1 / 3 * (e ? e / Math.abs(e) : 0)), 
            n < i.options.zoomMin && (n = i.options.zoomMin), n > i.options.zoomMax && (n = i.options.zoomMax), 
            void (n != i.scale && (!i.wheelZoomCount && i.options.onZoomStart && i.options.onZoomStart.call(i, o), 
            i.wheelZoomCount++, i.zoom(o.pageX, o.pageY, n, 400), setTimeout(function() {
                i.wheelZoomCount--, !i.wheelZoomCount && i.options.onZoomEnd && i.options.onZoomEnd.call(i, o);
            }, 400)))) : (r = i.x + t, l = i.y + e, r > 0 ? r = 0 : r < i.maxScrollX && (r = i.maxScrollX), 
            l > i.minScrollY ? l = i.minScrollY : l < i.maxScrollY && (l = i.maxScrollY), void (i.maxScrollY < 0 && i.scrollTo(r, l, 0)));
        },
        _mouseout: function(o) {
            var t = o.relatedTarget;
            if (!t) return void this._end(o);
            for (;t = t.parentNode; ) if (t == this.wrapper) return;
            this._end(o);
        },
        _transitionEnd: function(o) {
            var t = this;
            o.target == t.scroller && (t._unbind("webkitTransitionEnd"), t._startAni());
        },
        _startAni: function() {
            var t, e, r, l = this, n = l.x, i = l.y, s = new Date().getTime();
            if (!l.animating) {
                if (!l.steps.length) return void l._resetPos(400);
                if (t = l.steps.shift(), t.x == n && t.y == i && (t.time = 0), l.animating = !0, 
                l.moved = !0, l.options.useTransition) return l._transitionTime(t.time), l._pos(t.x, t.y), 
                l.animating = !1, void (t.time ? l._bind("webkitTransitionEnd") : l._resetPos(0));
                r = function() {
                    var a, c, p = new Date().getTime();
                    return p >= s + t.time ? (l._pos(t.x, t.y), l.animating = !1, l.options.onAnimationEnd && l.options.onAnimationEnd.call(l), 
                    void l._startAni()) : (p = (p - s) / t.time - 1, e = o.sqrt(1 - p * p), a = (t.x - n) * e + n, 
                    c = (t.y - i) * e + i, l._pos(a, c), void (l.animating && (l.aniTime = h(r))));
                }, r();
            }
        },
        _transitionTime: function(o) {
            o += "ms", this.scroller.style[e + "TransitionDuration"] = o, this.hScrollbar && (this.hScrollbarIndicator.style[e + "TransitionDuration"] = o), 
            this.vScrollbar && (this.vScrollbarIndicator.style[e + "TransitionDuration"] = o);
        },
        _momentum: function(e, r, l, n, i) {
            var s = 6e-4, a = o.abs(e) / r, c = a * a / (2 * s), p = 0, m = 0;
            return e > 0 && c > l ? (m = i / (6 / (c / a * s)), l += m, a = a * l / c, c = l) : e < 0 && c > n && (m = i / (6 / (c / a * s)), 
            n += m, a = a * n / c, c = n), c *= e < 0 ? -1 : 1, p = a / s, {
                dist: c,
                time: t(p)
            };
        },
        _offset: function(o) {
            for (var t = 0, e = 0; o; ) t -= o.offsetLeft, e -= o.offsetTop, o = o.offsetParent;
            return o != this.wrapper && (t *= this.scale, e *= this.scale), {
                left: t,
                top: e
            };
        },
        _snap: function(e, r) {
            var l, n, i, s, a, c, p = this;
            for (i = p.pagesX.length - 1, l = 0, n = p.pagesX.length; l < n; l++) if (e >= p.pagesX[l]) {
                i = l;
                break;
            }
            for (i == p.currPageX && i > 0 && p.dirX < 0 && i--, e = p.pagesX[i], a = o.abs(e - p.pagesX[p.currPageX]), 
            a = a ? o.abs(p.x - e) / a * 500 : 0, p.currPageX = i, i = p.pagesY.length - 1, 
            l = 0; l < i; l++) if (r >= p.pagesY[l]) {
                i = l;
                break;
            }
            return i == p.currPageY && i > 0 && p.dirY < 0 && i--, r = p.pagesY[i], c = o.abs(r - p.pagesY[p.currPageY]), 
            c = c ? o.abs(p.y - r) / c * 500 : 0, p.currPageY = i, s = t(o.max(a, c)) || 200, 
            {
                x: e,
                y: r,
                time: s
            };
        },
        _bind: function(o, t, e) {
            var r = this;
            document.addEventListener ? (t || this.scroller).addEventListener(o, this, !!e) : (this.events && "object" == typeof this.events || (this.events = {}), 
            this.events[o] = function(o) {
                r.handleEvent.call(r, o);
            }, (t || this.scroller).attachEvent("on" + o, this.events[o]));
        },
        _unbind: function(o, t, e) {
            document.removeEventListener ? (t || this.scroller).removeEventListener(o, this, !!e) : this.events[o] && (t || this.scroller).detachEvent("on" + o, this.events[o]);
        },
        destroy: function() {
            var o = this;
            o.scroller.style[e + "Transform"] = "", o.hScrollbar = !1, o.vScrollbar = !1, o._scrollbar("h"), 
            o._scrollbar("v"), o._unbind(d, window), o._unbind(S), o._unbind(b), o._unbind(f), 
            o._unbind(x), o.options.hasTouch || (o._unbind(v, o.wrapper), o._unbind(g)), o.options.useTransition && o._unbind("webkitTransitionEnd"), 
            o.options.checkDOMChanges && clearInterval(o.checkDOMTime), o.options.onDestroy && o.options.onDestroy.call(o);
        },
        refresh: function() {
            var o, r, l, n, i = this, s = 0, a = 0;
            if (i.scale < i.options.zoomMin && (i.scale = i.options.zoomMin), i.wrapperW = i.wrapper.clientWidth || 1, 
            i.wrapperH = i.wrapper.clientHeight || 1, i.minScrollY = -i.options.topOffset || 0, 
            i.scrollerW = t(i.scroller.offsetWidth * i.scale), i.scrollerH = t((i.scroller.offsetHeight + i.minScrollY) * i.scale), 
            i.maxScrollX = i.wrapperW - i.scrollerW, i.maxScrollY = i.wrapperH - i.scrollerH + i.minScrollY, 
            i.dirX = 0, i.dirY = 0, i.options.onRefresh && i.options.onRefresh.call(i), i.hScroll = i.options.hScroll && i.maxScrollX < 0, 
            i.vScroll = i.options.vScroll && (!i.options.bounceLock && !i.hScroll || i.scrollerH > i.wrapperH), 
            i.hScrollbar = i.hScroll && i.options.hScrollbar, i.vScrollbar = i.vScroll && i.options.vScrollbar && i.scrollerH > i.wrapperH, 
            o = i._offset(i.wrapper), i.wrapperOffsetLeft = -o.left, i.wrapperOffsetTop = -o.top, 
            "string" == typeof i.options.snap) for (i.pagesX = [], i.pagesY = [], n = i.scroller.querySelectorAll(i.options.snap), 
            r = 0, l = n.length; r < l; r++) s = i._offset(n[r]), s.left += i.wrapperOffsetLeft, 
            s.top += i.wrapperOffsetTop, i.pagesX[r] = s.left < i.maxScrollX ? i.maxScrollX : s.left * i.scale, 
            i.pagesY[r] = s.top < i.maxScrollY ? i.maxScrollY : s.top * i.scale; else if (i.options.snap) {
                for (i.pagesX = []; s >= i.maxScrollX; ) i.pagesX[a] = s, s -= i.wrapperW, a++;
                for (i.maxScrollX % i.wrapperW && (i.pagesX[i.pagesX.length] = i.maxScrollX - i.pagesX[i.pagesX.length - 1] + i.pagesX[i.pagesX.length - 1]), 
                s = 0, a = 0, i.pagesY = []; s >= i.maxScrollY; ) i.pagesY[a] = s, s -= i.wrapperH, 
                a++;
                i.maxScrollY % i.wrapperH && (i.pagesY[i.pagesY.length] = i.maxScrollY - i.pagesY[i.pagesY.length - 1] + i.pagesY[i.pagesY.length - 1]);
            }
            i._scrollbar("h"), i._scrollbar("v"), i.zoomed || (i.scroller.style[e + "TransitionDuration"] = "0", 
            i._resetPos(200));
        },
        scrollTo: function(o, t, e, r) {
            var l, n, i = this, s = o;
            for (i.stop(), s.length || (s = [ {
                x: o,
                y: t,
                time: e,
                relative: r
            } ]), l = 0, n = s.length; l < n; l++) s[l].relative && (s[l].x = i.x - s[l].x, 
            s[l].y = i.y - s[l].y), i.steps.push({
                x: s[l].x,
                y: s[l].y,
                time: s[l].time || 0
            });
            i._startAni();
        },
        scrollToElement: function(t, e) {
            var r, l = this;
            t = t.nodeType ? t : l.scroller.querySelector(t), t && (r = l._offset(t), r.left += l.wrapperOffsetLeft, 
            r.top += l.wrapperOffsetTop, r.left = r.left > 0 ? 0 : r.left < l.maxScrollX ? l.maxScrollX : r.left, 
            r.top = r.top > l.minScrollY ? l.minScrollY : r.top < l.maxScrollY ? l.maxScrollY : r.top, 
            e = void 0 === e ? o.max(2 * o.abs(r.left), 2 * o.abs(r.top)) : e, l.scrollTo(r.left, r.top, e));
        },
        scrollToPage: function(o, t, e) {
            var r, l, n = this;
            e = void 0 === e ? 400 : e, n.options.onScrollStart && n.options.onScrollStart.call(n), 
            n.options.snap ? (o = "next" == o ? n.currPageX + 1 : "prev" == o ? n.currPageX - 1 : o, 
            t = "next" == t ? n.currPageY + 1 : "prev" == t ? n.currPageY - 1 : t, o = o < 0 ? 0 : o > n.pagesX.length - 1 ? n.pagesX.length - 1 : o, 
            t = t < 0 ? 0 : t > n.pagesY.length - 1 ? n.pagesY.length - 1 : t, n.currPageX = o, 
            n.currPageY = t, r = n.pagesX[o], l = n.pagesY[t]) : (r = -n.wrapperW * o, l = -n.wrapperH * t, 
            r < n.maxScrollX && (r = n.maxScrollX), l < n.maxScrollY && (l = n.maxScrollY)), 
            n.scrollTo(r, l, e);
        },
        disable: function() {
            this.stop(), this._resetPos(0), this.enabled = !1, this._unbind(b), this._unbind(f), 
            this._unbind(x);
        },
        enable: function() {
            this.enabled = !0;
        },
        stop: function() {
            this.options.useTransition ? this._unbind("webkitTransitionEnd") : u(this.aniTime), 
            this.steps = [], this.moved = !1, this.animating = !1;
        },
        zoom: function(o, t, r, l) {
            var n = this, i = r / n.scale;
            n.options.useTransform && (n.zoomed = !0, l = void 0 === l ? 200 : l, o = o - n.wrapperOffsetLeft - n.x, 
            t = t - n.wrapperOffsetTop - n.y, n.x = o - o * i + n.x, n.y = t - t * i + n.y, 
            n.scale = r, n.refresh(), n.x = n.x > 0 ? 0 : n.x < n.maxScrollX ? n.maxScrollX : n.x, 
            n.y = n.y > n.minScrollY ? n.minScrollY : n.y < n.maxScrollY ? n.maxScrollY : n.y, 
            n.scroller.style[e + "TransitionDuration"] = l + "ms", n.scroller.style[e + "Transform"] = T + n.x + "px," + n.y + "px" + y + " scale(" + r + ")", 
            n.zoomed = !1);
        },
        isReady: function() {
            return !this.moved && !this.zoomed && !this.animating;
        }
    },  true ? exports.iScroll = w : window.iScroll = w;
}(), module.exports = exports.iScroll;

/***/ },

/***/ 288:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(3) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e) {
    "use strict";
    return function(n) {
        return e({
            classes: [ "profile-popup" ]
        }, n);
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 292:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(305), __webpack_require__(126), __webpack_require__(118), __webpack_require__(159), __webpack_require__(71) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(i, t, e, r, n) {
    "use strict";
    return i.extend({
        picturefill: function() {
            r.call(this.$view), n(this.$view.find("img").toArray());
        },
        dateFormatter: function() {
            e.init(this.$view);
        }
    }).mixin(t);
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 297:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<");if(t.s(t.f("unlink",c,p,1),c,p,0,12,15,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("div");});c.pop();}if(!t.s(t.f("unlink",c,p,1),c,p,1,0,0,"")){t.b("a target=\"_blank\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\"");};t.b(" class=\"gallery-projects-wrap left cfix user-view-link\">");t.b("\n" + i);t.b("  <div class=\"project-cover-container\">");t.b("\n" + i);if(t.s(t.f("project_covers",c,p,1),c,p,0,200,473,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <div class=\"project-cover-wrap");if(!t.s(t.d(".",c,p,1),c,p,1,0,0,"")){t.b(" empty");};t.b("\">");t.b("\n" + i);t.b("        <img class=\"project-cover");if(!t.s(t.d(".",c,p,1),c,p,1,0,0,"")){t.b(" empty");};t.b("\" src=\"");if(t.s(t.d(".",c,p,1),c,p,0,404,411,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.v(t.f("url",c,p,0)));});c.pop();}if(!t.s(t.d(".",c,p,1),c,p,1,0,0,"")){t.b(t.v(t.d("project_covers.0.url",c,p,0)));};t.b("\">");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);});c.pop();}if(!t.s(t.f("project_covers",c,p,1),c,p,1,0,0,"")){t.b("      <div class=\"project-cover-wrap empty\"></div>");t.b("\n" + i);t.b("      <div class=\"project-cover-wrap empty\"></div>");t.b("\n" + i);t.b("      <div class=\"project-cover-wrap empty\"></div>");t.b("\n" + i);};t.b("  </div>");t.b("\n" + i);if(!t.s(t.f("unlink",c,p,1),c,p,1,0,0,"")){t.b("  <div class=\"gallery-cover-overlay\">");t.b("\n" + i);t.b("    <div class=\"gallery-cover-overlay-text\">");t.b(t.v(t.f("gallery_text",c,p,0)));t.b("\n" + i);if(!t.s(t.f("gallery_text",c,p,1),c,p,1,0,0,"")){t.b("      ");if(t.s(t.f("translate",c,p,1),c,p,0,858,894,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("user_cover_view_profile|View Profile");});c.pop();}t.b("\n" + i);t.b("    ");};t.b("&nbsp;<span class=\"rarr\">&rarr;</span></div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);};t.b("</");if(t.s(t.f("unlink",c,p,1),c,p,0,1011,1014,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("div");});c.pop();}if(!t.s(t.f("unlink",c,p,1),c,p,1,0,0,"")){t.b("a");};t.b(">");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<{{#unlink}}div{{/unlink}}{{^unlink}}a target=\"_blank\" href=\"{{url}}\"{{/unlink}} class=\"gallery-projects-wrap left cfix user-view-link\">\n  <div class=\"project-cover-container\">\n    {{#project_covers}}\n      <div class=\"project-cover-wrap{{^.}} empty{{/.}}\">\n        {{! TODO: change php/js to not pass unnecessary empty projects anymore }}\n        <img class=\"project-cover{{^.}} empty{{/.}}\" src=\"{{#.}}{{url}}{{/.}}{{^.}}{{project_covers.0.url}}{{/.}}\">\n      </div>\n    {{/project_covers}}\n    {{^project_covers}}\n      <div class=\"project-cover-wrap empty\"></div>\n      <div class=\"project-cover-wrap empty\"></div>\n      <div class=\"project-cover-wrap empty\"></div>\n    {{/project_covers}}\n  </div>\n  {{^unlink}}\n  <div class=\"gallery-cover-overlay\">\n    <div class=\"gallery-cover-overlay-text\">{{gallery_text}}\n    {{^gallery_text}}\n      {{#translate}}user_cover_view_profile|View Profile{{/translate}}\n    {{/gallery_text}}&nbsp;<span class=\"rarr\">&rarr;</span></div>\n  </div>\n  {{/unlink}}\n</{{#unlink}}div{{/unlink}}{{^unlink}}a{{/unlink}}>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(55), __webpack_require__(56) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, n, i) {
    "use strict";
    return i.extend({
        stolenFunctions: {
            bind: !1,
            unbind: !1
        },
        init: function(t, n, i) {
            this._super(t), this.newViews = [], this.views = [], this.ViewType = n, this._emptyTemplate = i;
        },
        bind: function() {
            return this._useBorrowedFunctions(function() {
                return this._bind();
            });
        },
        unbind: function() {
            return this._useBorrowedFunctions(function() {
                return this._unbind();
            });
        },
        _useBorrowedFunctions: function(t) {
            this._borrowViewFunctions();
            var n = t.call(this);
            return this._giveBackViewFunctions(), n;
        },
        _borrowViewFunctions: function() {
            var n;
            for (n in this.stolenFunctions) this.stolenFunctions[n] = this.ViewType.prototype[n], 
            this["_" + n] = this.stolenFunctions[n].bind(this), this.ViewType.prototype[n] = t.noop;
        },
        _giveBackViewFunctions: function() {
            var n;
            for (n in this.stolenFunctions) this.stolenFunctions[n] && (this.ViewType.prototype[n] = this.stolenFunctions[n], 
            this["_" + n] = t.noop, this.stolenFunctions[n] = !1);
        },
        initChildren: function() {
            this.$parent.children().each(function(n, i) {
                var e = new this.ViewType(this.$parent, t(i));
                e.rendered(), this.newViews.push(e);
            }.bind(this)), this.views = this.newViews;
        },
        setContents: function(t) {
            this.$parent.html(t);
        },
        setEmpty: function(t) {
            return this.setContents(this._emptyTemplate(t));
        },
        render: function(t) {
            return this.trigger("prerender", this.$parent, this.views), this.newViews = t.map(function(t) {
                var n = new this.ViewType(this.$parent);
                return n.render(t), n;
            }, this), this.views = this.views.concat(this.newViews), this.trigger("postrender", this.$parent, this.getNewElements()), 
            this.getNewElements();
        },
        destroy: function() {
            this._useBorrowedFunctions(function() {
                this.views.forEach(function(t) {
                    t.destroy();
                }), this._unbind();
            }.bind(this)), this.$parent.empty(), this.views = this.newViews = [];
        },
        reset: function(t, n) {
            this.destroy(), this.ViewType = t, this._emptyTemplate = n, this.bind();
        },
        getNewElements: function() {
            return t(this.newViews.map(function(t) {
                return t.$view[0];
            }));
        }
    }, {
        init: function() {
            var t = n.apply(this, arguments);
            return t._useBorrowedFunctions(function() {
                t.initChildren(), t._bind(), t.trigger("init", t.$parent, t.getNewElements());
            }), t;
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 305:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(56) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(n, i) {
    "use strict";
    return i.extend({
        init: function(n, i) {
            this._super.apply(this, arguments), i && (this.$view = i), this.$parent = !n && i ? this.$view.parent() : n;
        },
        rendered: function() {
            this.bind && this.bind();
        },
        destroy: function() {
            this.unbind && this.unbind(), this._super();
        },
        bind: function() {},
        unbind: function() {}
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(23), __webpack_require__(10), __webpack_require__(85) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, i, t) {
    "use strict";
    return {
        PAGE_URLS: e.PAGE_URLS,
        layout: {
            is_member: i.is_member || !1
        },
        is_team: i.is_team,
        profile: t.toJSON()
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 315:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(10), __webpack_require__(0), __webpack_require__(29), __webpack_require__(175), __webpack_require__(337) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(n, e, i, o, t) {
    "use strict";
    function r(n) {
        i.is("phone") && !s && (s = o(n));
    }
    var s;
    return {
        init: function() {
            var o, s = e(".js-profile-owner-header");
            s.length && (o = new t(n.team_links), o.setContext(s.find(".js-teams-dropdown-toggle")), 
            i.on("phone:enter", function() {
                r(s);
            }), r(s));
        }
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(i) {
    "use strict";
    return {
        init: function() {
            var o = i(window), n = i("html");
            o.scrollTop() > 0 ? n.css("overflow", "visible") : o.one("scroll", function() {
                n.css("overflow", "visible");
            });
        }
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 33:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(3), __webpack_require__(51), __webpack_require__(100), __webpack_require__(30), __webpack_require__(27) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, t, n, i, r, o) {
    "use strict";
    function d(e, t) {
        return "undefined" == typeof t || "object" == typeof e;
    }
    return r.extend({
        init: function(n, i) {
            var r, o;
            d(n, i) && (i = n, n = void 0), "string" == typeof i && (o = e(i), r = o[0]), i instanceof e && (o = i, 
            r = o[0]), i instanceof window.Element && (r = i, o = e(r)), o && (i = t({}, r.dataset || o.data())), 
            this._super(n, i), this._view.$view = o, o && this._view.trigger("postrender", o);
        }
    }, {
        VIEW_CLASS: o
    }).mixin(n).mixin(i);
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(4), __webpack_require__(143) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, e, n) {
    "use strict";
    return e.extend({
        init: function(e) {
            this._$context = e, this._share = n.init(t.extend(e.data(), {
                loggedLocation: "profile"
            }));
        },
        bind: function() {
            this._share.setContext(this._$context);
        },
        unbind: function() {
            this._share.destroy();
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(23), __webpack_require__(10), __webpack_require__(0), __webpack_require__(380), __webpack_require__(382), __webpack_require__(383), __webpack_require__(381), __webpack_require__(11), __webpack_require__(19), __webpack_require__(29) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, n, t, o, i, r, s, a, c, f) {
    "use strict";
    var l = "projects", p = [ "resume", "stats", "editor" ], u = t(".js-profile-gallery-content"), d = new s(e.SEGMENT_DEPTH, l, p), g = new o(n.offset, d.getSegment());
    return g.init = function(e, o, s) {
        function l(e) {
            g.section = e, "info" !== e && g.reload(e), i.update(g.section);
        }
        var p;
        g.initCollection(u, e, o, s), n.is_empty || g.bind(), d.bind(function(e) {
            l(e);
        }), p = a.extend({
            _getButtonContainer: function() {
                return t();
            }
        }).init(t(".js-search-form")), p.commit = function(e) {
            d.push(window.location.protocol + "//" + window.location.host + window.location.pathname + "?" + t.param(e.data));
        }, t(".js-profile-nav").on("click", ".js-section", function(e) {
            var n = t(this).data("section");
            ("info" === n || n === d.getSegment() && g.section !== n) && (e.stopPropagation(), 
            e.preventDefault(), l(n));
        }), f.on("phone:enter tablet:enter desktop:enter", function() {
            i.update(g.section);
        }), i.update(g.section), g.on("before", function() {
            r.show();
        }).on("success error", function() {
            r.hide();
        }).on("error", function(e) {
            var n = t(".js-profile-nav");
            c(n, e.messages);
        }), g.trigger("init");
    }, g;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(21), __webpack_require__(28), __webpack_require__(20), __webpack_require__(374) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, t, o, i) {
    "use strict";
    var n = o.extend(i);
    return e.extend({}, {
        VIEW_CLASS: {
            phone: t.extend(i),
            tablet: n,
            desktop: n
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(5), __webpack_require__(21), __webpack_require__(28), __webpack_require__(42), __webpack_require__(339) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, t, a, n, o, i) {
    "use strict";
    var s, r;
    return s = {
        mustache: i,
        templateData: function() {
            var e = this._super();
            return e.title = t.translate("profile_teams_my_teams", "My Teams"), e.classes = [ "teams-dropdown" ], 
            e;
        }
    }, r = {
        position: function() {
            this.$view.appendTo(".js-teams-dropdown-wrap");
        }
    }, a.extend({}, {
        VIEW_CLASS: {
            phone: n.extend(s),
            tablet: o.extend(s).extend(r),
            desktop: o.extend(s).extend(r)
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<input type=hidden data-validate=\"");t.b(t.v(t.f("validate",c,p,0)));t.b("\" class=\"form-hidden");if(t.s(t.f("classes",c,p,1),c,p,0,78,84,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" ");t.b(t.v(t.d(".",c,p,0)));});c.pop();}t.b("\" id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" name=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" value=\"");t.b(t.v(t.f("value",c,p,0)));t.b("\">");return t.fl(); },partials: {}, subs: {  }}, "<input type=hidden data-validate=\"{{validate}}\" class=\"form-hidden{{#classes}} {{.}}{{/classes}}\" id=\"{{id}}\" name=\"{{id}}\" value=\"{{value}}\">", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<h1 class=\"teams-dropdown-header\">");t.b("\n" + i);t.b("  ");if(t.s(t.f("translate",c,p,1),c,p,0,51,76,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_my_teams|My Teams");});c.pop();}t.b("\n" + i);t.b("</h1>");t.b("\n" + i);t.b("<ul class=\"teams-dropdown-list\">");t.b("\n" + i);if(t.s(t.f("data",c,p,1),c,p,0,141,269,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <li class=\"teams-dropdown-team\"><a href=\"");t.b(t.v(t.d("urls.relative",c,p,0)));t.b("\" class=\"");if(t.s(t.f("is_active",c,p,1),c,p,0,227,233,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("active");});c.pop();}t.b("\">");t.b(t.v(t.f("name",c,p,0)));t.b("</a></li>");t.b("\n" + i);});c.pop();}t.b("</ul>");t.b("\n" + i);t.b("<a class=\"teams-dropdown-add-team\" href=\"");t.b(t.v(t.f("onboarding_url",c,p,0)));t.b("\">+ ");if(t.s(t.f("translate",c,p,1),c,p,0,362,395,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_add_new_page|Add New Page");});c.pop();}t.b("</a>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<h1 class=\"teams-dropdown-header\">\n  {{#translate}}profile_my_teams|My Teams{{/translate}}\n</h1>\n<ul class=\"teams-dropdown-list\">\n  {{#data}}\n    <li class=\"teams-dropdown-team\"><a href=\"{{urls.relative}}\" class=\"{{#is_active}}active{{/is_active}}\">{{name}}</a></li>\n  {{/data}}\n</ul>\n<a class=\"teams-dropdown-add-team\" href=\"{{onboarding_url}}\">+ {{#translate}}profile_add_new_page|Add New Page{{/translate}}</a>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(44) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t) {
    "use strict";
    function e() {
        return !1;
    }
    return t.widget("be.autosuggest", t.ui.autocomplete, {
        options: {
            focus: e,
            noMatchTemplate: null,
            hasMatch: function(t) {
                var e = this.term.toLowerCase();
                return t.some(function(t) {
                    return e === String(t.label || t.value || t).toLowerCase();
                });
            },
            prepend: !1
        },
        _noMatch: function(e, s) {
            var n = this.options.noMatchTemplate, i = this.options.prepend;
            t.isFunction(n) && t(n({
                term: this.term,
                items: s
            }))[i ? "prependTo" : "appendTo"](this.menu.element).on("mouseover", function() {
                t(this).parent().find(".ui-state-focus").removeClass("ui-state-focus");
            });
        },
        _hasNoMatch: function(t) {
            return this.options.noMatchTemplate && !this.options.hasMatch.call(this, t);
        },
        __response: function(t) {
            !this._hasNoMatch(t) || t && t.length || this.options.disabled || this.cancelSearch ? this._super(t) : (t = [], 
            this._trigger("response", null, {
                content: t
            }), this._suggest(t), this._trigger("open"));
        },
        _suggest: function(t) {
            this._super(t), this._hasNoMatch(t) && this._noMatch(t);
        },
        _create: function() {
            this._super(), this.options.messages && this.options.messages.placeholder && this.element.prop("placeholder", this.options.messages.placeholder);
        },
        _resizeMenu: function() {
            var e = this.menu.element, s = this.options.width;
            t.isNumeric(s) ? e.outerWidth(s) : this._super();
        },
        _renderItem: function(e, s) {
            var n = this.options.itemTemplate;
            return t.isFunction(n) ? t(n(s)).appendTo(e) : this._super(e, s);
        },
        clear: function() {
            this._value("");
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 360:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_profileGallery": __webpack_require__(389).template,"lib/_follow/_buttonUserSmall": __webpack_require__(60).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<lib/_profileGallery1",c,p,""));return t.fl(); },partials: {"<lib/_profileGallery1":{name:"lib/_profileGallery", partials: {"<follow_buttonlib/_follow/_buttonUserSmall0":{name:"lib/_follow/_buttonUserSmall", partials: {}, subs: {  }}}, subs: { "follow_button": function(c,p,t,i) {t.b(t.rp("<follow_buttonlib/_follow/_buttonUserSmall0",c,p,"    "));} }}}, subs: {  }}, "{{<lib/_profileGallery}}\n  {{$follow_button}}\n    {{>lib/_follow/_buttonUserSmall}}\n  {{/follow_button}}\n{{/lib/_profileGallery}}", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 374:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(3), __webpack_require__(11), __webpack_require__(25), __webpack_require__(2), __webpack_require__(5), __webpack_require__(208) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, e, i, n, s, o) {
    "use strict";
    return {
        mustache: o,
        templateData: function() {
            return t({
                buttons: [ {
                    label: s.translate("be_dialog_button_okay", "Okay"),
                    classes: [ "form-button-default", "form-submit" ]
                }, {
                    label: s.translate("be_dialog_button_cancel", "Cancel"),
                    classes: [ "form-button-cancel", "js-cancel" ]
                } ]
            }, this._model.data());
        },
        rendered: function() {
            var t = ".popup-buttons, .js-popup-buttons", i = this.$view.find("form"), n = this.$view.filter(".popup"), s = i.length && i.find(t).length ? i : n;
            this._super(), this.$view.on("click", ".js-cancel", this.destroy.bind(this)), this.form = e.extend({
                hideButtonText: this._controller.waitingText
            }).init(s), this.$buttons = this.$view.find(t), this.form.commit = this.commit.bind(this);
        },
        commit: function(t) {
            return n(t).then(this.destroy.bind(this), function(t) {
                throw t;
            }.bind(this));
        }
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 380:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(3), __webpack_require__(165), __webpack_require__(2), __webpack_require__(302) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, e, i, s) {
    "use strict";
    return e.extend({
        _xhr: i,
        init: function(t, e) {
            this._super("window", t), this.section = e;
        },
        _firstLoad: !0,
        initCollection: function(t, e, i, n) {
            this._viewMap = e, this._emptyTemplateMap = i, this._emptyTemplateData = n, this.collection = s.init(t, this._viewMap(this.section), this._emptyTemplateMap(this.section));
        },
        hasMoreResults: function(t) {
            return t.section_content.length > 0;
        },
        getNextOffset: function(t) {
            return t.offset;
        },
        reload: function() {
            return this.collection.$parent.attr("data-section", this.section), this.collection.reset(this._viewMap(this.section), this._emptyTemplateMap(this.section)), 
            this._firstLoad = !0, this._super(0, {}, document.location.href);
        },
        loaded: function(e) {
            var i = 0 === this.offset && this._firstLoad && !this.hasMoreResults(e), s = t({}, this._emptyTemplateData);
            return this._firstLoad = !1, e.search && (s.search = e.search), i ? this.collection.setEmpty(s) : this.collection.render(e.section_content);
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 381:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(82), __webpack_require__(35), __webpack_require__(57) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, e, i, n) {
    "use strict";
    var s, h, r;
    return e.extend({
        init: function(t, e, n) {
            this.segmentDepth = t || 1, this.defaultSegment = e || "", this.ignoredSegments = n || [], 
            this.isInPath = !0, this.prefixPath = this._getPrefixPath(), this.hrefPrefix = i.getOrigin() + "/" + this.prefixPath;
        },
        bind: function(e) {
            var i = this;
            s = function(t) {
                var e = this.href;
                i._isInPrefixPath(e) && (i.push(e), t.preventDefault());
            }, h = function() {
                var e = t(this).val();
                i._isInPrefixPath(e) && i.push(e);
            }, r = function() {
                var i = n.getState();
                i && i.prefixPath === this.prefixPath ? (this.isInPath && (e(this.getSegment(window.location.hash)), 
                t("select.js-popstate-listener").val(window.location.href)), this.isInPath = !0) : this.isInPath = !1;
            }.bind(this), t(document.body).on("click", "a", s).on("change", "select.js-popstate-listener", h), 
            t(window).on("popstate.lib-profile-popstatelistener", r);
        },
        push: function(t) {
            n.pushState({
                prefixPath: this.prefixPath
            }, document.title, t), r();
        },
        destroy: function() {
            t(document.body).off("click", "a", s).off("change", "select.js-popstate-listener", h), 
            t(window).off("popstate.lib-profile-popstatelistener", r);
        },
        getSegment: function(t) {
            return this._getSegments(t).slice(this.segmentDepth).join("/") || this.defaultSegment;
        },
        _isInPrefixPath: function(t) {
            var e = this.getSegment(t.replace(i.getOrigin() + "/", "/")), n = decodeURIComponent(t), s = n === this.hrefPrefix || 0 === n.indexOf(this.hrefPrefix + "/");
            return s && this.ignoredSegments.indexOf(e) === -1;
        },
        _getSegments: function(t) {
            return (t || i.getLocation("pathname")).replace(/[\?\#].*/, "").split("/").slice(1);
        },
        _getPrefixPath: function(t) {
            return this._getSegments(t).slice(0, this.segmentDepth).join("/");
        }
    }, {
        init: function(t, e) {
            var i = new this(t);
            return i.bind(e), i;
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 382:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(64), __webpack_require__(23), __webpack_require__(388), __webpack_require__(85), __webpack_require__(29), __webpack_require__(175), __webpack_require__(62), __webpack_require__(8) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, s, t, o, n, i, l) {
    "use strict";
    function a() {
        i.is("phone") && !v && (v = l(e(".js-profile-nav"), !0));
    }
    function r(e) {
        return "following" === e || "followers" === e || "team_members" === e ? "connections" : "gallery";
    }
    function c(s) {
        "collections_following" === s && (s = "collections");
        var t = r(s);
        e(".js-section-header").addClass("hide").filter("[data-section-header='" + t + "']").removeClass("hide").find(".js-section").removeClass("active").addClass("not-active").filter("[data-section='" + s + "']").addClass("active").removeClass("not-active"), 
        e(".js-gallery").attr("data-section", s);
    }
    function d() {
        e(".js-profile-nav").insertAfter(i.is("phone") ? ".js-nav-phone" : ".js-nav-desktop-tablet");
    }
    function f(s) {
        var t = "collections_following" === s || "collections" === s, o = e(".js-profile-collection-select select");
        e(".js-profile-collection-select").toggleClass("hide", !t), C || o.autoselectmenu(), 
        t && o.changeInput("value", window.location.href);
    }
    function u(s) {
        e(".js-search-form").toggleClass("hide", "connections" !== r(s)), g ? e(".js-search-form-input").val("") : g = !0;
    }
    function h(s) {
        e(".js-profile-info-wrap").removeClass("hide-phone").removeClass("hide-tablet").toggleClass("hide", !i.is("desktop") && "info" !== s), 
        e(".js-profile-stats").removeClass("hide-phone").removeClass("hide-tablet").toggleClass("hide", i.is("phone") && "info" !== s), 
        e(".js-gallery").toggleClass("hide", !i.is("desktop") && "info" === s);
    }
    function p(s) {
        var i = e(".js-navmenui-breadcrumbs"), l = [];
        n.get("is_profile_owner") || (l = [ {
            text: t.BREADCRUMBS && t.BREADCRUMBS.DISCOVER || "Discover",
            href: "/search"
        }, {
            text: n.get("display_name"),
            href: n.get("url")
        } ], "connections" === s && l.push({
            text: t.BREADCRUMBS && t.BREADCRUMBS.CONNECTIONS || "Connections"
        }), l[l.length - 1].last = !0, i.replaceWith(o({
            breadcrumbs: l
        })));
    }
    var v, g = !1, C = s("touch");
    return {
        update: function(e) {
            var s = r(e);
            d(), c(e), h(e), p(s), f(e), u(e), a();
        }
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 383:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(79) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, i) {
    "use strict";
    return i.init(e(".js-gallery")).hide();
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 386:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(t.s(t.d("actions.0",c,p,1),c,p,0,14,167,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<div class=\"project-actors\">");t.b("\n" + i);t.b("  <span class=\"project-actors-label show-phone\">");if(t.s(t.f("translate",c,p,1),c,p,0,106,145,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("activity_label_activity_by|Activity by:");});c.pop();}t.b("</span>");t.b("\n" + i);});c.pop();}if(t.s(t.f("actions",c,p,1),c,p,0,196,3415,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <div data-type=\"");t.b(t.v(t.f("type",c,p,0)));t.b("\" class=\"user-item user-item-action ");t.b(t.v(t.f("type",c,p,0)));t.b(" relative cfix");if(t.s(t.f("comment",c,p,1),c,p,0,293,312,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" tooltipi-container");});c.pop();}t.b("\">");t.b("\n");t.b("\n" + i);if(t.s(t.f("user",c,p,1),c,p,0,341,487,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <a target=\"_blank\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" class=\"user-image relative js-mini-profile\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("      <img src=\"");t.b(t.v(t.d("images.50",c,p,0)));t.b("\">");t.b("\n" + i);t.b("    </a>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("team",c,p,1),c,p,0,511,641,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <a target=\"_blank\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" class=\"user-image relative\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("      <img src=\"");t.b(t.v(t.d("images.50",c,p,0)));t.b("\">");t.b("\n" + i);t.b("    </a>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("site",c,p,1),c,p,0,665,790,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <a target=\"_blank\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" class=\"user-image relative\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("      <img src=\"");t.b(t.v(t.f("icon",c,p,0)));t.b("\">");t.b("\n" + i);t.b("    </a>");t.b("\n" + i);});c.pop();}t.b("\n" + i);t.b("    <div class=\"user-info\">");t.b("\n");t.b("\n" + i);if(t.s(t.f("published",c,p,1),c,p,0,978,1255,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <span class=\"action-label new-tag\">new</span>");t.b("\n" + i);t.b("        <a href=\"");t.b(t.v(t.d("user.url",c,p,0)));t.b("\" class=\"user-name\">");t.b(t.v(t.d("user.display_name",c,p,0)));t.b("</a>");t.b("\n" + i);t.b("        <a class=\"user-name-hover see-all-work\" href=\"");t.b(t.v(t.d("user.url",c,p,0)));t.b("\">");if(t.s(t.f("translate",c,p,1),c,p,0,1190,1230,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("activity_label_see_all_work|See All Work");});c.pop();}t.b("</a>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("edited",c,p,1),c,p,0,1288,1583,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <span class=\"action-label beicons-pre beicons-pre-edit\"></span>");t.b("\n" + i);t.b("        <a href=\"");t.b(t.v(t.d("user.url",c,p,0)));t.b("\" class=\"user-name\">");t.b(t.v(t.d("user.display_name",c,p,0)));t.b("</a>");t.b("\n" + i);t.b("        <a class=\"user-name-hover see-all-work\" href=\"");t.b(t.v(t.d("user.url",c,p,0)));t.b("\">");if(t.s(t.f("translate",c,p,1),c,p,0,1518,1558,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("activity_label_see_all_work|See All Work");});c.pop();}t.b("</a>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("appreciated",c,p,1),c,p,0,1618,1986,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <span class=\"action-label beicons-pre beicons-pre-thumb\"></span>");t.b("\n" + i);t.b("        <div class=\"user-name\">");t.b(t.v(t.d("user.display_name",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("        <a data-id=\"");t.b(t.v(t.d("user.id",c,p,0)));t.b("\" href=\"");t.b(t.v(t.d("user.url",c,p,0)));t.b(t.v(t.d("constants.APPRECIATED",c,p,0)));t.b("\" class=\"user-name-hover see-all-appreciations text-ellipsis\">");if(t.s(t.f("translate",c,p,1),c,p,0,1903,1961,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("activity_label_see_all_appreciations|See All Appreciations");});c.pop();}t.b("</a>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("featured",c,p,1),c,p,0,2023,2331,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <span class=\"action-label beicons-pre beicons-pre-badge\"></span>");t.b("\n" + i);t.b("        <div class=\"user-name\">");t.b(t.v(t.d("site.name",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("        <a data-id=\"");t.b(t.v(t.d("site.id",c,p,0)));t.b("\" href=\"");t.b(t.v(t.d("site.url",c,p,0)));t.b("\" class=\"site-name-hover view-gallery text-ellipsis\">");if(t.s(t.f("translate",c,p,1),c,p,0,2266,2306,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("activity_label_view_gallery|View Gallery");});c.pop();}t.b("</a>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("team",c,p,1),c,p,0,2361,2678,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <span class=\"action-label new-tag\">new</span>");t.b("\n" + i);t.b("        <div class=\"user-name\">");t.b(t.v(t.d("team.display_name",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("        <a data-id=\"");t.b(t.v(t.d("team.id",c,p,0)));t.b("\" href=\"");t.b(t.v(t.d("team.url",c,p,0)));t.b("\" class=\"site-name-hover view-gallery text-ellipsis\">");if(t.s(t.f("translate",c,p,1),c,p,0,2593,2653,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("activity_label_see_all_work_from_team|See All Work From Team");});c.pop();}t.b("</a>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("collection",c,p,1),c,p,0,2710,3023,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <span class=\"action-label beicons-pre beicons-pre-collection\"></span>");t.b("\n" + i);t.b("        <div class=\"user-name unselectable\">");t.b(t.v(t.d("user.display_name",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("        <a class=\"user-name-hover see-collection text-ellipsis\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\">");if(t.s(t.f("translate",c,p,1),c,p,0,2954,2998,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("activity_label_see_collection|See Collection");});c.pop();}t.b("</a>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("comment",c,p,1),c,p,0,3058,3380,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <span class=\"action-label beicons-pre beicons-pre-comment\"></span>");t.b("\n" + i);t.b("        <div class=\"user-name unselectable\">");t.b(t.v(t.d("user.display_name",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("        <div class=\"user-name-hover unselectable tooltipi-container\">");t.b(t.v(t.d("user.display_name",c,p,0)));t.b("\n" + i);t.b("          <div class=\"tooltipi see-comment\">");t.b(t.v(t.f("comment",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);});c.pop();}t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);});c.pop();}if(t.s(t.d("actions.0",c,p,1),c,p,0,3442,3450,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("</div>");t.b("\n" + i);});c.pop();}return t.fl(); },partials: {}, subs: {  }}, "{{#actions.0}}\n<div class=\"project-actors\">\n  <span class=\"project-actors-label show-phone\">{{#translate}}activity_label_activity_by|Activity by:{{/translate}}</span>\n{{/actions.0}}\n  {{#actions}}\n  <div data-type=\"{{type}}\" class=\"user-item user-item-action {{type}} relative cfix{{#comment}} tooltipi-container{{/comment}}\">\n\n    {{#user}}\n    <a target=\"_blank\" href=\"{{url}}\" class=\"user-image relative js-mini-profile\" data-id=\"{{id}}\">\n      <img src=\"{{images.50}}\">\n    </a>\n    {{/user}}\n\n    {{#team}}\n    <a target=\"_blank\" href=\"{{url}}\" class=\"user-image relative\" data-id=\"{{id}}\">\n      <img src=\"{{images.50}}\">\n    </a>\n    {{/team}}\n\n    {{#site}}\n    <a target=\"_blank\" href=\"{{url}}\" class=\"user-image relative\" data-id=\"{{id}}\">\n      <img src=\"{{icon}}\">\n    </a>\n    {{/site}}\n\n    <div class=\"user-info\">\n\n      {{! this needs to be refactored, but activity will need to be refactored at the same time to provide correct data here }}\n      {{#published}}\n        <span class=\"action-label new-tag\">new</span>\n        <a href=\"{{user.url}}\" class=\"user-name\">{{user.display_name}}</a>\n        <a class=\"user-name-hover see-all-work\" href=\"{{user.url}}\">{{#translate}}activity_label_see_all_work|See All Work{{/translate}}</a>\n      {{/published}}\n\n      {{#edited}}\n        <span class=\"action-label beicons-pre beicons-pre-edit\"></span>\n        <a href=\"{{user.url}}\" class=\"user-name\">{{user.display_name}}</a>\n        <a class=\"user-name-hover see-all-work\" href=\"{{user.url}}\">{{#translate}}activity_label_see_all_work|See All Work{{/translate}}</a>\n      {{/edited}}\n\n      {{#appreciated}}\n        <span class=\"action-label beicons-pre beicons-pre-thumb\"></span>\n        <div class=\"user-name\">{{user.display_name}}</div>\n        <a data-id=\"{{user.id}}\" href=\"{{user.url}}{{constants.APPRECIATED}}\" class=\"user-name-hover see-all-appreciations text-ellipsis\">{{#translate}}activity_label_see_all_appreciations|See All Appreciations{{/translate}}</a>\n      {{/appreciated}}\n\n      {{#featured}}\n        <span class=\"action-label beicons-pre beicons-pre-badge\"></span>\n        <div class=\"user-name\">{{site.name}}</div>\n        <a data-id=\"{{site.id}}\" href=\"{{site.url}}\" class=\"site-name-hover view-gallery text-ellipsis\">{{#translate}}activity_label_view_gallery|View Gallery{{/translate}}</a>\n      {{/featured}}\n\n      {{#team}}\n        <span class=\"action-label new-tag\">new</span>\n        <div class=\"user-name\">{{team.display_name}}</div>\n        <a data-id=\"{{team.id}}\" href=\"{{team.url}}\" class=\"site-name-hover view-gallery text-ellipsis\">{{#translate}}activity_label_see_all_work_from_team|See All Work From Team{{/translate}}</a>\n      {{/team}}\n\n      {{#collection}}\n        <span class=\"action-label beicons-pre beicons-pre-collection\"></span>\n        <div class=\"user-name unselectable\">{{user.display_name}}</div>\n        <a class=\"user-name-hover see-collection text-ellipsis\" href=\"{{url}}\">{{#translate}}activity_label_see_collection|See Collection{{/translate}}</a>\n      {{/collection}}\n\n      {{#comment}}\n        <span class=\"action-label beicons-pre beicons-pre-comment\"></span>\n        <div class=\"user-name unselectable\">{{user.display_name}}</div>\n        <div class=\"user-name-hover unselectable tooltipi-container\">{{user.display_name}}\n          <div class=\"tooltipi see-comment\">{{comment}}</div>\n        </div>\n      {{/comment}}\n    </div>\n  </div>\n  {{/actions}}\n{{#actions.0}}\n</div>\n{{/actions.0}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 388:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"navmenui-breadcrumbs\" class=\"js-navmenui-breadcrumbs\">");t.b("\n" + i);if(t.s(t.f("breadcrumbs",c,p,1),c,p,0,80,256,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"breadcrumb-text\" classes=\"breadcrumb\">");if(!t.s(t.f("last",c,p,1),c,p,1,0,0,"")){t.b("<a href=\"");t.b(t.v(t.f("href",c,p,0)));t.b("\">");};t.b(t.v(t.f("text",c,p,0)));if(!t.s(t.f("last",c,p,1),c,p,1,0,0,"")){t.b("</a>");};t.b("</span>");if(!t.s(t.f("last",c,p,1),c,p,1,0,0,"")){t.b("<span class=\"rarr\">&rarr;</span>");};});c.pop();}t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }}, "<div id=\"navmenui-breadcrumbs\" class=\"js-navmenui-breadcrumbs\">\n{{#breadcrumbs}}\n<span class=\"breadcrumb-text\" classes=\"breadcrumb\">{{^last}}<a href=\"{{href}}\">{{/last}}{{text}}{{^last}}</a>{{/last}}</span>{{^last}}<span class=\"rarr\">&rarr;</span>{{/last}}{{/breadcrumbs}}\n</div>", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 389:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"profile/team/_overlays/_memberOverlay": __webpack_require__(391).template,"lib/_covers/_galleryProjects": __webpack_require__(297).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" class=\"js-item list-item js-profile-gallery-cover cfix user-row editable\" id=\"user-");t.b(t.v(t.f("id",c,p,0)));t.b("\"");if(t.s(t.f("ordinal_id",c,p,1),c,p,0,127,157,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" data-ordinal=\"");t.b(t.v(t.f("ordinal_id",c,p,0)));t.b("\"");});c.pop();}t.b(">");t.b("\n" + i);if(t.s(t.f("is_editable",c,p,1),c,p,0,192,244,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<profile/team/_overlays/_memberOverlay0",c,p,"    "));});c.pop();}t.b("  <");if(t.s(t.f("unlink",c,p,1),c,p,0,275,278,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("div");});c.pop();}if(!t.s(t.f("unlink",c,p,1),c,p,1,0,0,"")){t.b("a target=\"_blank\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\"");};t.b(" class=\"user-image-wrap user-image-link left relative\">");t.b("\n");t.b("\n" + i);if(t.s(t.f("team",c,p,1),c,p,0,413,469,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <img src=\"");t.b(t.v(t.d("images.50",c,p,0)));t.b("\" class=\"team-image\">");t.b("\n" + i);});c.pop();}t.b("    <img src=\"");t.b(t.v(t.d("images.115",c,p,0)));t.b("\" class=\"user-image\">");t.b("\n");t.b("\n" + i);t.b("  </");if(t.s(t.f("unlink",c,p,1),c,p,0,545,548,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("div");});c.pop();}if(!t.s(t.f("unlink",c,p,1),c,p,1,0,0,"")){t.b("a");};t.b(">");t.b("\n");t.b("\n" + i);t.b("  <div class=\"user-info-wrap left\">");t.b("\n" + i);t.b("    <");if(t.s(t.f("unlink",c,p,1),c,p,0,637,641,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("span");});c.pop();}if(!t.s(t.f("unlink",c,p,1),c,p,1,0,0,"")){t.b("a target=\"_blank\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\"");};t.b(" class=\"user-name text-ellipsis");if(t.s(t.f("is_team_profile",c,p,1),c,p,0,757,770,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" team-profile");});c.pop();}t.b("\">");t.b(t.v(t.f("display_name",c,p,0)));t.b("</");if(t.s(t.f("unlink",c,p,1),c,p,0,821,825,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("span");});c.pop();}if(!t.s(t.f("unlink",c,p,1),c,p,1,0,0,"")){t.b("a");};t.b(">");t.b("\n" + i);t.b("    ");if(t.s(t.f("is_team_profile",c,p,1),c,p,0,885,1062,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<a href=\"");t.b(t.v(t.d("PAGE_URLS.TEAM_ONBOARDING",c,p,0)));t.b("\" class=\"team-badge");if(t.s(t.f("verified",c,p,1),c,p,0,955,992,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" beicons-pre beicons-pre-check-circle");});c.pop();}t.b("\">");if(t.s(t.f("translate",c,p,1),c,p,0,1021,1044,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_team_badge|Team");});c.pop();}t.b("</a>");});c.pop();}t.b("\n" + i);if(t.s(t.f("location",c,p,1),c,p,0,1100,1441,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"user-location hide-phone\">");t.b("\n" + i);t.b("      <span class=\"user-label\">");if(t.s(t.f("translate",c,p,1),c,p,0,1189,1218,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("user_cover_location|Location:");});c.pop();}t.b(" </span>");t.b("\n" + i);t.b("      <");if(t.s(t.f("unlink",c,p,1),c,p,0,1259,1263,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("span");});c.pop();}if(!t.s(t.f("unlink",c,p,1),c,p,1,0,0,"")){t.b("a target=\"_blank\" href=\"");t.b(t.v(t.f("location_link",c,p,0)));t.b("\" class=\"location-link\"");};t.b(">");t.b(t.v(t.f("location",c,p,0)));t.b("</");if(t.s(t.f("unlink",c,p,1),c,p,0,1386,1390,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("span");});c.pop();}if(!t.s(t.f("unlink",c,p,1),c,p,1,0,0,"")){t.b("a");};t.b(">");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.d("field_links.0",c,p,1),c,p,0,1478,1895,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"user-fields\">");t.b("\n" + i);t.b("      <span class=\"user-label hide-phone\">");if(t.s(t.f("translate",c,p,1),c,p,0,1565,1590,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("user_cover_fields|Fields:");});c.pop();}t.b(" </span>");t.b("\n" + i);if(t.s(t.f("field_links",c,p,1),c,p,0,1635,1841,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <");if(t.s(t.f("unlink",c,p,1),c,p,0,1656,1660,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("span");});c.pop();}if(!t.s(t.f("unlink",c,p,1),c,p,1,0,0,"")){t.b("a href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" title=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\" class=\"field-link\"");};t.b(">");t.b(t.v(t.f("name",c,p,0)));t.b("</");if(t.s(t.f("unlink",c,p,1),c,p,0,1767,1771,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("span");});c.pop();}if(!t.s(t.f("unlink",c,p,1),c,p,1,0,0,"")){t.b("a");};t.b(">");if(t.s(t.f("separate",c,p,1),c,p,0,1819,1821,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(", ");});c.pop();}t.b("\n" + i);});c.pop();}t.b("    </div> <!-- .user-fields -->");t.b("\n" + i);});c.pop();}t.b("\n" + i);t.b("    <div class=\"user-follow-stats cfix\">");t.b("\n");t.b("\n" + i);t.sub("follow_button",c,p,i);t.b("\n" + i);t.b("      <div class=\"user-stats hide-phone");if(t.s(t.f("is_profile_owner",c,p,1),c,p,0,2061,2066,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" self");});c.pop();}t.b("\">");t.b("\n");t.b("\n" + i);t.b("        <span class=\"cover-stat js-cover-stat-");t.b(t.v(t.d("footer.top_title",c,p,0)));t.b(" cover-stat-");t.b(t.v(t.d("footer.top_title",c,p,0)));t.b(" ");if(t.s(t.d("footer.highlighted",c,p,1),c,p,0,2213,2235,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("cover-stat-highlighted");});c.pop();}if(t.s(t.d("footer.top_icon",c,p,1),c,p,0,2278,2322,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" beicons-pre beicons-pre-");t.b(t.v(t.d("footer.top_icon",c,p,0)));});c.pop();}t.b("\">");t.b("\n" + i);t.b("          ");t.b(t.v(t.d("footer.top_value",c,p,0)));t.b("\n" + i);t.b("        </span>");t.b("\n" + i);t.b("        <span class=\"cover-stat js-cover-stat-");t.b(t.v(t.d("footer.bottom_title",c,p,0)));t.b(" cover-stat-");t.b(t.v(t.d("footer.bottom_title",c,p,0)));t.b(" hide-phone beicons-pre beicons-pre-");t.b(t.v(t.d("footer.bottom_icon",c,p,0)));t.b("\">");t.b("\n" + i);t.b("          ");t.b(t.v(t.d("footer.bottom_value",c,p,0)));t.b("\n" + i);t.b("        </span>");t.b("\n");t.b("\n" + i);t.b("      </div>");t.b("\n");t.b("\n" + i);t.b("    </div> <!-- .user-follow-stats -->");t.b("\n");t.b("\n" + i);t.b("  </div> <!-- .user-info-wrap -->");t.b("\n");t.b("\n" + i);t.b(t.rp("<lib/_covers/_galleryProjects1",c,p,"  "));t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<profile/team/_overlays/_memberOverlay0":{name:"profile/team/_overlays/_memberOverlay", partials: {}, subs: {  }},"<lib/_covers/_galleryProjects1":{name:"lib/_covers/_galleryProjects", partials: {}, subs: {  }}}, subs: { "follow_button": function(c,p,t,i) {} }}, "<div data-id=\"{{id}}\" class=\"js-item list-item js-profile-gallery-cover cfix user-row editable\" id=\"user-{{id}}\"{{#ordinal_id}} data-ordinal=\"{{ordinal_id}}\"{{/ordinal_id}}>\n  {{#is_editable}}\n    {{> profile/team/_overlays/_memberOverlay }}\n  {{/is_editable}}\n  <{{#unlink}}div{{/unlink}}{{^unlink}}a target=\"_blank\" href=\"{{url}}\"{{/unlink}} class=\"user-image-wrap user-image-link left relative\">\n\n    {{#team}}\n      <img src=\"{{images.50}}\" class=\"team-image\">\n    {{/team}}\n    <img src=\"{{images.115}}\" class=\"user-image\">\n\n  </{{#unlink}}div{{/unlink}}{{^unlink}}a{{/unlink}}>\n\n  <div class=\"user-info-wrap left\">\n    <{{#unlink}}span{{/unlink}}{{^unlink}}a target=\"_blank\" href=\"{{url}}\"{{/unlink}} class=\"user-name text-ellipsis{{#is_team_profile}} team-profile{{/is_team_profile}}\">{{display_name}}</{{#unlink}}span{{/unlink}}{{^unlink}}a{{/unlink}}>\n    {{#is_team_profile}}<a href=\"{{PAGE_URLS.TEAM_ONBOARDING}}\" class=\"team-badge{{#verified}} beicons-pre beicons-pre-check-circle{{/verified}}\">{{#translate}}profile_team_badge|Team{{/translate}}</a>{{/is_team_profile}}\n    {{#location}}\n    <div class=\"user-location hide-phone\">\n      <span class=\"user-label\">{{#translate}}user_cover_location|Location:{{/translate}} </span>\n      <{{#unlink}}span{{/unlink}}{{^unlink}}a target=\"_blank\" href=\"{{location_link}}\" class=\"location-link\"{{/unlink}}>{{location}}</{{#unlink}}span{{/unlink}}{{^unlink}}a{{/unlink}}>\n    </div>\n    {{/location}}\n\n    {{#field_links.0}}\n    <div class=\"user-fields\">\n      <span class=\"user-label hide-phone\">{{#translate}}user_cover_fields|Fields:{{/translate}} </span>\n      {{#field_links}}\n        <{{#unlink}}span{{/unlink}}{{^unlink}}a href=\"{{url}}\" title=\"{{name}}\" class=\"field-link\"{{/unlink}}>{{name}}</{{#unlink}}span{{/unlink}}{{^unlink}}a{{/unlink}}>{{#separate}}, {{/separate}}\n      {{/field_links}}\n    </div> <!-- .user-fields -->\n    {{/field_links.0}}\n\n    <div class=\"user-follow-stats cfix\">\n\n      {{$follow_button}}{{/follow_button}}\n\n      <div class=\"user-stats hide-phone{{#is_profile_owner}} self{{/is_profile_owner}}\">\n\n        <span class=\"cover-stat js-cover-stat-{{footer.top_title}} cover-stat-{{footer.top_title}} {{#footer.highlighted}}cover-stat-highlighted{{/footer.highlighted}}{{#footer.top_icon}} beicons-pre beicons-pre-{{footer.top_icon}}{{/footer.top_icon}}\">\n          {{footer.top_value}}\n        </span>\n        <span class=\"cover-stat js-cover-stat-{{footer.bottom_title}} cover-stat-{{footer.bottom_title}} hide-phone beicons-pre beicons-pre-{{footer.bottom_icon}}\">\n          {{footer.bottom_value}}\n        </span>\n\n      </div>\n\n    </div> <!-- .user-follow-stats -->\n\n  </div> <!-- .user-info-wrap -->\n\n  {{>lib/_covers/_galleryProjects}}\n\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 390:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_covers/_actions": __webpack_require__(386).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"js-item cover-block stream-item project-cover-minimal cfix\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);if(t.s(t.f("new",c,p,1),c,p,0,100,146,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <span class=\"project-new-ribbon\"></span>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("project",c,p,1),c,p,0,170,2113,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <div class=\"cover-img\">");t.b("\n" + i);t.b("    <a href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" class=\"cover-img-link\">");t.b("\n" + i);t.b("      <div data-picture=\"\" data-alt=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\">");t.b("\n" + i);if(t.s(t.d("covers.404",c,p,1),c,p,0,314,664,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <div alt=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\" data-src=\"");t.b(t.v(t.d("covers.404",c,p,0)));t.b("\" data-class=\"cover-img-el cover-img-2x\" data-title=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\" data-media=\"(-webkit-min-device-pixel-ratio: 1.3),");t.b("\n" + i);t.b("          (min--moz-device-pixel-ratio: 1.3),");t.b("\n" + i);t.b("          (-o-min-device-pixel-ratio: 4/3),");t.b("\n" + i);t.b("          (min-device-pixel-ratio: 1.3),");t.b("\n" + i);t.b("          (min-resolution: 1.3dppx)\"></div>");t.b("\n" + i);});c.pop();}if(!t.s(t.d("covers.404",c,p,1),c,p,1,0,0,"")){t.b("          <div alt=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\" data-src=\"");t.b(t.v(t.d("covers.202",c,p,0)));t.b("\" data-class=\"cover-img-el\" data-title=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\"></div>");t.b("\n" + i);};t.b("      </div>");t.b("\n" + i);t.b("      <noscript><img alt=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\" title=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\" src=\"");t.b(t.v(t.d("covers.202",c,p,0)));t.b("\" class=\"cover-img-el\"></noscript>");t.b("\n" + i);t.b("    </a>");t.b("\n" + i);t.b("  </div>");t.b("\n");t.b("\n" + i);t.b("  <div class=\"cover-info-stats\">");t.b("\n" + i);t.b("    <div class=\"cover-info\">");t.b("\n" + i);t.b("      <div class=\"cover-name\">");t.b("\n" + i);t.b("        <a href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" class=\"projectName cover-name-link\">");t.b(t.v(t.f("name",c,p,0)));t.b("</a>");t.b("\n" + i);t.b("      </div>");t.b("\n");t.b("\n" + i);t.b("      <div class=\"cover-by-wrap");if(t.s(t.d("owners.1",c,p,1),c,p,0,1204,1222,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" multiple-cover-by");});c.pop();}t.b("\">");t.b("\n" + i);t.b("        <div class=\"cover-by\">by</div>");t.b("\n" + i);t.b("          ");if(t.s(t.d("owners.1",c,p,1),c,p,0,1300,1873,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<div class=\"multiple-owners-list tooltipi-container\">");if(t.s(t.f("translate",c,p,1),c,p,0,1367,1406,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_multiple_owners|Multiple Owners");});c.pop();}t.b("<ul class=\"tooltipi tooltipi-white-links\">");t.b("\n" + i);if(t.s(t.f("owners",c,p,1),c,p,0,1486,1840,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <li class=\"clear\">");t.b("\n" + i);t.b("              <a href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" class=\"multiple-owner-link js-mini-profile\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("                <span class=\"multiple-owner-image-container\">");t.b("\n" + i);t.b("                    <img class=\"multiple-owner-image\" src=\"");t.b(t.v(t.d("images.50",c,p,0)));t.b("\" />");t.b("\n" + i);t.b("                </span>");t.b(t.v(t.f("display_name",c,p,0)));t.b("\n" + i);t.b("              </a>");t.b("\n" + i);t.b("            </li>");t.b("\n" + i);});c.pop();}t.b("          </ul></div>");});c.pop();}t.b("\n");t.b("\n" + i);if(!t.s(t.d("owners.1",c,p,1),c,p,1,0,0,"")){t.b("          <a href=\"");t.b(t.v(t.d("owners.0.url",c,p,0)));t.b("\" class=\"cover-link project-owner js-mini-profile\" data-id=\"");t.b(t.v(t.d("owners.0.id",c,p,0)));t.b("\">");t.b(t.v(t.d("owners.0.display_name",c,p,0)));t.b("</a>");t.b("\n" + i);};t.b("      </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);t.b(t.rp("<lib/_covers/_actions0",c,p,"  "));t.b("\n" + i);if(t.s(t.f("project",c,p,1),c,p,0,2172,3342,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <div class=\"project-appreciations cover-owner-footer-wrap cfix\">");t.b("\n" + i);t.b("    <div class=\"cover-stat-wrap project-appreciations-count cover-stat-appreciations beicons-pre beicons-pre-thumb\">");t.b(t.v(t.d("stats.appreciations",c,p,0)));t.b("</div>");t.b("\n");t.b("\n" + i);t.b("    <div class=\"project-owner-footer hide-phone");if(!t.s(t.d("owners.1",c,p,1),c,p,1,0,0,"")){t.b(" text-ellipsis");};t.b("\">");t.b("\n");t.b("\n" + i);t.b("      <span class=\"project-by-label\">");if(t.s(t.f("translate",c,p,1),c,p,0,2529,2548,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_cover_by|by");});c.pop();}t.b("</span>");t.b("\n" + i);t.b("      ");if(t.s(t.d("owners.1",c,p,1),c,p,0,2589,3122,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<div class=\"multiple-owners-list tooltipi-container\">");if(t.s(t.f("translate",c,p,1),c,p,0,2656,2695,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_multiple_owners|Multiple Owners");});c.pop();}t.b("<ul class=\"tooltipi tooltipi-white-links\">");t.b("\n" + i);if(t.s(t.f("owners",c,p,1),c,p,0,2771,3093,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <li class=\"clear\">");t.b("\n" + i);t.b("          <a href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" class=\"multiple-owner-link js-mini-profile\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("            <span class=\"multiple-owner-image-container\">");t.b("\n" + i);t.b("                <img class=\"multiple-owner-image\" src=\"");t.b(t.v(t.d("images.50",c,p,0)));t.b("\" />");t.b("\n" + i);t.b("            </span>");t.b(t.v(t.f("display_name",c,p,0)));t.b("\n" + i);t.b("          </a>");t.b("\n" + i);t.b("        </li>");t.b("\n" + i);});c.pop();}t.b("      </ul></div>");});c.pop();}t.b("\n");t.b("\n" + i);if(!t.s(t.d("owners.1",c,p,1),c,p,1,0,0,"")){t.b("        <a href=\"");t.b(t.v(t.d("owners.0.url",c,p,0)));t.b("\" class=\"project-owner single-owner js-mini-profile\" data-id=\"");t.b(t.v(t.d("owners.0.id",c,p,0)));t.b("\">");t.b(t.v(t.d("owners.0.display_name",c,p,0)));t.b("</a>");t.b("\n" + i);};t.b("    </div>");t.b("\n");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<lib/_covers/_actions0":{name:"lib/_covers/_actions", partials: {}, subs: {  }}}, subs: {  }}, "<div class=\"js-item cover-block stream-item project-cover-minimal cfix\" data-id=\"{{id}}\">\n  {{#new}}\n  <span class=\"project-new-ribbon\"></span>\n  {{/new}}\n\n  {{#project}}\n  <div class=\"cover-img\">\n    <a href=\"{{url}}\" class=\"cover-img-link\">\n      <div data-picture=\"\" data-alt=\"{{name}}\">\n        {{#covers.404}}\n        <div alt=\"{{name}}\" data-src=\"{{covers.404}}\" data-class=\"cover-img-el cover-img-2x\" data-title=\"{{name}}\" data-media=\"(-webkit-min-device-pixel-ratio: 1.3),\n          (min--moz-device-pixel-ratio: 1.3),\n          (-o-min-device-pixel-ratio: 4/3),\n          (min-device-pixel-ratio: 1.3),\n          (min-resolution: 1.3dppx)\"></div>\n        {{/covers.404}}\n        {{^covers.404}}\n          <div alt=\"{{name}}\" data-src=\"{{covers.202}}\" data-class=\"cover-img-el\" data-title=\"{{name}}\"></div>\n        {{/covers.404}}\n      </div>\n      <noscript><img alt=\"{{name}}\" title=\"{{name}}\" src=\"{{covers.202}}\" class=\"cover-img-el\"></noscript>\n    </a>\n  </div>\n\n  <div class=\"cover-info-stats\">\n    <div class=\"cover-info\">\n      <div class=\"cover-name\">\n        <a href=\"{{url}}\" class=\"projectName cover-name-link\">{{name}}</a>\n      </div>\n\n      <div class=\"cover-by-wrap{{#owners.1}} multiple-cover-by{{/owners.1}}\">\n        <div class=\"cover-by\">by</div>\n          {{#owners.1}}<div class=\"multiple-owners-list tooltipi-container\">{{#translate}}project_multiple_owners|Multiple Owners{{/translate}}<ul class=\"tooltipi tooltipi-white-links\">\n            {{#owners}}\n            <li class=\"clear\">\n              <a href=\"{{url}}\" class=\"multiple-owner-link js-mini-profile\" data-id=\"{{id}}\">\n                <span class=\"multiple-owner-image-container\">\n                    <img class=\"multiple-owner-image\" src=\"{{images.50}}\" />\n                </span>{{display_name}}\n              </a>\n            </li>\n            {{/owners}}\n          </ul></div>{{/owners.1}}\n\n          {{^owners.1}}\n          <a href=\"{{owners.0.url}}\" class=\"cover-link project-owner js-mini-profile\" data-id=\"{{owners.0.id}}\">{{owners.0.display_name}}</a>\n          {{/owners.1}}\n      </div>\n    </div>\n  </div>\n  {{/project}}\n\n  {{> lib/_covers/_actions }}\n\n  {{#project}}\n  <div class=\"project-appreciations cover-owner-footer-wrap cfix\">\n    <div class=\"cover-stat-wrap project-appreciations-count cover-stat-appreciations beicons-pre beicons-pre-thumb\">{{stats.appreciations}}</div>\n\n    <div class=\"project-owner-footer hide-phone{{^owners.1}} text-ellipsis{{/owners.1}}\">\n\n      <span class=\"project-by-label\">{{#translate}}project_cover_by|by{{/translate}}</span>\n      {{#owners.1}}<div class=\"multiple-owners-list tooltipi-container\">{{#translate}}project_multiple_owners|Multiple Owners{{/translate}}<ul class=\"tooltipi tooltipi-white-links\">\n        {{#owners}}\n        <li class=\"clear\">\n          <a href=\"{{url}}\" class=\"multiple-owner-link js-mini-profile\" data-id=\"{{id}}\">\n            <span class=\"multiple-owner-image-container\">\n                <img class=\"multiple-owner-image\" src=\"{{images.50}}\" />\n            </span>{{display_name}}\n          </a>\n        </li>\n        {{/owners}}\n      </ul></div>{{/owners.1}}\n\n      {{^owners.1}}\n        <a href=\"{{owners.0.url}}\" class=\"project-owner single-owner js-mini-profile\" data-id=\"{{owners.0.id}}\">{{owners.0.display_name}}</a>\n      {{/owners.1}}\n    </div>\n\n  </div>\n  {{/project}}\n\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 391:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_reorderButton": __webpack_require__(145).template,"lib/_editButton": __webpack_require__(89).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"controls-overlay hide-phone hide-tablet\">");t.b("\n" + i);t.b(t.rp("<lib/_reorderButton0",c,p,"  "));t.b("  <div class=\"controls-overlay-action controls-overlay-menu tooltipi-container\">");t.b("\n" + i);t.b(t.rp("<lib/_editButton1",c,p,"    "));t.b("    <ul class=\"tooltipi tooltipi-white controls-overlay-menu-items\">");t.b("\n" + i);if(!t.s(t.f("is_profile_owner",c,p,1),c,p,1,0,0,"")){t.b("      <li class=\"controls-overlay-menu-item js-team-member-role-item");if(t.s(t.d("team_member.is_admin",c,p,1),c,p,0,380,385,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" hide");});c.pop();}t.b("\">");t.b("\n" + i);t.b("        <a href=\"#\" class=\"js-team-member-role-link beicons-pre beicons-pre-settings\" data-role=\"admin\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("          ");if(t.s(t.f("translate",c,p,1),c,p,0,559,593,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_team_make_admin|Make Admin");});c.pop();}t.b("\n" + i);t.b("        </a>");t.b("\n" + i);t.b("      </li>");t.b("\n" + i);t.b("      <li class=\"controls-overlay-menu-item js-team-member-role-item");if(!t.s(t.d("team_member.is_admin",c,p,1),c,p,1,0,0,"")){t.b(" hide");};t.b("\">");t.b("\n" + i);t.b("        <a href=\"#\" class=\"js-team-member-role-link beicons-pre beicons-pre-settings\" data-role=\"member\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("          ");if(t.s(t.f("translate",c,p,1),c,p,0,906,944,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_team_remove_admin|Remove Admin");});c.pop();}t.b("\n" + i);t.b("        </a>");t.b("\n" + i);t.b("      </li>");t.b("\n" + i);};t.b("      <li class=\"controls-overlay-menu-item\">");t.b("\n" + i);t.b("        <a href=\"#\" class=\"js-team-member-remove beicons-pre beicons-pre-delete\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("          ");if(!t.s(t.f("is_profile_owner",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("translate",c,p,1),c,p,0,1202,1228,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_team_remove|Remove");});c.pop();}};t.b("\n" + i);t.b("          ");if(t.s(t.f("is_profile_owner",c,p,1),c,p,0,1295,1357,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("translate",c,p,1),c,p,0,1309,1343,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_team_leave_team|Leave Team");});c.pop();}});c.pop();}t.b("\n" + i);t.b("        </a>");t.b("\n" + i);t.b("      </li>");t.b("\n" + i);t.b("    </ul>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<lib/_reorderButton0":{name:"lib/_reorderButton", partials: {}, subs: {  }},"<lib/_editButton1":{name:"lib/_editButton", partials: {}, subs: {  }}}, subs: {  }}, "<div class=\"controls-overlay hide-phone hide-tablet\">\n  {{> lib/_reorderButton }}\n  <div class=\"controls-overlay-action controls-overlay-menu tooltipi-container\">\n    {{> lib/_editButton }}\n    <ul class=\"tooltipi tooltipi-white controls-overlay-menu-items\">\n      {{^is_profile_owner}}\n      <li class=\"controls-overlay-menu-item js-team-member-role-item{{#team_member.is_admin}} hide{{/team_member.is_admin}}\">\n        <a href=\"#\" class=\"js-team-member-role-link beicons-pre beicons-pre-settings\" data-role=\"admin\" data-id=\"{{id}}\">\n          {{#translate}}profile_team_make_admin|Make Admin{{/translate}}\n        </a>\n      </li>\n      <li class=\"controls-overlay-menu-item js-team-member-role-item{{^team_member.is_admin}} hide{{/team_member.is_admin}}\">\n        <a href=\"#\" class=\"js-team-member-role-link beicons-pre beicons-pre-settings\" data-role=\"member\" data-id=\"{{id}}\">\n          {{#translate}}profile_team_remove_admin|Remove Admin{{/translate}}\n        </a>\n      </li>\n      {{/is_profile_owner}}\n      <li class=\"controls-overlay-menu-item\">\n        <a href=\"#\" class=\"js-team-member-remove beicons-pre beicons-pre-delete\" data-id=\"{{id}}\">\n          {{^is_profile_owner}}{{#translate}}profile_team_remove|Remove{{/translate}}{{/is_profile_owner}}\n          {{#is_profile_owner}}{{#translate}}profile_team_leave_team|Leave Team{{/translate}}{{/is_profile_owner}}\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 41:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(3), __webpack_require__(22), __webpack_require__(74), __webpack_require__(47), __webpack_require__(48) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(n, t, o, e, i, l) {
    "use strict";
    var r, u = {};
    return r = {
        init: function(t) {
            n(".js-action-follow", t).each(function() {
                var t = n(this), o = t.data("followee"), e = t.data("following"), l = t.data("entity");
                i.isLoggedIn() ? r._bindFollow(t, l, o, e) : r._bindSignupDialog(t);
            });
        },
        destroy: function() {
            u = {};
        },
        _bindFollow: function(n, t, o, e) {
            u[t] || (u[t] = {}), u[t][o] || (u[t][o] = r._create(t, o, e)), u[t][o].add(n);
        },
        _bindSignupDialog: function(n) {
            var t = n.data(), o = new l({
                id: t.followee,
                entity: t.entity,
                action: "follow"
            });
            o.setContext(n);
        },
        _create: function(n, t, o) {
            var i = new e(t, o, n);
            return this.listenTo(i, "following", function(o) {
                this.trigger("following", t, o, n);
            }).listenTo(i, "request", function(o) {
                this.trigger("request", t, o, n);
            }), "project" === n && this.listenTo(i, "request", this._updateUsersOnProjectFollow), 
            i;
        },
        _updateUsersOnProjectFollow: function(n) {
            n.then(function(n) {
                n.owner_ids.forEach(function(t) {
                    u.user[t] && u.user[t].setFollowing(n.following);
                });
            });
        }
    }, t(r, o), r;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 424:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"profile/user/_overlays/_collectionOverlay": __webpack_require__(511).template,"lib/_covers/_galleryProjects": __webpack_require__(297).template,"lib/_covers/_lock": __webpack_require__(425).template,"lib/_follow/_buttonCollectionSmall": __webpack_require__(503).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"collection_");t.b(t.v(t.f("id",c,p,0)));t.b("\" data-id=");t.b(t.v(t.f("id",c,p,0)));t.b(" class=\"js-item js-collection-cover cover-block bordered-item list-item collection-block gallery-item-block editable cfix\" collection_id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n");t.b("\n" + i);if(t.s(t.f("is_editable",c,p,1),c,p,0,208,264,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<profile/user/_overlays/_collectionOverlay0",c,p,"    "));});c.pop();}t.b("\n" + i);t.b(t.rp("<lib/_covers/_galleryProjects1",c,p,"  "));t.b("\n" + i);t.b("  <div class=\"gallery-info-wrap left\">");t.b("\n" + i);t.b("    ");if(!t.s(t.f("public",c,p,1),c,p,1,0,0,"")){t.b(t.rp("<lib/_covers/_lock2",c,p,""));};t.b("<a class=\"gallery-name js-collection-title\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\">");t.b(t.v(t.f("title",c,p,0)));t.b("</a>");t.b("\n" + i);t.b("    <div class=\"gallery-owner-wrap relative\">");t.b("\n" + i);if(t.s(t.f("multiple_owners",c,p,1),c,p,0,552,1082,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <div class=\"multiple-owners-list tooltipi-container\">");t.b("\n" + i);t.b("          <span class=\"owner-name\">");if(t.s(t.f("translate",c,p,1),c,p,0,664,712,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("collection_cover_multiple_owners|Multiple Owners");});c.pop();}t.b("</span>");t.b("\n" + i);t.b("          <ul class=\"tooltipi tooltipi-white-links\">");t.b("\n" + i);if(t.s(t.f("owners",c,p,1),c,p,0,810,1033,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("              <li class=\"clear\"><a class=\"multiple-owner-link\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\"><span class=\"multiple-owner-image-container\"><img class=\"multiple-owner-image\" src=\"");t.b(t.v(t.d("images.50",c,p,0)));t.b("\"></span>");t.b(t.v(t.f("display_name",c,p,0)));t.b("</a></li>");t.b("\n" + i);});c.pop();}t.b("          </ul>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);});c.pop();}if(!t.s(t.f("multiple_owners",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("owners",c,p,1),c,p,0,1149,1318,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("          <span class=\"gallery-owned-by\">");if(t.s(t.f("translate",c,p,1),c,p,0,1205,1227,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("collection_cover_by|by");});c.pop();}t.b(" </span><a class=\"gallery-owner\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\">");t.b(t.v(t.f("display_name",c,p,0)));t.b("</a>");t.b("\n" + i);});c.pop();}};t.b("    </div> <!-- .gallery-owner-wrap -->");t.b("\n" + i);if(t.s(t.f("stats",c,p,1),c,p,0,1411,1824,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"gallery-stats hide-phone cfix\">");t.b("\n" + i);t.b("      <div class=\"left gallery-stats-items-count\">");t.b("\n" + i);t.b("        <span class=\"beicons-pre beicons-pre-collection\">");t.b("\n" + i);t.b("          ");t.b(t.v(t.f("items",c,p,0)));t.b("\n" + i);t.b("        </span>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("      <div class=\"left gallery-stats-followers-count gallery-stat-divided\">");t.b("\n" + i);t.b("        <span class=\"left beicons-pre beicons-pre-followers\">");t.b("\n" + i);t.b("          ");t.b(t.v(t.f("followers",c,p,0)));t.b("\n" + i);t.b("        </span>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);});c.pop();}if(!t.s(t.f("is_owner",c,p,1),c,p,1,0,0,"")){t.b(t.rp("<lib/_follow/_buttonCollectionSmall3",c,p,"      "));};t.b("\n" + i);t.b("  </div> <!-- /.gallery-info-wrap -->");t.b("\n");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<profile/user/_overlays/_collectionOverlay0":{name:"profile/user/_overlays/_collectionOverlay", partials: {}, subs: {  }},"<lib/_covers/_galleryProjects1":{name:"lib/_covers/_galleryProjects", partials: {}, subs: {  }},"<lib/_covers/_lock2":{name:"lib/_covers/_lock", partials: {}, subs: {  }},"<lib/_follow/_buttonCollectionSmall3":{name:"lib/_follow/_buttonCollectionSmall", partials: {}, subs: {  }}}, subs: {  }}, "<div id=\"collection_{{id}}\" data-id={{id}} class=\"js-item js-collection-cover cover-block bordered-item list-item collection-block gallery-item-block editable cfix\" collection_id=\"{{id}}\">\n\n  {{#is_editable}}\n    {{> profile/user/_overlays/_collectionOverlay }}\n  {{/is_editable}}\n\n  {{>lib/_covers/_galleryProjects}}\n\n  <div class=\"gallery-info-wrap left\">\n    {{^public}}{{> lib/_covers/_lock}}{{/public}}<a class=\"gallery-name js-collection-title\" href=\"{{url}}\">{{title}}</a>\n    <div class=\"gallery-owner-wrap relative\">\n      {{#multiple_owners}}\n        <div class=\"multiple-owners-list tooltipi-container\">\n          <span class=\"owner-name\">{{#translate}}collection_cover_multiple_owners|Multiple Owners{{/translate}}</span>\n          <ul class=\"tooltipi tooltipi-white-links\">\n            {{#owners}}\n              <li class=\"clear\"><a class=\"multiple-owner-link\" href=\"{{url}}\"><span class=\"multiple-owner-image-container\"><img class=\"multiple-owner-image\" src=\"{{images.50}}\"></span>{{display_name}}</a></li>\n            {{/owners}}\n          </ul>\n        </div>\n      {{/multiple_owners}}\n      {{^multiple_owners}}\n        {{#owners}}\n          <span class=\"gallery-owned-by\">{{#translate}}collection_cover_by|by{{/translate}} </span><a class=\"gallery-owner\" href=\"{{url}}\">{{display_name}}</a>\n        {{/owners}}\n      {{/multiple_owners}}\n    </div> <!-- .gallery-owner-wrap -->\n    {{#stats}}\n    <div class=\"gallery-stats hide-phone cfix\">\n      <div class=\"left gallery-stats-items-count\">\n        <span class=\"beicons-pre beicons-pre-collection\">\n          {{items}}\n        </span>\n      </div>\n      <div class=\"left gallery-stats-followers-count gallery-stat-divided\">\n        <span class=\"left beicons-pre beicons-pre-followers\">\n          {{followers}}\n        </span>\n      </div>\n    </div>\n    {{/stats}}\n    {{^is_owner}}\n      {{>lib/_follow/_buttonCollectionSmall}}\n    {{/is_owner}}\n\n  </div> <!-- /.gallery-info-wrap -->\n\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 425:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<span class=\"beicons-pre beicons-pre-lock-small private js-lock\"></span>");return t.fl(); },partials: {}, subs: {  }}, "<span class=\"beicons-pre beicons-pre-lock-small private js-lock\"></span>", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 43:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(e) {
     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(14), __webpack_require__(6), __webpack_require__(40) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : e(jQuery);
}(function(e) {
    return e.widget("ui.menu", {
        version: "1.11.4",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left-1 top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), 
            this._on({
                "mousedown .ui-menu-item": function(e) {
                    e.preventDefault();
                },
                "click .ui-menu-item": function(t) {
                    var i = e(t.target);
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), 
                    i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && e(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [ !0 ]), 
                    this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
                },
                "mouseenter .ui-menu-item": function(t) {
                    if (!this.previousFilter) {
                        var i = e(t.currentTarget);
                        i.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(t, i);
                    }
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(e, t) {
                    var i = this.active || this.element.find(this.options.items).eq(0);
                    t || this.focus(e, i);
                },
                blur: function(t) {
                    this._delay(function() {
                        e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t);
                    });
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function(e) {
                    this._closeOnDocumentClick(e) && this.collapseAll(e), this.mouseHandled = !1;
                }
            });
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), 
            this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var t = e(this);
                t.data("ui-menu-submenu-carat") && t.remove();
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content");
        },
        _keydown: function(t) {
            var i, s, n, a, u = !0;
            switch (t.keyCode) {
              case e.ui.keyCode.PAGE_UP:
                this.previousPage(t);
                break;

              case e.ui.keyCode.PAGE_DOWN:
                this.nextPage(t);
                break;

              case e.ui.keyCode.HOME:
                this._move("first", "first", t);
                break;

              case e.ui.keyCode.END:
                this._move("last", "last", t);
                break;

              case e.ui.keyCode.UP:
                this.previous(t);
                break;

              case e.ui.keyCode.DOWN:
                this.next(t);
                break;

              case e.ui.keyCode.LEFT:
                this.collapse(t);
                break;

              case e.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                break;

              case e.ui.keyCode.ENTER:
              case e.ui.keyCode.SPACE:
                this._activate(t);
                break;

              case e.ui.keyCode.ESCAPE:
                this.collapse(t);
                break;

              default:
                u = !1, s = this.previousFilter || "", n = String.fromCharCode(t.keyCode), a = !1, 
                clearTimeout(this.filterTimer), n === s ? a = !0 : n = s + n, i = this._filterMenuItems(n), 
                i = a && i.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : i, 
                i.length || (n = String.fromCharCode(t.keyCode), i = this._filterMenuItems(n)), 
                i.length ? (this.focus(t, i), this.previousFilter = n, this.filterTimer = this._delay(function() {
                    delete this.previousFilter;
                }, 1e3)) : delete this.previousFilter;
            }
            u && t.preventDefault();
        },
        _activate: function(e) {
            this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(e) : this.select(e));
        },
        refresh: function() {
            var t, i, s = this, n = this.options.icons.submenu, a = this.element.find(this.options.menus);
            this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), 
            a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var t = e(this), i = t.parent(), s = e("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", !0);
                i.attr("aria-haspopup", "true").prepend(s), t.attr("aria-labelledby", i.attr("id"));
            }), t = a.add(this.element), i = t.find(this.options.items), i.not(".ui-menu-item").each(function() {
                var t = e(this);
                s._isDivider(t) && t.addClass("ui-widget-content ui-menu-divider");
            }), i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur();
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role];
        },
        _setOption: function(e, t) {
            "icons" === e && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu), 
            "disabled" === e && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), 
            this._super(e, t);
        },
        focus: function(e, t) {
            var i, s;
            this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), 
            s = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), 
            this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function() {
                this._close();
            }, this.delay), i = t.children(".ui-menu"), i.length && e && /^mouse/.test(e.type) && this._startOpening(i), 
            this.activeMenu = t.parent(), this._trigger("focus", e, {
                item: t
            });
        },
        _scrollIntoView: function(t) {
            var i, s, n, a, u, o;
            this._hasScroll() && (i = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, 
            s = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, n = t.offset().top - this.activeMenu.offset().top - i - s, 
            a = this.activeMenu.scrollTop(), u = this.activeMenu.height(), o = t.outerHeight(), 
            n < 0 ? this.activeMenu.scrollTop(a + n) : n + o > u && this.activeMenu.scrollTop(a + n - u + o));
        },
        blur: function(e, t) {
            t || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), 
            this.active = null, this._trigger("blur", e, {
                item: this.active
            }));
        },
        _startOpening: function(e) {
            clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(), this._open(e);
            }, this.delay));
        },
        _open: function(t) {
            var i = e.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), 
            t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i);
        },
        collapseAll: function(t, i) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var s = i ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
                s.length || (s = this.element), this._close(s), this.blur(t), this.activeMenu = s;
            }, this.delay);
        },
        _close: function(e) {
            e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active");
        },
        _closeOnDocumentClick: function(t) {
            return !e(t.target).closest(".ui-menu").length;
        },
        _isDivider: function(e) {
            return !/[^\-\u2014\u2013\s]/.test(e.text());
        },
        collapse: function(e) {
            var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            t && t.length && (this._close(), this.focus(e, t));
        },
        expand: function(e) {
            var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            t && t.length && (this._open(t.parent()), this._delay(function() {
                this.focus(e, t);
            }));
        },
        next: function(e) {
            this._move("next", "first", e);
        },
        previous: function(e) {
            this._move("prev", "last", e);
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length;
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length;
        },
        _move: function(e, t, i) {
            var s;
            this.active && (s = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)), 
            s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[t]()), 
            this.focus(i, s);
        },
        nextPage: function(t) {
            var i, s, n;
            return this.active ? void (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, 
            n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return i = e(this), i.offset().top - s - n < 0;
            }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(t);
        },
        previousPage: function(t) {
            var i, s, n;
            return this.active ? void (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, 
            n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return i = e(this), i.offset().top - s + n > 0;
            }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items).first()))) : void this.next(t);
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight");
        },
        select: function(t) {
            this.active = this.active || e(t.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, i);
        },
        _filterMenuItems: function(t) {
            var i = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), s = new RegExp("^" + i, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return s.test(e.trim(e(this).text()));
            });
        }
    });
});

/***/ },

/***/ 44:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(e) {
     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(14), __webpack_require__(6), __webpack_require__(40), __webpack_require__(43) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : e(jQuery);
}(function(e) {
    return e.widget("ui.autocomplete", {
        version: "1.11.4",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var t, i, s, n = this.element[0].nodeName.toLowerCase(), o = "textarea" === n, u = "input" === n;
            this.isMultiLine = !!o || !u && this.element.prop("isContentEditable"), this.valueMethod = this.element[o || u ? "val" : "text"], 
            this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), 
            this._on(this.element, {
                keydown: function(n) {
                    if (this.element.prop("readOnly")) return t = !0, s = !0, void (i = !0);
                    t = !1, s = !1, i = !1;
                    var o = e.ui.keyCode;
                    switch (n.keyCode) {
                      case o.PAGE_UP:
                        t = !0, this._move("previousPage", n);
                        break;

                      case o.PAGE_DOWN:
                        t = !0, this._move("nextPage", n);
                        break;

                      case o.UP:
                        t = !0, this._keyEvent("previous", n);
                        break;

                      case o.DOWN:
                        t = !0, this._keyEvent("next", n);
                        break;

                      case o.ENTER:
                        this.menu.active && (t = !0, n.preventDefault(), this.menu.select(n));
                        break;

                      case o.TAB:
                        this.menu.active && this.menu.select(n);
                        break;

                      case o.ESCAPE:
                        this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), 
                        this.close(n), n.preventDefault());
                        break;

                      default:
                        i = !0, this._searchTimeout(n);
                    }
                },
                keypress: function(s) {
                    if (t) return t = !1, void (this.isMultiLine && !this.menu.element.is(":visible") || s.preventDefault());
                    if (!i) {
                        var n = e.ui.keyCode;
                        switch (s.keyCode) {
                          case n.PAGE_UP:
                            this._move("previousPage", s);
                            break;

                          case n.PAGE_DOWN:
                            this._move("nextPage", s);
                            break;

                          case n.UP:
                            this._keyEvent("previous", s);
                            break;

                          case n.DOWN:
                            this._keyEvent("next", s);
                        }
                    }
                },
                input: function(e) {
                    return s ? (s = !1, void e.preventDefault()) : void this._searchTimeout(e);
                },
                focus: function() {
                    this.selectedItem = null, this.previous = this._value();
                },
                blur: function(e) {
                    return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), 
                    this.close(e), void this._change(e));
                }
            }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance"), this._on(this.menu.element, {
                mousedown: function(t) {
                    t.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur;
                    });
                    var i = this.menu.element[0];
                    e(t.target).closest(".ui-menu-item").length || this._delay(function() {
                        var t = this;
                        this.document.one("mousedown", function(s) {
                            s.target === t.element[0] || s.target === i || e.contains(i, s.target) || t.close();
                        });
                    });
                },
                menufocus: function(t, i) {
                    var s, n;
                    return this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(), 
                    void this.document.one("mousemove", function() {
                        e(t.target).trigger(t.originalEvent);
                    })) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, {
                        item: n
                    }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(n.value), 
                    s = i.item.attr("aria-label") || n.value, void (s && e.trim(s).length && (this.liveRegion.children().hide(), 
                    e("<div>").text(s).appendTo(this.liveRegion))));
                },
                menuselect: function(e, t) {
                    var i = t.item.data("ui-autocomplete-item"), s = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, 
                    this._delay(function() {
                        this.previous = s, this.selectedItem = i;
                    })), !1 !== this._trigger("select", e, {
                        item: i
                    }) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i;
                }
            }), this.liveRegion = e("<span>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete");
                }
            });
        },
        _destroy: function() {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), 
            this.menu.element.remove(), this.liveRegion.remove();
        },
        _setOption: function(e, t) {
            this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), 
            "disabled" === e && t && this.xhr && this.xhr.abort();
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), 
            t.length || (t = this.document[0].body), t;
        },
        _initSource: function() {
            var t, i, s = this;
            e.isArray(this.options.source) ? (t = this.options.source, this.source = function(i, s) {
                s(e.ui.autocomplete.filter(t, i.term));
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(t, n) {
                s.xhr && s.xhr.abort(), s.xhr = e.ajax({
                    url: i,
                    data: t,
                    dataType: "json",
                    success: function(e) {
                        n(e);
                    },
                    error: function() {
                        n([]);
                    }
                });
            }) : this.source = this.options.source;
        },
        _searchTimeout: function(e) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                var t = this.term === this._value(), i = this.menu.element.is(":visible"), s = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
                t && (!t || i || s) || (this.selectedItem = null, this.search(null, e));
            }, this.options.delay);
        },
        search: function(e, t) {
            return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : void 0;
        },
        _search: function(e) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, 
            this.source({
                term: e
            }, this._response());
        },
        _response: function() {
            var t = ++this.requestIndex;
            return e.proxy(function(e) {
                t === this.requestIndex && this.__response(e), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading");
            }, this);
        },
        __response: function(e) {
            e && (e = this._normalize(e)), this._trigger("response", null, {
                content: e
            }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), 
            this._trigger("open")) : this._close();
        },
        close: function(e) {
            this.cancelSearch = !0, this._close(e);
        },
        _close: function(e) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), 
            this.isNewMenu = !0, this._trigger("close", e));
        },
        _change: function(e) {
            this.previous !== this._value() && this._trigger("change", e, {
                item: this.selectedItem
            });
        },
        _normalize: function(t) {
            return t.length && t[0].label && t[0].value ? t : e.map(t, function(t) {
                return "string" == typeof t ? {
                    label: t,
                    value: t
                } : e.extend({}, t, {
                    label: t.label || t.value,
                    value: t.value || t.label
                });
            });
        },
        _suggest: function(t) {
            var i = this.menu.element.empty();
            this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), 
            i.position(e.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next();
        },
        _resizeMenu: function() {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()));
        },
        _renderMenu: function(t, i) {
            var s = this;
            e.each(i, function(e, i) {
                s._renderItemData(t, i);
            });
        },
        _renderItemData: function(e, t) {
            return this._renderItem(e, t).data("ui-autocomplete-item", t);
        },
        _renderItem: function(t, i) {
            return e("<li>").text(i.label).appendTo(t);
        },
        _move: function(e, t) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this.isMultiLine || this._value(this.term), 
            void this.menu.blur()) : void this.menu[e](t) : void this.search(null, t);
        },
        widget: function() {
            return this.menu.element;
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments);
        },
        _keyEvent: function(e, t) {
            this.isMultiLine && !this.menu.element.is(":visible") || (this._move(e, t), t.preventDefault());
        }
    }), e.extend(e.ui.autocomplete, {
        escapeRegex: function(e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        },
        filter: function(t, i) {
            var s = new RegExp(e.ui.autocomplete.escapeRegex(i), "i");
            return e.grep(t, function(e) {
                return s.test(e.label || e.value || e);
            });
        }
    }), e.widget("ui.autocomplete", e.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(e) {
                    return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
                }
            }
        },
        __response: function(t) {
            var i;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, 
            this.liveRegion.children().hide(), e("<div>").text(i).appendTo(this.liveRegion));
        }
    }), e.ui.autocomplete;
});

/***/ },

/***/ 468:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(37), __webpack_require__(47) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, n, r) {
    "use strict";
    return function(t) {
        return t = e.extend(!0, {}, t, {
            headers: {
                Authorization: "Bearer " + r.getToken()
            }
        }), n(t);
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 478:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(292), __webpack_require__(360), __webpack_require__(41), __webpack_require__(18) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, t, i, n, l) {
    "use strict";
    return t.extend({
        rendered: function() {
            this.picturefill(), n.init(this.$parent);
        },
        template: l(i, e)
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 48:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(21), __webpack_require__(28), __webpack_require__(20), __webpack_require__(13), __webpack_require__(2), __webpack_require__(80) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, e, i, n, r, a, o) {
    "use strict";
    return e.extend({
        _readData: function() {
            var t = {
                project: this._readProject,
                user: this._readUser,
                team: this._readTeam,
                collection: this._readCollection,
                curated_category: this._readCuratedCategory,
                site: this._readSite
            };
            return t[this.data.entity].call(this);
        },
        _projectTransform: function(t, e) {
            return {
                title: e,
                img1x: t.covers[202],
                img2x: t.covers[404],
                imgWidth: 202,
                imgHeight: 158
            };
        },
        _profileTransform: function(t) {
            return {
                title: t.display_name,
                img1x: t.images[115],
                img2x: t.images[230],
                imgWidth: 115,
                imgHeight: 115
            };
        },
        _readProject: function() {
            return a({
                url: "/v2/projects/" + this.data.id
            }).then(function(t) {
                var e = t.project.owners, i = "follow" === this.data.action && e.length > 1 ? e[0].display_name + " and " + e[1].display_name : t.project.name;
                return this._projectTransform(t.project, i);
            }.bind(this));
        },
        _readUser: function() {
            return a({
                url: "/user/mini/" + this.data.id
            }).then(function(t) {
                return this._profileTransform(t.user);
            }.bind(this));
        },
        _readTeam: function() {
            return a({
                url: "/v2/teams/" + this.data.id
            }).then(function(t) {
                return this._profileTransform(t.team);
            }.bind(this));
        },
        _readCollection: function() {
            return a({
                url: "/v2/collections/" + this.data.id
            }).then(function(t) {
                var e = t.collection.title, i = t.collection.latest_projects.find(function(t) {
                    return 0 === t.mature_content;
                });
                return i ? this._projectTransform(i, e) : {
                    title: e
                };
            }.bind(this));
        },
        _readSite: function() {
            return a({
                url: "/v2/partners"
            }).then(function(t) {
                var e, i = this.data.id;
                return t.networks.concat(t.galleries).forEach(function(t) {
                    t.id === i && (e = t.name);
                }), {
                    title: e
                };
            }.bind(this));
        },
        _readCuratedCategory: function() {
            return a({
                url: "/v2/galleries/" + this.data.id
            }).then(function(t) {
                return this._projectTransform(t.entities[0], t.gallery.label);
            }.bind(this));
        },
        render: function(e) {
            return this._readData().then(function(e) {
                var i = this.data;
                r.info("onboarding", "Sign up popup displayed", {
                    action: i.action,
                    entity: i.entity
                }), e.destination = encodeURIComponent("/onboarding?" + t.param({
                    id: i.id,
                    entity: i.entity,
                    action: i.action,
                    title: e.title
                })), this._model.set(e);
            }.bind(this)).then(this._super.bind(this, e));
        }
    }, {
        VIEW_CLASS: {
            phone: i.extend(o),
            tablet: n.extend(o),
            desktop: n.extend(o)
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 481:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(23), __webpack_require__(0), __webpack_require__(53), __webpack_require__(2), __webpack_require__(5), __webpack_require__(123), __webpack_require__(333), __webpack_require__(144), __webpack_require__(288), __webpack_require__(483), __webpack_require__(502) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, t, l, o, n, r, a, i, c, s, u) {
    "use strict";
    return {
        rename: function(t, o) {
            var r, s, f = new l(), _ = {
                title: n.translate("profile_collection_rename_title", "Rename Collection"),
                html: u({
                    title: {
                        value: o || "",
                        id: "title",
                        classes: [ "form-text-xlarge", "rename-input" ],
                        validate: "Generic"
                    },
                    id: {
                        id: "id",
                        value: t
                    },
                    action: e.COLLECTIONS.RENAME_URL
                }),
                buttons: [ {
                    label: n.translate("profile_collection_button_rename", "Rename"),
                    classes: [ "form-submit", "form-button-default" ]
                }, {
                    label: n.translate("profile_collection_button_cancel", "Cancel"),
                    classes: [ "form-button-cancel", "js-cancel" ]
                } ]
            };
            return t || i.trigger("error", n.translate("profile_collection_error_unable_rename", "Unable to rename. Please refresh and try again")), 
            s = new a(c(_)), s.render(), s._view.form.commit = function(e) {
                return s._view.commit(e).then(function() {
                    f.resolve(r.val());
                }, f.reject);
            }, r = s._view.$view.find("#title"), f;
        },
        addOwners: function(e) {
            return s(e);
        },
        togglePrivacy: function(t) {
            return o({
                url: e.COLLECTIONS.PRIVACY_URL,
                data: {
                    id: t
                },
                type: "POST"
            }).then(function(e) {
                if (!e || !e.collection) throw new Error();
                return e;
            });
        },
        delete: function(t) {
            var l = {
                title: n.translate("profile_collection_delete_title", "Delete Collection"),
                html: '<span class="delete-copy">' + n.translate("profile_collection_delete_message", "Are you sure you want to delete this collection?") + "</span>",
                buttons: [ {
                    label: n.translate("profile_collection_button_delete", "Delete"),
                    classes: [ "form-button-default", "js-confirm" ]
                }, {
                    label: n.translate("profile_collection_button_cancel", "Cancel"),
                    classes: [ "form-button-cancel", "js-cancel" ]
                } ]
            };
            return r(c(l), {
                waitingText: n.translate("profile_collection_deleting", "Deleting..."),
                promiseGenerator: function() {
                    return o({
                        url: e.COLLECTIONS.DELETE_URL,
                        data: {
                            id: t
                        },
                        type: "POST"
                    });
                }
            });
        },
        leave: function(t) {
            var l = {
                title: n.translate("profile_collection_remove_title", "Remove From My Collections"),
                html: '<span class="delete-copy">' + n.translate("profile_collection_remove_self", "Are you sure you want to remove yourself from this collection?") + "</span>",
                buttons: [ {
                    label: n.translate("profile_collection_button_remove", "Remove"),
                    classes: [ "form-button-default", "js-confirm" ]
                }, {
                    label: n.translate("profile_collection_button_cancel", "Cancel"),
                    classes: [ "form-button-cancel", "js-cancel" ]
                } ]
            };
            return r(c(l), {
                waitingText: n.translate("profile_collection_removing", "Removing..."),
                promiseGenerator: function() {
                    return o({
                        url: e.COLLECTIONS.LEAVE_URL,
                        data: {
                            id: t
                        },
                        type: "POST"
                    });
                }
            });
        }
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 482:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(10), __webpack_require__(0), __webpack_require__(72), __webpack_require__(41), __webpack_require__(117), __webpack_require__(325), __webpack_require__(65), __webpack_require__(106), __webpack_require__(108), __webpack_require__(144), __webpack_require__(315) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, i, e, o, n, r, s, c, l, a, f) {
    "use strict";
    return {
        init: function(t, i, e) {
            this._$context = t, this.render(), this.stats(i, e), this.readMore(), this.follow(i, e), 
            this.errors(), r.init(), s.init(this._$context), c.delegate(this._$context), f.init();
        },
        errors: function() {
            e.init(".js-gallery"), a.on("error", function(t) {
                this._$context.find(".js-gallery").addClass("error"), e.show(t);
            }.bind(this));
        },
        render: function() {
            i(document.body).picturefill();
        },
        readMore: function() {
            n(this._$context.find(".variable-text-short"));
        },
        stats: function(t, i) {
            "team" !== t && l.get({
                action: "s",
                entity: t,
                type: "views",
                time: "all",
                ids: i,
                callback: function(t) {
                    this._$context.find(".js-project-views-count").html(t.proj_views), this._$context.find(".js-appreciations-count").html(t.appreciations);
                }.bind(this)
            }), l.view(t, i);
        },
        follow: function(t, i) {
            var e = this._$context.find(".js-followers-count"), n = this._$context.find(".js-following-count");
            o.init(this._$context.find(".js-profile-action-follow")), o.init(this._$context.find(".js-profile-info-wrap")), 
            o.on("following", function(o, r, s) {
                var c = o === i && s === t ? e : n;
                c.text(+c.text() + (r ? 1 : -1));
            });
        }
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 483:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(23), __webpack_require__(0), __webpack_require__(2), __webpack_require__(5), __webpack_require__(333), __webpack_require__(144), __webpack_require__(499), __webpack_require__(501), __webpack_require__(500), __webpack_require__(68) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, n, o, t, i, r, l, a, s) {
    function c() {
        p.empty(), v.forEach(function(e) {
            var o = n(a(e));
            o.find(".js-delete").on("click", function() {
                v = v.filter(function(n) {
                    return e !== n;
                }), _.splice(_.indexOf(e.value), 1), c();
            }), p.append(o);
        }), m.val(_.join("|"));
    }
    function u(n) {
        d = new i({
            title: t.translate("profile_collection_invite_owners_title", "Invite Co-Owners"),
            classes: [ "collection-coowner" ],
            html: l({
                action: e.COLLECTIONS.OWNER_URL,
                id: {
                    id: "id",
                    value: n
                },
                owners: {
                    id: "owners",
                    value: _.join("|")
                },
                note: {
                    id: "note",
                    label: t.translate("profile_collection_add_a_note", "Add a Note"),
                    validate: "optional,Generic"
                }
            }),
            buttons: [ {
                label: t.translate("profile_collection_button_save", "Save"),
                classes: [ "form-button", "form-button-default", "form-submit" ]
            } ]
        }), d.render(), f = d._view.$view, p = f.find(".js-coowners-list"), w = f.find(".js-coowners"), 
        m = f.find("#owners"), w.autoselect({
            itemTemplate: s,
            source: function(e, n) {
                var t = e.term;
                o({
                    url: "/users/ngram?search=" + encodeURIComponent(t),
                    type: "GET"
                }).then(function(e) {
                    var o = e.users.filter(function(e) {
                        return _.indexOf(e.id) === -1;
                    }).map(function(e) {
                        return {
                            label: e.n,
                            value: e.id,
                            image: e.i,
                            username: e.u,
                            remove: !0
                        };
                    });
                    n(o);
                }, n.bind(n, []));
            }
        }).on("autoselectselect", function(e, n) {
            var o = n.item;
            v.push(o), _.push(o.value), c();
        }), w.autoselect({
            widget: !0,
            appendTo: ".js-coowners-wrap"
        }), c();
    }
    var d, f, p, m, w, v = [], _ = [];
    return function(n) {
        return o({
            type: "GET",
            url: e.COLLECTIONS.OWNER_DATA_URL,
            data: {
                id: n
            }
        }).then(function(e) {
            e.owners && e.ids || r.trigger("error", "Failed to get owner information"), v = e.owners, 
            _ = e.ids, u(n);
        }, function() {
            r.trigger("error", "Failed to get owner information");
        });
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 499:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"form/hidden": __webpack_require__(338).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<form action=\"");t.b(t.v(t.f("action",c,p,0)));t.b("\">");t.b("\n" + i);t.b("  <div class=\"coowners-wrap js-coowners-wrap cfix\">");t.b("\n" + i);t.b("    <div class=\"coowners-inputs\">");t.b("\n" + i);t.b("    <label for=\"owner-name\">");if(t.s(t.f("translate",c,p,1),c,p,0,155,214,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_collection_who_co_owns|Who co-owns this collection?");});c.pop();}t.b("</label>");t.b("\n" + i);t.b("    <input type=\"text\" id=\"owner-name\" class=\"js-coowners coowners-input form-text form-text-normal\" />");t.b("\n");t.b("\n" + i);t.b("    <div class=\"coowner-note\">");if(t.s(t.f("translate",c,p,1),c,p,0,386,482,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_collection_note_privileges|NOTE: Co-owners have full editing privileges for collections.");});c.pop();}t.b("</div>");t.b("\n");t.b("\n" + i);t.b("    </div>");t.b("\n");t.b("\n" + i);t.b("    <ul class=\"js-coowners-list coowners-list listselector_selections\"></ul>");t.b("\n" + i);t.b("  </div>");t.b("\n");t.b("\n" + i);if(t.s(t.f("id",c,p,1),c,p,0,612,636,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<form/hidden0",c,p,"  "));});c.pop();}t.b("\n" + i);if(t.s(t.f("owners",c,p,1),c,p,0,658,682,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<form/hidden1",c,p,"  "));});c.pop();}t.b("</form>");t.b("\n");return t.fl(); },partials: {"<form/hidden0":{name:"form/hidden", partials: {}, subs: {  }},"<form/hidden1":{name:"form/hidden", partials: {}, subs: {  }}}, subs: {  }}, "<form action=\"{{action}}\">\n  <div class=\"coowners-wrap js-coowners-wrap cfix\">\n    <div class=\"coowners-inputs\">\n    <label for=\"owner-name\">{{#translate}}profile_collection_who_co_owns|Who co-owns this collection?{{/translate}}</label>\n    <input type=\"text\" id=\"owner-name\" class=\"js-coowners coowners-input form-text form-text-normal\" />\n\n    <div class=\"coowner-note\">{{#translate}}profile_collection_note_privileges|NOTE: Co-owners have full editing privileges for collections.{{/translate}}</div>\n\n    </div>\n\n    <ul class=\"js-coowners-list coowners-list listselector_selections\"></ul>\n  </div>\n\n  {{#id}}\n  {{> form/hidden }}\n  {{/id}}\n\n  {{#owners}}\n  {{> form/hidden }}\n  {{/owners}}\n</form>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 50:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"");t.sub("id",c,p,i);t.b("\" class=\"project-block ");t.sub("class",c,p,i);t.b("\">");t.b("\n" + i);t.sub("content",c,p,i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: { "id": function(c,p,t,i) {},"class": function(c,p,t,i) {},"content": function(c,p,t,i) {} }}, "<div id=\"{{$id}}{{/id}}\" class=\"project-block {{$class}}{{/class}}\">\n  {{$content}}{{/content}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 500:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<li class=\"ui-menu-item coowners-menu-item listselector-option listselector-option-user cfix\">");t.b("\n" + i);t.b("  <a class=\"autocomplete-link\"><!-- this tag required for ui.menu -->");t.b("\n" + i);t.b("    <img class=\"image\" alt=\"");t.b(t.v(t.f("label",c,p,0)));t.b("\" src=\"");t.b(t.v(t.f("image",c,p,0)));t.b("\">");t.b("\n" + i);t.b("    <div title=\"");t.b(t.v(t.f("username",c,p,0)));t.b("\" class=\"name listselector-option-display\">");t.b(t.v(t.f("label",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("    <div class=\"small-text\">");t.b(t.v(t.f("username",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("  </a>");t.b("\n" + i);t.b("</li>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<li class=\"ui-menu-item coowners-menu-item listselector-option listselector-option-user cfix\">\n  <a class=\"autocomplete-link\"><!-- this tag required for ui.menu -->\n    <img class=\"image\" alt=\"{{label}}\" src=\"{{image}}\">\n    <div title=\"{{username}}\" class=\"name listselector-option-display\">{{label}}</div>\n    <div class=\"small-text\">{{username}}</div>\n  </a>\n</li>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 501:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<li class=\"cfix cowner-list-item\">");t.b("\n" + i);t.b("  <div class=\"listselector-selection ui-textboxlist-bit ui-textboxlist-bit-done cfix\">");t.b("\n" + i);t.b("    <img class=\"image\" src=\"");t.b(t.v(t.f("image",c,p,0)));t.b("\">");t.b("\n");t.b("\n" + i);t.b("    <div class=\"ui-textboxlist-selection-display\">");t.b(t.v(t.f("label",c,p,0)));t.b("</div>");t.b("\n" + i);if(t.s(t.f("remove",c,p,1),c,p,0,244,530,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <a alt=\"");if(t.s(t.f("translate",c,p,1),c,p,0,271,300,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("coowners_dialog_remove|Remove");});c.pop();}t.b("\"");t.b("\n" + i);t.b("       title=\"");if(t.s(t.f("translate",c,p,1),c,p,0,344,373,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("coowners_dialog_remove|Remove");});c.pop();}t.b("\"");t.b("\n" + i);t.b("       class=\"js-delete closeX close-btn ui-textboxlist-deletebutton\">");if(t.s(t.f("translate",c,p,1),c,p,0,473,502,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("coowners_dialog_remove|Remove");});c.pop();}t.b("\n" + i);t.b("    </a>");t.b("\n" + i);});c.pop();}t.b("\n" + i);t.b("  </div>");t.b("\n");t.b("\n" + i);if(t.s(t.f("confirmed",c,p,1),c,p,0,569,750,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <span class=\"ownership-status confirmed\"><span class=\"beicons\">e</span> <span class=\"hide-phone\">");if(t.s(t.f("translate",c,p,1),c,p,0,683,719,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("coowners_dialog_confirmed|Confirmed!");});c.pop();}t.b("</span></span>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("awaiting",c,p,1),c,p,0,781,889,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <span class=\"ownership-status\">");if(t.s(t.f("translate",c,p,1),c,p,0,829,865,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("coowners_dialog_awaiting|Awaiting...");});c.pop();}t.b("</span>");t.b("\n" + i);});c.pop();}t.b("</li>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<li class=\"cfix cowner-list-item\">\n  <div class=\"listselector-selection ui-textboxlist-bit ui-textboxlist-bit-done cfix\">\n    <img class=\"image\" src=\"{{image}}\">\n\n    <div class=\"ui-textboxlist-selection-display\">{{label}}</div>\n    {{#remove}}\n    <a alt=\"{{#translate}}coowners_dialog_remove|Remove{{/translate}}\"\n       title=\"{{#translate}}coowners_dialog_remove|Remove{{/translate}}\"\n       class=\"js-delete closeX close-btn ui-textboxlist-deletebutton\">{{#translate}}coowners_dialog_remove|Remove{{/translate}}\n    </a>\n    {{/remove}}\n\n  </div>\n\n  {{#confirmed}}\n  <span class=\"ownership-status confirmed\"><span class=\"beicons\">e</span> <span class=\"hide-phone\">{{#translate}}coowners_dialog_confirmed|Confirmed!{{/translate}}</span></span>\n  {{/confirmed}}\n\n  {{#awaiting}}\n  <span class=\"ownership-status\">{{#translate}}coowners_dialog_awaiting|Awaiting...{{/translate}}</span>\n  {{/awaiting}}\n</li>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 502:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"form/hidden": __webpack_require__(338).template,"form/text": __webpack_require__(73).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<form action=\"");t.b(t.v(t.f("action",c,p,0)));t.b("\" class=\"js-rename-form\">");t.b("\n" + i);if(t.s(t.f("id",c,p,1),c,p,0,57,77,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<form/hidden0",c,p,""));});c.pop();}if(t.s(t.f("title",c,p,1),c,p,0,95,113,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<form/text1",c,p,""));});c.pop();}t.b("</form>");return t.fl(); },partials: {"<form/hidden0":{name:"form/hidden", partials: {}, subs: {  }},"<form/text1":{name:"form/text", partials: {}, subs: {  }}}, subs: {  }}, "<form action=\"{{action}}\" class=\"js-rename-form\">\n{{#id}}\n{{> form/hidden }}\n{{/id}}\n{{#title}}\n{{> form/text }}\n{{/title}}\n</form>", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 503:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_follow/_button": __webpack_require__(54).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<lib/_follow/_button0",c,p,""));return t.fl(); },partials: {"<lib/_follow/_button0":{name:"lib/_follow/_button", partials: {}, subs: { "type": function(c,p,t,i) {t.b("collection");},"size": function(c,p,t,i) {t.b("form-button-small");},"follow": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,121,206,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("button_follow_collection_responsive|Follow <span class=\"hide-phone\">Collection</span>");});c.pop();}},"following": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,262,353,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("button_following_collection_responsive|Following <span class=\"hide-phone\">Collection</span>");});c.pop();}},"unfollow": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,411,506,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("button_unfollow_collection_responsive|Unfollow <span class=\"hide-phone\">Collection</span>&nbsp;");});c.pop();}} }}}, subs: {  }}, "{{<lib/_follow/_button}}\n  {{$type}}collection{{/type}}\n  {{$size}}form-button-small{{/size}}\n  {{$follow}}{{#translate}}button_follow_collection_responsive|Follow <span class=\"hide-phone\">Collection</span>{{/translate}}{{/follow}}\n  {{$following}}{{#translate}}button_following_collection_responsive|Following <span class=\"hide-phone\">Collection</span>{{/translate}}{{/following}}\n  {{$unfollow}}{{#translate}}button_unfollow_collection_responsive|Unfollow <span class=\"hide-phone\">Collection</span>&nbsp;{{/translate}}{{/unfollow}}\n{{/lib/_follow/_button}}", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 504:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"project-dropdown-cover js-project-cover cfix\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n");t.b("\n" + i);t.b("  <div class=\"cover-img\">");t.b("\n" + i);t.b("    <a href=\"");if(t.s(t.f("is_team",c,p,1),c,p,0,128,135,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.v(t.f("url",c,p,0)));});c.pop();}if(!t.s(t.f("is_team",c,p,1),c,p,1,0,0,"")){t.b(t.v(t.f("edit_url",c,p,0)));};t.b("\"");if(t.s(t.f("is_team",c,p,1),c,p,0,196,211,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" target=\"blank\"");});c.pop();}t.b(">");t.b("\n" + i);t.b("      <div data-picture=\"\" data-alt=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\">");t.b("\n" + i);if(t.s(t.d("covers.202",c,p,1),c,p,0,296,646,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <div alt=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\" data-src=\"");t.b(t.v(t.d("covers.202",c,p,0)));t.b("\" data-class=\"cover-img-el cover-img-2x\" data-title=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\" data-media=\"(-webkit-min-device-pixel-ratio: 1.3),");t.b("\n" + i);t.b("          (min--moz-device-pixel-ratio: 1.3),");t.b("\n" + i);t.b("          (-o-min-device-pixel-ratio: 4/3),");t.b("\n" + i);t.b("          (min-device-pixel-ratio: 1.3),");t.b("\n" + i);t.b("          (min-resolution: 1.3dppx)\"></div>");t.b("\n" + i);});c.pop();}if(!t.s(t.d("covers.202",c,p,1),c,p,1,0,0,"")){t.b("        <div class=\"no-image-yet cover-img\">");if(t.s(t.f("translate",c,p,1),c,p,0,744,783,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_draft_no_image_yet|No Image Yet");});c.pop();}t.b("</div>");t.b("\n" + i);};t.b("      </div>");t.b("\n" + i);t.b("      <noscript><img alt=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\" title=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\" src=\"");t.b(t.v(t.d("covers.202",c,p,0)));t.b("\" class=\"cover-img-el\"></noscript>");t.b("\n" + i);t.b("    </a>");t.b("\n" + i);t.b("  </div>");t.b("\n");t.b("\n" + i);t.b("  <div class=\"cover-info-stats\">");t.b("\n" + i);t.b("    <div class=\"cover-info\">");t.b("\n" + i);t.b("      <div class=\"cover-name\">");t.b("\n" + i);t.b("        ");t.b(t.v(t.f("name",c,p,0)));t.b("\n" + i);t.b("      </div>");t.b("\n");t.b("\n" + i);t.b("      ");if(t.s(t.f("modified_on",c,p,1),c,p,0,1113,1302,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"project-draft-modified\">");if(t.s(t.f("translate",c,p,1),c,p,0,1164,1207,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_draft_last_modified|Last modified: ");});c.pop();}t.b("<span class=\"js-format-timestamp\" data-timestamp=\"");t.b(t.v(t.f("modified_on",c,p,0)));t.b("\"></span></span>");});c.pop();}t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n");t.b("\n" + i);t.b("  <div id=\"project-dropdown-cover-actions\">");t.b("\n" + i);if(!t.s(t.f("is_team",c,p,1),c,p,1,0,0,"")){t.b("    <a class=\"form-button form-button-small form-button-default\" href=\"");t.b(t.v(t.f("edit_url",c,p,0)));t.b("\">");if(t.s(t.f("translate",c,p,1),c,p,0,1498,1528,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_draft_button_edit|Edit");});c.pop();}t.b("</a>");t.b("\n" + i);if(t.s(t.f("is_founder",c,p,1),c,p,0,1566,1780,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <a href=\"#\" class=\"js-project-delete draft-delete\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\"");if(t.s(t.f("multiple_owners",c,p,1),c,p,0,1660,1688,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" data-multiple-owners=\"true\"");});c.pop();}t.b(">");if(t.s(t.f("translate",c,p,1),c,p,0,1723,1757,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_draft_button_delete|Delete");});c.pop();}t.b("</a>");t.b("\n" + i);});c.pop();}if(!t.s(t.f("is_founder",c,p,1),c,p,1,0,0,"")){t.b("      <a href=\"#\" class=\"js-project-remove-owner draft-remove-owner\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");if(t.s(t.f("translate",c,p,1),c,p,0,1916,1950,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_draft_button_remove|Remove");});c.pop();}t.b("</a>");t.b("\n" + i);};};if(t.s(t.f("is_team",c,p,1),c,p,0,2018,2457,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    ");if(t.s(t.f("in_team",c,p,1),c,p,0,2035,2099,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<input type=\"hidden\" name=\"project_ids_before[]\" value=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");});c.pop();}t.b("\n" + i);t.b("    <input type=\"checkbox\" id=\"project-dropdown-project-");t.b(t.v(t.f("id",c,p,0)));t.b("\" name=\"project_ids_after[]\" value=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" ");if(t.s(t.f("in_team",c,p,1),c,p,0,2230,2237,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("checked");});c.pop();}t.b(" class=\"form-checkbox js-project-dropdown-checkbox\">");t.b("\n" + i);t.b("    <label for=\"project-dropdown-project-");t.b(t.v(t.f("id",c,p,0)));t.b("\" class=\"form-label\">");if(t.s(t.f("translate",c,p,1),c,p,0,2384,2432,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_draft_label_add_to_team|Add to team page");});c.pop();}t.b("</label>");t.b("\n" + i);});c.pop();}t.b("  </div>");t.b("\n");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"project-dropdown-cover js-project-cover cfix\" data-id=\"{{id}}\">\n\n  <div class=\"cover-img\">\n    <a href=\"{{#is_team}}{{url}}{{/is_team}}{{^is_team}}{{edit_url}}{{/is_team}}\"{{#is_team}} target=\"blank\"{{/is_team}}>\n      <div data-picture=\"\" data-alt=\"{{name}}\">\n        {{#covers.202}}\n        <div alt=\"{{name}}\" data-src=\"{{covers.202}}\" data-class=\"cover-img-el cover-img-2x\" data-title=\"{{name}}\" data-media=\"(-webkit-min-device-pixel-ratio: 1.3),\n          (min--moz-device-pixel-ratio: 1.3),\n          (-o-min-device-pixel-ratio: 4/3),\n          (min-device-pixel-ratio: 1.3),\n          (min-resolution: 1.3dppx)\"></div>\n        {{/covers.202}}\n        {{^covers.202}}\n        <div class=\"no-image-yet cover-img\">{{#translate}}project_draft_no_image_yet|No Image Yet{{/translate}}</div>\n        {{/covers.202}}\n      </div>\n      <noscript><img alt=\"{{name}}\" title=\"{{name}}\" src=\"{{covers.202}}\" class=\"cover-img-el\"></noscript>\n    </a>\n  </div>\n\n  <div class=\"cover-info-stats\">\n    <div class=\"cover-info\">\n      <div class=\"cover-name\">\n        {{name}}\n      </div>\n\n      {{#modified_on}}<span class=\"project-draft-modified\">{{#translate}}project_draft_last_modified|Last modified: {{/translate}}<span class=\"js-format-timestamp\" data-timestamp=\"{{modified_on}}\"></span></span>{{/modified_on}}\n    </div>\n  </div>\n\n  <div id=\"project-dropdown-cover-actions\">\n  {{^is_team}}\n    <a class=\"form-button form-button-small form-button-default\" href=\"{{edit_url}}\">{{#translate}}project_draft_button_edit|Edit{{/translate}}</a>\n    {{#is_founder}}\n      <a href=\"#\" class=\"js-project-delete draft-delete\" data-id=\"{{id}}\"{{#multiple_owners}} data-multiple-owners=\"true\"{{/multiple_owners}}>{{#translate}}project_draft_button_delete|Delete{{/translate}}</a>\n    {{/is_founder}}\n    {{^is_founder}}\n      <a href=\"#\" class=\"js-project-remove-owner draft-remove-owner\" data-id=\"{{id}}\">{{#translate}}project_draft_button_remove|Remove{{/translate}}</a>\n    {{/is_founder}}\n  {{/is_team}}\n  {{#is_team}}\n    {{#in_team}}<input type=\"hidden\" name=\"project_ids_before[]\" value=\"{{id}}\">{{/in_team}}\n    <input type=\"checkbox\" id=\"project-dropdown-project-{{id}}\" name=\"project_ids_after[]\" value=\"{{id}}\" {{#in_team}}checked{{/in_team}} class=\"form-checkbox js-project-dropdown-checkbox\">\n    <label for=\"project-dropdown-project-{{id}}\" class=\"form-label\">{{#translate}}project_draft_label_add_to_team|Add to team page{{/translate}}</label>\n  {{/is_team}}\n  </div>\n\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"empty-wrap\">");t.b("\n" + i);if(t.s(t.f("is_team",c,p,1),c,p,0,37,806,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("search",c,p,1),c,p,0,51,403,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <h1 class=\"empty-header\">");if(t.s(t.f("translate",c,p,1),c,p,0,95,212,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_user_no_followers_search|");t.b(t.v(t.d("profile.display_name",c,p,0)));t.b(" does not have any followers with the name ");t.b(t.v(t.f("search",c,p,0)));t.b(".");});c.pop();}t.b("</h1>");t.b("\n" + i);t.b("    ");if(t.s(t.f("translate",c,p,1),c,p,0,250,386,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_explore_curated_creatives|Explore our <a href=\"");t.b(t.v(t.d("PAGE_URLS.CREATIVES_TO_FOLLOW",c,p,0)));t.b("\">curated list of creatives to follow.</a>");});c.pop();}t.b("\n" + i);});c.pop();}if(!t.s(t.f("search",c,p,1),c,p,1,0,0,"")){t.b("    <h1 class=\"empty-header\">");if(t.s(t.f("translate",c,p,1),c,p,0,472,556,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_user_no_followers|");t.b(t.v(t.d("profile.display_name",c,p,0)));t.b(" doesn't have any followers.");});c.pop();}t.b("</h1>");t.b("\n" + i);t.b("    ");if(t.s(t.f("translate",c,p,1),c,p,0,594,777,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_check_back_explore_creatives|Please check back soon. Until then, you can explore our <a href=\"");t.b(t.v(t.d("PAGE_URLS.CREATIVES_TO_FOLLOW",c,p,0)));t.b("\">curated list of creatives to follow.</a>");});c.pop();}t.b("\n" + i);};});c.pop();}t.b("\n" + i);if(!t.s(t.f("is_team",c,p,1),c,p,1,0,0,"")){if(t.s(t.d("profile.is_profile_owner",c,p,1),c,p,0,862,1361,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("search",c,p,1),c,p,0,876,1028,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <h1 class=\"empty-header\">");if(t.s(t.f("translate",c,p,1),c,p,0,920,1006,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_followers_search|You do not have any followers with the name ");t.b(t.v(t.f("search",c,p,0)));t.b(".");});c.pop();}t.b("</h1>");t.b("\n" + i);});c.pop();}if(!t.s(t.f("search",c,p,1),c,p,1,0,0,"")){t.b("    <h1 class=\"empty-header\">");if(t.s(t.f("translate",c,p,1),c,p,0,1097,1150,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_followers|You don't have any followers.");});c.pop();}t.b("</h1>");t.b("\n" + i);};t.b("  ");if(t.s(t.f("translate",c,p,1),c,p,0,1200,1346,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_publish_promote|To get started, <a href=\"");t.b(t.v(t.d("PAGE_URLS.PROJECT_EDITOR",c,p,0)));t.b("\">publish a project</a> and promote it on your social networks.");});c.pop();}t.b("\n" + i);});c.pop();}t.b("\n" + i);if(!t.s(t.d("profile.is_profile_owner",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("search",c,p,1),c,p,0,1435,1787,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <h1 class=\"empty-header\">");if(t.s(t.f("translate",c,p,1),c,p,0,1479,1596,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_user_no_followers_search|");t.b(t.v(t.d("profile.display_name",c,p,0)));t.b(" does not have any followers with the name ");t.b(t.v(t.f("search",c,p,0)));t.b(".");});c.pop();}t.b("</h1>");t.b("\n" + i);t.b("    ");if(t.s(t.f("translate",c,p,1),c,p,0,1634,1770,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_explore_curated_creatives|Explore our <a href=\"");t.b(t.v(t.d("PAGE_URLS.CREATIVES_TO_FOLLOW",c,p,0)));t.b("\">curated list of creatives to follow.</a>");});c.pop();}t.b("\n" + i);});c.pop();}if(!t.s(t.f("search",c,p,1),c,p,1,0,0,"")){t.b("    <h1 class=\"empty-header\">");if(t.s(t.f("translate",c,p,1),c,p,0,1856,1940,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_user_no_followers|");t.b(t.v(t.d("profile.display_name",c,p,0)));t.b(" doesn't have any followers.");});c.pop();}t.b("</h1>");t.b("\n" + i);t.b("    ");if(t.s(t.f("translate",c,p,1),c,p,0,1978,2161,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_check_back_explore_creatives|Please check back soon. Until then, you can explore our <a href=\"");t.b(t.v(t.d("PAGE_URLS.CREATIVES_TO_FOLLOW",c,p,0)));t.b("\">curated list of creatives to follow.</a>");});c.pop();}t.b("\n" + i);};};};t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"empty-wrap\">\n{{#is_team}}\n  {{#search}}\n    <h1 class=\"empty-header\">{{#translate}}profile_empty_user_no_followers_search|{{profile.display_name}} does not have any followers with the name {{search}}.{{/translate}}</h1>\n    {{#translate}}profile_empty_explore_curated_creatives|Explore our <a href=\"{{PAGE_URLS.CREATIVES_TO_FOLLOW}}\">curated list of creatives to follow.</a>{{/translate}}\n  {{/search}}\n  {{^search}}\n    <h1 class=\"empty-header\">{{#translate}}profile_empty_user_no_followers|{{profile.display_name}} doesn't have any followers.{{/translate}}</h1>\n    {{#translate}}profile_empty_check_back_explore_creatives|Please check back soon. Until then, you can explore our <a href=\"{{PAGE_URLS.CREATIVES_TO_FOLLOW}}\">curated list of creatives to follow.</a>{{/translate}}\n  {{/search}}\n{{/is_team}}\n\n{{^is_team}}\n{{#profile.is_profile_owner}}\n  {{#search}}\n    <h1 class=\"empty-header\">{{#translate}}profile_empty_followers_search|You do not have any followers with the name {{search}}.{{/translate}}</h1>\n  {{/search}}\n  {{^search}}\n    <h1 class=\"empty-header\">{{#translate}}profile_empty_followers|You don't have any followers.{{/translate}}</h1>\n  {{/search}}\n  {{#translate}}profile_empty_publish_promote|To get started, <a href=\"{{PAGE_URLS.PROJECT_EDITOR}}\">publish a project</a> and promote it on your social networks.{{/translate}}\n{{/profile.is_profile_owner}}\n\n{{^profile.is_profile_owner}}\n  {{#search}}\n    <h1 class=\"empty-header\">{{#translate}}profile_empty_user_no_followers_search|{{profile.display_name}} does not have any followers with the name {{search}}.{{/translate}}</h1>\n    {{#translate}}profile_empty_explore_curated_creatives|Explore our <a href=\"{{PAGE_URLS.CREATIVES_TO_FOLLOW}}\">curated list of creatives to follow.</a>{{/translate}}\n  {{/search}}\n  {{^search}}\n    <h1 class=\"empty-header\">{{#translate}}profile_empty_user_no_followers|{{profile.display_name}} doesn't have any followers.{{/translate}}</h1>\n    {{#translate}}profile_empty_check_back_explore_creatives|Please check back soon. Until then, you can explore our <a href=\"{{PAGE_URLS.CREATIVES_TO_FOLLOW}}\">curated list of creatives to follow.</a>{{/translate}}\n  {{/search}}\n{{/profile.is_profile_owner}}\n{{/is_team}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_button": __webpack_require__(45).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"empty-projects\" class=\"empty-wrap\">");t.b("\n" + i);if(t.s(t.f("is_team",c,p,1),c,p,0,57,618,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <h1 class=\"empty-header\">");if(t.s(t.f("translate",c,p,1),c,p,0,99,152,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_team_projects|This team has no projects");});c.pop();}t.b("</h1>");t.b("\n" + i);if(t.s(t.d("layout.is_member",c,p,1),c,p,0,195,354,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    ");if(t.s(t.f("translate",c,p,1),c,p,0,214,337,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_team_add_projects|You can add projects to a team profile from the project settings section in project editor.");});c.pop();}t.b("\n" + i);});c.pop();}if(!t.s(t.d("layout.is_member",c,p,1),c,p,1,0,0,"")){t.b("    ");if(t.s(t.f("translate",c,p,1),c,p,0,418,579,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_check_back_explore_discover|Please check back soon. Until then, you can explore other creative work in <a href=\"");t.b(t.v(t.d("PAGE_URLS.SEARCH",c,p,0)));t.b("\">Discover</a>.");});c.pop();}t.b("\n" + i);};});c.pop();}t.b("\n" + i);if(!t.s(t.f("is_team",c,p,1),c,p,1,0,0,"")){if(t.s(t.d("profile.is_profile_owner",c,p,1),c,p,0,674,1330,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("\n" + i);t.b("  <div class=\"empty-action-block\">");t.b("\n" + i);t.b("    <div class=\"beicons-pre beicons-pre-upload empty-action-icon\"></div>");t.b("\n");t.b("\n" + i);t.b("    ");if(t.s(t.f("translate",c,p,1),c,p,0,803,857,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_add_first_project|Add your first project");});c.pop();}t.b("\n");t.b("\n" + i);t.b(t.rp("<lib/_button0",c,p,""));t.b("  </div>");t.b("\n");t.b("\n" + i);t.b("  ");if(t.s(t.f("translate",c,p,1),c,p,0,1172,1314,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_upload_work|Upload your work to get feedback, views, and appreciations. Published projects can also be featured by our curators.");});c.pop();}t.b("\n");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(!t.s(t.d("profile.is_profile_owner",c,p,1),c,p,1,0,0,"")){t.b("  <h1 class=\"empty-header\">");if(t.s(t.f("translate",c,p,1),c,p,0,1432,1517,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_user_no_projects|");t.b(t.v(t.d("profile.display_name",c,p,0)));t.b(" hasn't uploaded any projects.");});c.pop();}t.b("</h1>");t.b("\n" + i);t.b("  ");if(t.s(t.f("translate",c,p,1),c,p,0,1553,1714,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_check_back_explore_discover|Please check back soon. Until then, you can explore other creative work in <a href=\"");t.b(t.v(t.d("PAGE_URLS.SEARCH",c,p,0)));t.b("\">Discover</a>.");});c.pop();}t.b("\n" + i);};};t.b("</div>");t.b("\n");return t.fl(); },partials: {"<lib/_button0":{name:"lib/_button", partials: {}, subs: { "attrs": function(c,p,t,i) {t.b("id=\"upload-project\" href=\"");t.b(t.v(t.d("PAGE_URLS.PROJECT_EDITOR",c,p,0)));t.b("\"");},"icon": function(c,p,t,i) {t.b("beicons-pre beicons-pre-upload");},"label": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,1061,1100,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_empty_upload_files|Upload Files");});c.pop();}} }}}, subs: {  }}, "<div id=\"empty-projects\" class=\"empty-wrap\">\n{{#is_team}}\n  <h1 class=\"empty-header\">{{#translate}}profile_empty_team_projects|This team has no projects{{/translate}}</h1>\n  {{#layout.is_member}}\n    {{#translate}}profile_empty_team_add_projects|You can add projects to a team profile from the project settings section in project editor.{{/translate}}\n  {{/layout.is_member}}\n  {{^layout.is_member}}\n    {{#translate}}profile_empty_check_back_explore_discover|Please check back soon. Until then, you can explore other creative work in <a href=\"{{PAGE_URLS.SEARCH}}\">Discover</a>.{{/translate}}\n  {{/layout.is_member}}\n{{/is_team}}\n\n{{^is_team}}\n{{#profile.is_profile_owner}}\n\n  <div class=\"empty-action-block\">\n    <div class=\"beicons-pre beicons-pre-upload empty-action-icon\"></div>\n\n    {{#translate}}profile_empty_add_first_project|Add your first project{{/translate}}\n\n    {{<lib/_button}}\n      {{$attrs}}id=\"upload-project\" href=\"{{PAGE_URLS.PROJECT_EDITOR}}\"{{/attrs}}\n      {{$icon}}beicons-pre beicons-pre-upload{{/icon}}\n      {{$label}}{{#translate}}profile_empty_upload_files|Upload Files{{/translate}}{{/label}}\n    {{/lib/_button}}\n  </div>\n\n  {{#translate}}profile_empty_upload_work|Upload your work to get feedback, views, and appreciations. Published projects can also be featured by our curators.{{/translate}}\n\n{{/profile.is_profile_owner}}\n\n{{^profile.is_profile_owner}}\n  <h1 class=\"empty-header\">{{#translate}}profile_empty_user_no_projects|{{profile.display_name}} hasn't uploaded any projects.{{/translate}}</h1>\n  {{#translate}}profile_empty_check_back_explore_discover|Please check back soon. Until then, you can explore other creative work in <a href=\"{{PAGE_URLS.SEARCH}}\">Discover</a>.{{/translate}}\n{{/profile.is_profile_owner}}\n{{/is_team}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_editButton": __webpack_require__(89).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"controls-overlay hide-phone hide-tablet\">");t.b("\n" + i);t.b("  <div class=\"controls-overlay-action controls-overlay-menu tooltipi-container\">");t.b("\n" + i);t.b(t.rp("<lib/_editButton0",c,p,"    "));t.b("    <ul class=\"tooltipi tooltipi-white controls-overlay-menu-items\">");t.b("\n" + i);t.b("      <li class=\"controls-overlay-menu-item\">");t.b("\n" + i);t.b("        <a href=\"#\" data-id=");t.b(t.v(t.f("id",c,p,0)));t.b(" class=\"js-collection-rename beicons-pre beicons-pre-rename\">");t.b("\n" + i);t.b("          ");if(t.s(t.f("translate",c,p,1),c,p,0,395,427,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_collection_rename|Rename");});c.pop();}t.b("\n" + i);t.b("        </a>");t.b("\n" + i);t.b("      </li>");t.b("\n" + i);t.b("      <li class=\"controls-overlay-menu-item\">");t.b("\n" + i);t.b("        <a href=\"#\" data-id=");t.b(t.v(t.f("id",c,p,0)));t.b(" class=\"js-collection-privacy beicons-pre beicons-pre-privacy\">");t.b("\n" + i);if(t.s(t.f("public",c,p,1),c,p,0,632,728,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            ");if(t.s(t.f("translate",c,p,1),c,p,0,659,703,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_collection_make_private|Make Private");});c.pop();}t.b("\n" + i);});c.pop();}if(!t.s(t.f("public",c,p,1),c,p,1,0,0,"")){t.b("            ");if(t.s(t.f("translate",c,p,1),c,p,0,788,830,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_collection_make_public|Make Public");});c.pop();}t.b("\n" + i);};t.b("        </a>");t.b("\n" + i);t.b("      </li>");t.b("\n" + i);t.b("      <li class=\"controls-overlay-menu-item\">");t.b("\n" + i);t.b("        <a href=\"#\" data-id=");t.b(t.v(t.f("id",c,p,0)));t.b(" class=\"js-collection-owners beicons-pre beicons-pre-owner\">");t.b("\n" + i);t.b("          ");if(t.s(t.f("translate",c,p,1),c,p,0,1057,1095,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_collection_add_owner|Add Owner");});c.pop();}t.b("\n" + i);t.b("        </a>");t.b("\n" + i);t.b("      </li>");t.b("\n" + i);if(t.s(t.f("is_coowner",c,p,1),c,p,0,1156,1414,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <li class=\"controls-overlay-menu-item\">");t.b("\n" + i);t.b("          <a href=\"#\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" class=\"js-collection-leave beicons-pre beicons-pre-x-circle\">");t.b("\n" + i);t.b("            ");if(t.s(t.f("translate",c,p,1),c,p,0,1332,1364,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_collection_remove|Remove");});c.pop();}t.b("\n" + i);t.b("          </a>");t.b("\n" + i);t.b("        </li>");t.b("\n" + i);});c.pop();}if(!t.s(t.f("is_coowner",c,p,1),c,p,1,0,0,"")){t.b("        <li class=\"controls-overlay-menu-item\">");t.b("\n" + i);t.b("          <a href=\"#\" data-id=");t.b(t.v(t.f("id",c,p,0)));t.b(" class=\"js-collection-delete beicons-pre beicons-pre-delete\">");t.b("\n" + i);t.b("            ");if(t.s(t.f("translate",c,p,1),c,p,0,1624,1656,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_collection_delete|Delete");});c.pop();}t.b("\n" + i);t.b("          </a>");t.b("\n" + i);t.b("        </li>");t.b("\n" + i);};t.b("    </ul>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<lib/_editButton0":{name:"lib/_editButton", partials: {}, subs: {  }}}, subs: {  }}, "<div class=\"controls-overlay hide-phone hide-tablet\">\n  <div class=\"controls-overlay-action controls-overlay-menu tooltipi-container\">\n    {{>lib/_editButton}}\n    <ul class=\"tooltipi tooltipi-white controls-overlay-menu-items\">\n      <li class=\"controls-overlay-menu-item\">\n        <a href=\"#\" data-id={{id}} class=\"js-collection-rename beicons-pre beicons-pre-rename\">\n          {{#translate}}profile_collection_rename|Rename{{/translate}}\n        </a>\n      </li>\n      <li class=\"controls-overlay-menu-item\">\n        <a href=\"#\" data-id={{id}} class=\"js-collection-privacy beicons-pre beicons-pre-privacy\">\n          {{#public}}\n            {{#translate}}profile_collection_make_private|Make Private{{/translate}}\n          {{/public}}\n          {{^public}}\n            {{#translate}}profile_collection_make_public|Make Public{{/translate}}\n          {{/public}}\n        </a>\n      </li>\n      <li class=\"controls-overlay-menu-item\">\n        <a href=\"#\" data-id={{id}} class=\"js-collection-owners beicons-pre beicons-pre-owner\">\n          {{#translate}}profile_collection_add_owner|Add Owner{{/translate}}\n        </a>\n      </li>\n      {{#is_coowner}}\n        <li class=\"controls-overlay-menu-item\">\n          <a href=\"#\" data-id=\"{{id}}\" class=\"js-collection-leave beicons-pre beicons-pre-x-circle\">\n            {{#translate}}profile_collection_remove|Remove{{/translate}}\n          </a>\n        </li>\n      {{/is_coowner}}\n      {{^is_coowner}}\n        <li class=\"controls-overlay-menu-item\">\n          <a href=\"#\" data-id={{id}} class=\"js-collection-delete beicons-pre beicons-pre-delete\">\n            {{#translate}}profile_collection_delete|Delete{{/translate}}\n          </a>\n        </li>\n      {{/is_coowner}}\n    </ul>\n  </div>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 52:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"js-spin label-spin\"></div>");t.b("\n" + i);t.b("<span class=\"js-spin-label-saving label-spin-status label-spin-status-saving hide\">");if(t.s(t.f("translate",c,p,1),c,p,0,136,166,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("form_template_saving|Saving...");});c.pop();}t.b("</span>");t.b("\n" + i);t.b("<span class=\"js-spin-label-saved label-spin-status label-spin-status-saved beicons-pre beicons-pre-check-circle hide\">");if(t.s(t.f("translate",c,p,1),c,p,0,320,345,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("form_template_saved|Saved");});c.pop();}t.b("</span>");t.b("\n" + i);t.b("<span class=\"js-spin-label-error label-spin-status label-spin-status-error beicons-pre beicons-pre-x-circle hide\">");if(t.s(t.f("translate",c,p,1),c,p,0,495,558,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("form_template_error_saving|Error saving: please try again later");});c.pop();}t.b("</span>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"js-spin label-spin\"></div>\n<span class=\"js-spin-label-saving label-spin-status label-spin-status-saving hide\">{{#translate}}form_template_saving|Saving...{{/translate}}</span>\n<span class=\"js-spin-label-saved label-spin-status label-spin-status-saved beicons-pre beicons-pre-check-circle hide\">{{#translate}}form_template_saved|Saved{{/translate}}</span>\n<span class=\"js-spin-label-error label-spin-status label-spin-status-error beicons-pre beicons-pre-x-circle hide\">{{#translate}}form_template_error_saving|Error saving: please try again later{{/translate}}</span>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 54:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div ");if(t.s(t.f("instant_backfill",c,p,1),c,p,0,90,113,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("data-backfill=\"instant\"");});c.pop();}t.b(" class=\"");t.sub("classes",c,p,i);t.b(" js-action-follow follow-button-container");if(t.s(t.f("is_following",c,p,1),c,p,0,224,234,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" following");});c.pop();}t.b("\" data-followee=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" data-entity=\"");t.sub("type",c,p,i);t.b("\" ");if(t.s(t.f("is_following",c,p,1),c,p,0,326,347,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("data-following=\"true\"");});c.pop();}t.b(">");t.b("\n" + i);t.b("  <a class=\"form-button js-form-button-follow form-button-follow ");t.sub("size",c,p,i);t.b(" form-button-default\">");t.sub("follow",c,p,i);t.b("</a>");t.b("\n" + i);t.b("  <a class=\"form-button form-button-following ");t.sub("size",c,p,i);t.b(" form-button-light-and-grey\">");t.sub("following",c,p,i);t.b("</a>");t.b("\n" + i);t.b("  <a class=\"form-button js-form-button-unfollow form-button-unfollow ");t.sub("size",c,p,i);t.b(" form-button-red\">");t.sub("unfollow",c,p,i);t.b("</a>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: { "classes": function(c,p,t,i) {},"type": function(c,p,t,i) {},"size": function(c,p,t,i) {},"follow": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,496,516,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("button_follow|Follow");});c.pop();}t.b(t.v(t.f("follow_label_postfix",c,p,0)));},"following": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,691,717,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("button_following|Following");});c.pop();}t.b(t.v(t.f("follow_label_postfix",c,p,0)));},"unfollow": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,906,930,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("button_unfollow|Unfollow");});c.pop();}t.b("&nbsp;");t.b(t.v(t.f("follow_label_postfix",c,p,0)));} }}, "{{! TODO: investigate removal of form-button-(un)follow(ing) }}\n<div {{#instant_backfill}}data-backfill=\"instant\"{{/instant_backfill}} class=\"{{$classes}}{{/classes}} js-action-follow follow-button-container{{#is_following}} following{{/is_following}}\" data-followee=\"{{id}}\" data-entity=\"{{$type}}{{/type}}\" {{#is_following}}data-following=\"true\"{{/is_following}}>\n  <a class=\"form-button js-form-button-follow form-button-follow {{$size}}{{/size}} form-button-default\">{{$follow}}{{#translate}}button_follow|Follow{{/translate}}{{follow_label_postfix}}{{/follow}}</a>\n  <a class=\"form-button form-button-following {{$size}}{{/size}} form-button-light-and-grey\">{{$following}}{{#translate}}button_following|Following{{/translate}}{{follow_label_postfix}}{{/following}}</a>\n  <a class=\"form-button js-form-button-unfollow form-button-unfollow {{$size}}{{/size}} form-button-red\">{{$unfollow}}{{#translate}}button_unfollow|Unfollow{{/translate}}&nbsp;{{follow_label_postfix}}{{/unfollow}}</a>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 593:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(!t.s(t.f("draft",c,p,1),c,p,1,0,0,"")){t.b("  ");if(t.s(t.f("translate",c,p,1),c,p,0,27,103,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_delete_project_confirm|Are you sure you want to delete this project?");});c.pop();}t.b("\n" + i);};if(t.s(t.f("draft",c,p,1),c,p,0,139,259,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  ");if(t.s(t.f("translate",c,p,1),c,p,0,156,244,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_delete_project_draft_confirm|Are you sure you want to delete this project draft?");});c.pop();}t.b("\n" + i);});c.pop();}if(t.s(t.f("multiple_owners",c,p,1),c,p,0,290,459,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  ");if(t.s(t.f("translate",c,p,1),c,p,0,307,444,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_delete_project_confirm_multiple_owners|This project has multiple owners and will be completely deleted from ALL owners' profiles.");});c.pop();}t.b("\n" + i);});c.pop();}if(t.s(t.f("translate",c,p,1),c,p,0,494,625,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_delete_project_content|All images, text, appreciations, and views associated with this project will be permanently deleted.");});c.pop();}t.b("\n" + i);if(t.s(t.f("is_portfolio_project",c,p,1),c,p,0,665,904,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <p class=\"delete-portfolio-project-warning\">");t.b("\n" + i);t.b("    ");if(t.s(t.f("translate",c,p,1),c,p,0,731,882,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_delete_project_confirm_portfolio|Important: Note that this project will also be deleted from your Adobe Portfolio site and cannot be recovered.");});c.pop();}t.b("\n" + i);t.b("  </p>");t.b("\n" + i);});c.pop();}return t.fl(); },partials: {}, subs: {  }}, "{{^draft}}\n  {{#translate}}profile_delete_project_confirm|Are you sure you want to delete this project?{{/translate}}\n{{/draft}}\n{{#draft}}\n  {{#translate}}profile_delete_project_draft_confirm|Are you sure you want to delete this project draft?{{/translate}}\n{{/draft}}\n{{#multiple_owners}}\n  {{#translate}}profile_delete_project_confirm_multiple_owners|This project has multiple owners and will be completely deleted from ALL owners' profiles.{{/translate}}\n{{/multiple_owners}}\n{{#translate}}profile_delete_project_content|All images, text, appreciations, and views associated with this project will be permanently deleted.{{/translate}}\n{{#is_portfolio_project}}\n  <p class=\"delete-portfolio-project-warning\">\n    {{#translate}}profile_delete_project_confirm_portfolio|Important: Note that this project will also be deleted from your Adobe Portfolio site and cannot be recovered.{{/translate}}\n  </p>\n{{/is_portfolio_project}}", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 594:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(t.s(t.f("translate",c,p,1),c,p,0,14,229,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_remove_owner_project_confirm|This project");if(t.s(t.f("draft",c,p,1),c,p,0,73,79,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" draft");});c.pop();}t.b(" will be removed from your profile and you will no longer have access to it. However, it will still be visible on other co-owner's profiles.");});c.pop();}t.b("\n" + i);if(t.s(t.f("is_portfolio_project",c,p,1),c,p,0,269,434,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  ");if(t.s(t.f("translate",c,p,1),c,p,0,286,419,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_remove_owner_project_confirm_portfolio|Important: Note that this project will also be removed from your Adobe Portfolio site.");});c.pop();}t.b("\n" + i);});c.pop();}t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "{{#translate}}profile_remove_owner_project_confirm|This project{{#draft}} draft{{/draft}} will be removed from your profile and you will no longer have access to it. However, it will still be visible on other co-owner's profiles.{{/translate}}\n{{#is_portfolio_project}}\n  {{#translate}}profile_remove_owner_project_confirm_portfolio|Important: Note that this project will also be removed from your Adobe Portfolio site.{{/translate}}\n{{/is_portfolio_project}}\n\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(t) {
     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : t(jQuery);
}(function(t) {
    var e = 0, i = Array.prototype.slice;
    return t.cleanData = function(e) {
        return function(i) {
            var n, s, o;
            for (o = 0; null != (s = i[o]); o++) try {
                n = t._data(s, "events"), n && n.remove && t(s).triggerHandler("remove");
            } catch (t) {}
            e(i);
        };
    }(t.cleanData), t.widget = function(e, i, n) {
        var s, o, r, a, u = {}, d = e.split(".")[0];
        return e = e.split(".")[1], s = d + "-" + e, n || (n = i, i = t.Widget), t.expr[":"][s.toLowerCase()] = function(e) {
            return !!t.data(e, s);
        }, t[d] = t[d] || {}, o = t[d][e], r = t[d][e] = function(t, e) {
            return this._createWidget ? void (arguments.length && this._createWidget(t, e)) : new r(t, e);
        }, t.extend(r, o, {
            version: n.version,
            _proto: t.extend({}, n),
            _childConstructors: []
        }), a = new i(), a.options = t.widget.extend({}, a.options), t.each(n, function(e, n) {
            return t.isFunction(n) ? void (u[e] = function() {
                var t = function() {
                    return i.prototype[e].apply(this, arguments);
                }, s = function(t) {
                    return i.prototype[e].apply(this, t);
                };
                return function() {
                    var e, i = this._super, o = this._superApply;
                    return this._super = t, this._superApply = s, e = n.apply(this, arguments), this._super = i, 
                    this._superApply = o, e;
                };
            }()) : void (u[e] = n);
        }), r.prototype = t.widget.extend(a, {
            widgetEventPrefix: o ? a.widgetEventPrefix || e : e
        }, u, {
            constructor: r,
            namespace: d,
            widgetName: e,
            widgetFullName: s
        }), o ? (t.each(o._childConstructors, function(e, i) {
            var n = i.prototype;
            t.widget(n.namespace + "." + n.widgetName, r, i._proto);
        }), delete o._childConstructors) : i._childConstructors.push(r), t.widget.bridge(e, r), 
        r;
    }, t.widget.extend = function(e) {
        for (var n, s, o = i.call(arguments, 1), r = 0, a = o.length; r < a; r++) for (n in o[r]) s = o[r][n], 
        o[r].hasOwnProperty(n) && void 0 !== s && (t.isPlainObject(s) ? e[n] = t.isPlainObject(e[n]) ? t.widget.extend({}, e[n], s) : t.widget.extend({}, s) : e[n] = s);
        return e;
    }, t.widget.bridge = function(e, n) {
        var s = n.prototype.widgetFullName || e;
        t.fn[e] = function(o) {
            var r = "string" == typeof o, a = i.call(arguments, 1), u = this;
            return r ? this.each(function() {
                var i, n = t.data(this, s);
                return "instance" === o ? (u = n, !1) : n ? t.isFunction(n[o]) && "_" !== o.charAt(0) ? (i = n[o].apply(n, a), 
                i !== n && void 0 !== i ? (u = i && i.jquery ? u.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + o + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + o + "'");
            }) : (a.length && (o = t.widget.extend.apply(null, [ o ].concat(a))), this.each(function() {
                var e = t.data(this, s);
                e ? (e.option(o || {}), e._init && e._init()) : t.data(this, s, new n(o, this));
            })), u;
        };
    }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(i, n) {
            n = t(n || this.defaultElement || this)[0], this.element = t(n), this.uuid = e++, 
            this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), 
            this.focusable = t(), n !== this && (t.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(t) {
                    t.target === n && this.destroy();
                }
            }), this.document = t(n.style ? n.ownerDocument : n.document || n), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), 
            this.options = t.widget.extend({}, this.options, this._getCreateOptions(), i), this._create(), 
            this._trigger("create", null, this._getCreateEventData()), this._init();
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), 
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), 
            this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), 
            this.focusable.removeClass("ui-state-focus");
        },
        _destroy: t.noop,
        widget: function() {
            return this.element;
        },
        option: function(e, i) {
            var n, s, o, r = e;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof e) if (r = {}, n = e.split("."), e = n.shift(), n.length) {
                for (s = r[e] = t.widget.extend({}, this.options[e]), o = 0; o < n.length - 1; o++) s[n[o]] = s[n[o]] || {}, 
                s = s[n[o]];
                if (e = n.pop(), 1 === arguments.length) return void 0 === s[e] ? null : s[e];
                s[e] = i;
            } else {
                if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                r[e] = i;
            }
            return this._setOptions(r), this;
        },
        _setOptions: function(t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this;
        },
        _setOption: function(t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), 
            e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), 
            this;
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            });
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            });
        },
        _on: function(e, i, n) {
            var s, o = this;
            "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = s = t(i), this.bindings = this.bindings.add(i)) : (n = i, 
            i = this.element, s = this.widget()), t.each(n, function(n, r) {
                function a() {
                    if (e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled")) return ("string" == typeof r ? o[r] : r).apply(o, arguments);
                }
                "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
                var u = n.match(/^([\w:-]*)\s*(.*)$/), d = u[1] + o.eventNamespace, h = u[2];
                h ? s.delegate(h, d, a) : i.bind(d, a);
            });
        },
        _off: function(e, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, 
            e.unbind(i).undelegate(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), 
            this.hoverable = t(this.hoverable.not(e).get());
        },
        _delay: function(t, e) {
            function i() {
                return ("string" == typeof t ? n[t] : t).apply(n, arguments);
            }
            var n = this;
            return setTimeout(i, e || 0);
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function(e) {
                    t(e.currentTarget).addClass("ui-state-hover");
                },
                mouseleave: function(e) {
                    t(e.currentTarget).removeClass("ui-state-hover");
                }
            });
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function(e) {
                    t(e.currentTarget).addClass("ui-state-focus");
                },
                focusout: function(e) {
                    t(e.currentTarget).removeClass("ui-state-focus");
                }
            });
        },
        _trigger: function(e, i, n) {
            var s, o, r = this.options[e];
            if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), 
            i.target = this.element[0], o = i.originalEvent) for (s in o) s in i || (i[s] = o[s]);
            return this.element.trigger(i, n), !(t.isFunction(r) && r.apply(this.element[0], [ i ].concat(n)) === !1 || i.isDefaultPrevented());
        }
    }, t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, i) {
        t.Widget.prototype["_" + e] = function(n, s, o) {
            "string" == typeof s && (s = {
                effect: s
            });
            var r, a = s ? s === !0 || "number" == typeof s ? i : s.effect || i : e;
            s = s || {}, "number" == typeof s && (s = {
                duration: s
            }), r = !t.isEmptyObject(s), s.complete = o, s.delay && n.delay(s.delay), r && t.effects && t.effects.effect[a] ? n[e](s) : a !== e && n[a] ? n[a](s.duration, s.easing, o) : n.queue(function(i) {
                t(this)[e](), o && o.call(n[0]), i();
            });
        };
    }), t.widget;
});

/***/ },

/***/ 60:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_follow/_button": __webpack_require__(54).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(!t.s(t.f("is_profile_owner",c,p,1),c,p,1,0,0,"")){t.b(t.rp("<lib/_follow/_button0",c,p,""));};return t.fl(); },partials: {"<lib/_follow/_button0":{name:"lib/_follow/_button", partials: {}, subs: { "classes": function(c,p,t,i) {t.b("user-follow");},"type": function(c,p,t,i) {t.b("user");},"size": function(c,p,t,i) {t.b("form-button-small");} }}}, subs: {  }}, "{{^is_profile_owner}}\n  {{<lib/_follow/_button}}\n    {{$classes}}user-follow{{/classes}}\n    {{$type}}user{{/type}}\n    {{$size}}form-button-small{{/size}}\n  {{/lib/_follow/_button}}\n{{/is_profile_owner}}", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 62:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(8), __webpack_require__(9) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e) {
    "use strict";
    e.fn.autoselectmenu = function() {
        return this.each(function() {
            var t = e(this), i = (t.find("option").outerWidth(), {}), n = function() {
                t.changeInput("value", this.value);
            };
            !t.data("uiSelectmenuold") && t.is(":visible") && (i = {
                style: "dropdown",
                maxHeight: 200,
                menuWidth: t.outerWidth()
            }, t.hasClass("ui-selectmenu-dropdown-right") && (i.positionOptions = {
                my: "right top",
                at: "right bottom",
                offset: null
            }), t.width() > 0 && (i.width = "auto"), t.selectmenuold(i).on("change keyup", n));
        });
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 63:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"profile-list\">");t.b("\n" + i);t.b("  <a class=\"normal-link profile-list-image-wrap js-mini-profile\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\"><img class=\"profile-list-image\" src=\"");t.b(t.v(t.d("images.115",c,p,0)));t.b("\" /></a>");t.b("\n" + i);t.b("  <div class=\"profile-list-info profile-list-info-row\">");t.b("\n" + i);t.b("    <div class=\"profile-list-name\"><a class=\"normal-link js-mini-profile\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\">");t.b(t.v(t.f("display_name",c,p,0)));t.b("</a></div><!-- /.profile-list-name -->");t.b("\n" + i);if(t.s(t.f("location",c,p,1),c,p,0,418,621,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <div class=\"profile-location\">");t.b("\n" + i);t.b("        <a class=\"profile-list-location-link beicons-pre beicons-pre-location\" href=\"");t.b(t.v(t.f("location_link",c,p,0)));t.b("\">");t.b(t.v(t.f("location",c,p,0)));t.b("</a>");t.b("\n" + i);t.b("      </div><!-- /.profile-location -->");t.b("\n" + i);});c.pop();}t.sub("follow_link",c,p,i);t.b("  </div><!-- /.profile-list-info -->");t.b("\n" + i);t.b("</div><!-- /.profile-list -->");t.b("\n");return t.fl(); },partials: {}, subs: { "follow_link": function(c,p,t,i) {} }}, "<div class=\"profile-list\">\n  <a class=\"normal-link profile-list-image-wrap js-mini-profile\" href=\"{{url}}\" data-id=\"{{id}}\"><img class=\"profile-list-image\" src=\"{{images.115}}\" /></a>\n  <div class=\"profile-list-info profile-list-info-row\">\n    <div class=\"profile-list-name\"><a class=\"normal-link js-mini-profile\" data-id=\"{{id}}\" href=\"{{url}}\">{{display_name}}</a></div><!-- /.profile-list-name -->\n    {{#location}}\n      <div class=\"profile-location\">\n        <a class=\"profile-list-location-link beicons-pre beicons-pre-location\" href=\"{{location_link}}\">{{location}}</a>\n      </div><!-- /.profile-location -->\n    {{/location}}\n    {{$follow_link}}{{/follow_link}}\n  </div><!-- /.profile-list-info -->\n</div><!-- /.profile-list -->\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 65:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(36), __webpack_require__(4) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, n, e) {
    "use strict";
    return e.extend({
        formatter: function(t, n) {
            return t.format(n);
        },
        init: function(e, r, o) {
            var f = this.formatter;
            r = r || "LL", e.find(".js-format-timestamp").each(function(e, i) {
                var m, a = t(i), u = a.data("timestamp"), c = n.unix(u);
                o && o.isUTC && (c = c.utc()), m = o && o.fromNow ? n(c).fromNow() : f(c, r), m && a.text(m);
            });
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 66:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(53), __webpack_require__(2), __webpack_require__(104), __webpack_require__(99) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, n, t, i) {
    "use strict";
    function o(e) {
        o._cache = o._cache || {};
        var i, r;
        return (r = o._cache[e]) ? (i = new n(), i.resolve(r), i) : t({
            url: "/user/mini/" + e
        }).then(function(n) {
            return o._cache[e] = n, n;
        });
    }
    function r(n, t) {
        var o = new i(t);
        n.parents(".popup").length ? (t.within = e(window), t.bottom = null) : (t.within = a, 
        t.bottom = c), o.setContext(n), o.render(n), o._view.show();
    }
    function u(n, t, i) {
        n = n || e(document.body), a = t || e(window), c = i;
        var u, s, f;
        n.on("mouseenter", ".js-mini-profile", function() {
            var n = e(this);
            u = n.data("id"), clearTimeout(s), s = setTimeout(function() {
                n.addClass("wait"), f = o(u), f.then(function(e) {
                    n.removeClass("wait"), r(n, e);
                }, function() {
                    n.removeClass("wait");
                });
            }, l);
        }).on("mouseleave", ".js-mini-profile", function() {
            clearTimeout(s), f && (f.reject(), f = null);
        });
    }
    function s(n) {
        n = n || e(document.body), n.off("mouseenter mouseleave", ".js-mini-profile"), e.each(f, function(e, n) {
            n.destroy();
        });
    }
    var c, a, l = 500, f = {};
    return {
        init: u,
        destroy: s,
        loadUser: o
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 68:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(34) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e) {
    "use strict";
    return e.widget("be.autoselect", e.be.autosuggest, {
        options: {
            limit: 0,
            toggle: !1,
            select: function(t, s) {
                return e(this).autoselect("clear"), !1;
            }
        },
        _selected: null,
        _create: function() {
            this._super();
            var t = this;
            this._on(this.menu.element, {
                menuselect: function(e, s) {
                    var i = s.item.data("ui-autocomplete-item");
                    t.select(i);
                }
            }), this._selected = e.isArray(this.options.value) ? this.options.value : [], this._selected.length && this._changeValue(!0);
        },
        select: function(t) {
            t = e.isArray(t) ? t : [ t ];
            var s, i, l, n = !1;
            for (i = 0; i < t.length; ++i) l = t[i], (s = this._selected.indexOf(l)) < 0 ? this._selected.length < (this.options.limit || 1 / 0) ? (this._selected.push(l), 
            n = !0) : this._trigger("limit", null, {
                item: l
            }) : this.options.toggle && (this._selected.splice(s, 1), n = !0);
            n && this._changeValue();
        },
        unselect: function(e) {
            var t;
            (t = this._selected.indexOf(e)) >= 0 && (this._selected.splice(t, 1), this._changeValue());
        },
        _changeValue: function(e) {
            var t = this._selected.length >= (this.options.limit || 1 / 0), s = this.options.messages[t ? "limited" : "placeholder"];
            this.element.prop("disabled", t).prop("aria-disabled", t).toggleClass("ui-state-disabled", t), 
            t && this.element.blur(), s && this.element.prop("placeholder", s), e || this._trigger("value", null, {
                value: this._selected
            });
        },
        value: function() {
            return this._selected;
        },
        empty: function() {
            this._selected = [], this._changeValue();
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 70:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<li class=\"ui-menu-item\">");t.b("\n" + i);t.b("  <a class=\"mention-user-wrap\">");t.b("\n" + i);t.b("    <img class=\"mention-user-image\" src=\"");t.b(t.v(t.d("images.50",c,p,0)));t.b("\" />");t.b("\n" + i);t.b("    <div class=\"mention-displayname\">");t.b(t.v(t.f("display_name",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("    <div class=\"mention-minor\">@");t.b(t.v(t.f("username",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("  </a>");t.b("\n" + i);t.b("</li>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<li class=\"ui-menu-item\">\n  <a class=\"mention-user-wrap\">\n    <img class=\"mention-user-image\" src=\"{{images.50}}\" />\n    <div class=\"mention-displayname\">{{display_name}}</div>\n    <div class=\"mention-minor\">@{{username}}</div>\n  </a>\n</li>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 71:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;window.matchMedia || (window.matchMedia = function() {
    "use strict";
    var e = window.styleMedia || window.media;
    if (!e) {
        var t = document.createElement("style"), r = document.getElementsByTagName("script")[0], n = null;
        t.type = "text/css", t.id = "matchmediajs-test", r.parentNode.insertBefore(t, r), 
        n = "getComputedStyle" in window && window.getComputedStyle(t, null) || t.currentStyle, 
        e = {
            matchMedium: function(e) {
                var r = "@media " + e + "{ #matchmediajs-test { width: 1px; } }";
                return t.styleSheet ? t.styleSheet.cssText = r : t.textContent = r, "1px" === n.width;
            }
        };
    }
    return function(t) {
        return {
            matches: e.matchMedium(t || "all"),
            media: t || "all"
        };
    };
}()), function(e, t, r) {
    "use strict";
    function n(t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t : "function" == "function" && __webpack_require__(102) && !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
            return t;
        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)), "object" == typeof e && (e.picturefill = t);
    }
    function i(e) {
        var t, r, n, i, s, c = e || {};
        t = c.elements || o.getAllElements();
        for (var l = 0, u = t.length; l < u; l++) if (r = t[l], n = r.parentNode, i = void 0, 
        s = void 0, "IMG" === r.nodeName.toUpperCase() && (r[o.ns] || (r[o.ns] = {}), c.reevaluate || !r[o.ns].evaluated)) {
            if (n && "PICTURE" === n.nodeName.toUpperCase()) {
                if (o.removeVideoShim(n), i = o.getMatch(r, n), i === !1) continue;
            } else i = void 0;
            (n && "PICTURE" === n.nodeName.toUpperCase() || !o.sizesSupported && r.srcset && a.test(r.srcset)) && o.dodgeSrcset(r), 
            i ? (s = o.processSourceSet(i), o.applyBestCandidate(s, r)) : (s = o.processSourceSet(r), 
            (void 0 === r.srcset || r[o.ns].srcset) && o.applyBestCandidate(s, r)), r[o.ns].evaluated = !0;
        }
    }
    function s() {
        function r() {
            clearTimeout(n), n = setTimeout(a, 60);
        }
        o.initTypeDetects(), i();
        var n, s = setInterval(function() {
            if (i(), /^loaded|^i|^c/.test(t.readyState)) return void clearInterval(s);
        }, 250), a = function() {
            i({
                reevaluate: !0
            });
        };
        e.addEventListener ? e.addEventListener("resize", r, !1) : e.attachEvent && e.attachEvent("onresize", r);
    }
    if (e.HTMLPictureElement) return void n(function() {});
    t.createElement("picture");
    var o = e.picturefill || {}, a = /\s+\+?\d+(e\d+)?w/;
    o.ns = "picturefill", function() {
        o.srcsetSupported = "srcset" in r, o.sizesSupported = "sizes" in r, o.curSrcSupported = "currentSrc" in r;
    }(), o.trim = function(e) {
        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
    }, o.makeUrl = function() {
        var e = t.createElement("a");
        return function(t) {
            return e.href = t, e.href;
        };
    }(), o.restrictsMixedContent = function() {
        return "https:" === e.location.protocol;
    }, o.matchesMedia = function(t) {
        return e.matchMedia && e.matchMedia(t).matches;
    }, o.getDpr = function() {
        return e.devicePixelRatio || 1;
    }, o.getWidthFromLength = function(e) {
        var r;
        if (!e || e.indexOf("%") > -1 != !1 || !(parseFloat(e) > 0 || e.indexOf("calc(") > -1)) return !1;
        e = e.replace("vw", "%"), o.lengthEl || (o.lengthEl = t.createElement("div"), o.lengthEl.style.cssText = "border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden", 
        o.lengthEl.className = "helper-from-picturefill-js"), o.lengthEl.style.width = "0px";
        try {
            o.lengthEl.style.width = e;
        } catch (e) {}
        return t.body.appendChild(o.lengthEl), r = o.lengthEl.offsetWidth, r <= 0 && (r = !1), 
        t.body.removeChild(o.lengthEl), r;
    }, o.detectTypeSupport = function(t, r) {
        var n = new e.Image();
        return n.onerror = function() {
            o.types[t] = !1, i();
        }, n.onload = function() {
            o.types[t] = 1 === n.width, i();
        }, n.src = r, "pending";
    }, o.types = o.types || {}, o.initTypeDetects = function() {
        o.types["image/jpeg"] = !0, o.types["image/gif"] = !0, o.types["image/png"] = !0, 
        o.types["image/svg+xml"] = t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), 
        o.types["image/webp"] = o.detectTypeSupport("image/webp", "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=");
    }, o.verifyTypeSupport = function(e) {
        var t = e.getAttribute("type");
        if (null === t || "" === t) return !0;
        var r = o.types[t];
        return "string" == typeof r && "pending" !== r ? (o.types[t] = o.detectTypeSupport(t, r), 
        "pending") : "function" == typeof r ? (r(), "pending") : r;
    }, o.parseSize = function(e) {
        var t = /(\([^)]+\))?\s*(.+)/g.exec(e);
        return {
            media: t && t[1],
            length: t && t[2]
        };
    }, o.findWidthFromSourceSize = function(r) {
        for (var n, i = o.trim(r).split(/\s*,\s*/), s = 0, a = i.length; s < a; s++) {
            var c = i[s], l = o.parseSize(c), u = l.length, d = l.media;
            if (u && (!d || o.matchesMedia(d)) && (n = o.getWidthFromLength(u))) break;
        }
        return n || Math.max(e.innerWidth || 0, t.documentElement.clientWidth);
    }, o.parseSrcset = function(e) {
        for (var t = []; "" !== e; ) {
            e = e.replace(/^\s+/g, "");
            var r, n = e.search(/\s/g), i = null;
            if (n !== -1) {
                r = e.slice(0, n);
                var s = r.slice(-1);
                if ("," !== s && "" !== r || (r = r.replace(/,+$/, ""), i = ""), e = e.slice(n + 1), 
                null === i) {
                    var o = e.indexOf(",");
                    o !== -1 ? (i = e.slice(0, o), e = e.slice(o + 1)) : (i = e, e = "");
                }
            } else r = e, e = "";
            (r || i) && t.push({
                url: r,
                descriptor: i
            });
        }
        return t;
    }, o.parseDescriptor = function(e, t) {
        var r, n = t || "100vw", i = e && e.replace(/(^\s+|\s+$)/g, ""), s = o.findWidthFromSourceSize(n);
        if (i) for (var a = i.split(" "), c = a.length - 1; c >= 0; c--) {
            var l = a[c], u = l && l.slice(l.length - 1);
            if ("h" !== u && "w" !== u || o.sizesSupported) {
                if ("x" === u) {
                    var d = l && parseFloat(l, 10);
                    r = d && !isNaN(d) ? d : 1;
                }
            } else r = parseFloat(parseInt(l, 10) / s);
        }
        return r || 1;
    }, o.getCandidatesFromSourceSet = function(e, t) {
        for (var r = o.parseSrcset(e), n = [], i = 0, s = r.length; i < s; i++) {
            var a = r[i];
            n.push({
                url: a.url,
                resolution: o.parseDescriptor(a.descriptor, t)
            });
        }
        return n;
    }, o.dodgeSrcset = function(e) {
        e.srcset && (e[o.ns].srcset = e.srcset, e.srcset = "", e.setAttribute("data-pfsrcset", e[o.ns].srcset));
    }, o.processSourceSet = function(e) {
        var t = e.getAttribute("srcset"), r = e.getAttribute("sizes"), n = [];
        return "IMG" === e.nodeName.toUpperCase() && e[o.ns] && e[o.ns].srcset && (t = e[o.ns].srcset), 
        t && (n = o.getCandidatesFromSourceSet(t, r)), n;
    }, o.backfaceVisibilityFix = function(e) {
        var t = e.style || {}, r = "webkitBackfaceVisibility" in t, n = t.zoom;
        r && (t.zoom = ".999", r = e.offsetWidth, t.zoom = n);
    }, o.setIntrinsicSize = function() {
        var r = {}, n = function(e, t, r) {
            t && e.setAttribute("width", parseInt(t / r, 10));
        };
        return function(i, s) {
            var a;
            i[o.ns] && !e.pfStopIntrinsicSize && (void 0 === i[o.ns].dims && (i[o.ns].dims = i.getAttribute("width") || i.getAttribute("height")), 
            i[o.ns].dims || (s.url in r ? n(i, r[s.url], s.resolution) : (a = t.createElement("img"), 
            a.onload = function() {
                if (r[s.url] = a.width, !r[s.url]) try {
                    t.body.appendChild(a), r[s.url] = a.width || a.offsetWidth, t.body.removeChild(a);
                } catch (e) {}
                i.src === s.url && n(i, r[s.url], s.resolution), i = null, a.onload = null, a = null;
            }, a.src = s.url)));
        };
    }(), o.applyBestCandidate = function(e, t) {
        var r, n, i;
        e.sort(o.ascendingSort), n = e.length, i = e[n - 1];
        for (var s = 0; s < n; s++) if (r = e[s], r.resolution >= o.getDpr()) {
            i = r;
            break;
        }
        i && (i.url = o.makeUrl(i.url), t.src !== i.url && (o.restrictsMixedContent() && "http:" === i.url.substr(0, "http:".length).toLowerCase() ? void 0 !== window.console && console.warn("Blocked mixed content image " + i.url) : (t.src = i.url, 
        o.curSrcSupported || (t.currentSrc = t.src), o.backfaceVisibilityFix(t))), o.setIntrinsicSize(t, i));
    }, o.ascendingSort = function(e, t) {
        return e.resolution - t.resolution;
    }, o.removeVideoShim = function(e) {
        var t = e.getElementsByTagName("video");
        if (t.length) {
            for (var r = t[0], n = r.getElementsByTagName("source"); n.length; ) e.insertBefore(n[0], r);
            r.parentNode.removeChild(r);
        }
    }, o.getAllElements = function() {
        for (var e = [], r = t.getElementsByTagName("img"), n = 0, i = r.length; n < i; n++) {
            var s = r[n];
            ("PICTURE" === s.parentNode.nodeName.toUpperCase() || null !== s.getAttribute("srcset") || s[o.ns] && null !== s[o.ns].srcset) && e.push(s);
        }
        return e;
    }, o.getMatch = function(e, t) {
        for (var r, n = t.childNodes, i = 0, s = n.length; i < s; i++) {
            var a = n[i];
            if (1 === a.nodeType) {
                if (a === e) return r;
                if ("SOURCE" === a.nodeName.toUpperCase()) {
                    null !== a.getAttribute("src") && void 0 !== typeof console && console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");
                    var c = a.getAttribute("media");
                    if (a.getAttribute("srcset") && (!c || o.matchesMedia(c))) {
                        var l = o.verifyTypeSupport(a);
                        if (l === !0) {
                            r = a;
                            break;
                        }
                        if ("pending" === l) return !1;
                    }
                }
            }
        }
        return r;
    }, s(), i._ = o, n(i);
}(window, window.document, new window.Image());

/***/ },

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(56), __webpack_require__(18), __webpack_require__(83) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, n, t, r) {
    "use strict";
    function i(e) {
        return ~e.indexOf("&lt;") ? u.html(e).text() : e;
    }
    var o, u = e("<div>"), s = n.extend({
        template: t(r, e),
        templateData: function() {
            return {
                message: "Oops, an error occurred. | <a class='js-reload'>Please Refesh.</a>"
            };
        },
        render: function(e) {
            return e = e ? {
                message: i(e)
            } : null, this._super(e);
        },
        rendered: function() {
            this.$view.on("click", ".js-reload", function() {
                window.location.reload();
            }).show();
        },
        hide: function() {
            return this.$view && this.$view.hide();
        }
    }), d = {
        init: function(e) {
            return o = new s(e);
        },
        show: function(e) {
            o && o.render(e);
        },
        hide: function() {
            o && o.hide();
        },
        Errorline: s
    };
    return d;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 722:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(10), __webpack_require__(0), __webpack_require__(65), __webpack_require__(21), __webpack_require__(28), __webpack_require__(42), __webpack_require__(302), __webpack_require__(144), __webpack_require__(899), __webpack_require__(901), __webpack_require__(1030) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, e, o, i, n, r, s, d, a, l, c) {
    "use strict";
    var f = {
        mustache: c,
        templateData: function() {
            var t = this._super();
            return t.classes = [ "profile-dropdown", "project-dropdown-collection" ], t;
        },
        position: function(t) {
            this._super(t, {
                collision: "none"
            });
        },
        rendered: function() {
            var e = this.$view.find(".js-project-dropdown-collection-inner");
            this._super.apply(this, arguments), this.collection = s.init(e, l), this.collection.render(t.drafts), 
            o.init(e);
        },
        addProject: function(t) {
            return this.collection.render([ t ]).prependTo(this.collection.$parent), this;
        },
        removeProject: function(t) {
            this.$view.find(".js-project-cover[data-id=" + t + "]").remove();
        }
    };
    return i.extend({
        _draftsButton: null,
        init: function() {
            this._super.apply(this, arguments), d.on("draft-add", this.addProject.bind(this)), 
            d.on("draft-remove", this.removeProject.bind(this));
        },
        addProject: function(t, e) {
            1 === e && this._draftsButton.$view.removeClass("hide"), this._draftsButton.render(e), 
            this.toggle(), this._view.addProject(t);
        },
        removeProject: function(t, e) {
            this._view.removeProject(t), 0 === e ? this._draftsButton.$view.addClass("hide") : this._view.toggle(), 
            this._draftsButton.render(e);
        }
    }, {
        VIEW_CLASS: {
            phone: n.extend(f),
            tablet: r.extend(f).extend({
                attachment: ".js-profile-nav"
            }),
            desktop: r.extend(f).extend({
                attachment: ".js-profile-header-actions"
            })
        },
        init: function(e) {
            var o = new this();
            return o.setContext(e), o._draftsButton = new a(null, e), o._draftsButton.rendered(), 
            t.show_drafts && o.toggle(), o;
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 73:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"form/_textInner": __webpack_require__(86).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"");if(!t.s(t.f("unstyled",c,p,1),c,p,1,0,0,"")){t.b("form-item form-item-text");};t.b(" be-placeholder");if(t.s(t.f("containerClasses",c,p,1),c,p,0,98,104,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" ");t.b(t.v(t.d(".",c,p,0)));});c.pop();}t.b("\" id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("-container\">");t.b("\n" + i);t.b(t.rp("<form/_textInner0",c,p,"  "));t.b("</div>");t.b("\n");return t.fl(); },partials: {"<form/_textInner0":{name:"form/_textInner", partials: {}, subs: {  }}}, subs: {  }}, "<div class=\"{{^unstyled}}form-item form-item-text{{/unstyled}} be-placeholder{{#containerClasses}} {{.}}{{/containerClasses}}\" id=\"{{id}}-container\">\n  {{>form/_textInner}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 732:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(138), __webpack_require__(142), __webpack_require__(482), __webpack_require__(85), __webpack_require__(114) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, e, n, i, a) {
    "use strict";
    return {
        init: function(t) {
            var a = "user", s = i.id();
            this._$context = t, n.init(this._$context, a, s), e.init(this._$context), this.talent();
        },
        talent: function() {
            var e = this._$context.find(".js-add-talent");
            e.length && (this.talent = new t(e.data("id")), this.talent.setContext(e), this.talent.on("update", function(t) {
                this._$context.find(".js-added-talent-searches").html(a({
                    searches_added_to: t.join(", ")
                }));
            }.bind(this)));
        }
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 733:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1026), __webpack_require__(1027), __webpack_require__(1025), __webpack_require__(509), __webpack_require__(1028), __webpack_require__(510), __webpack_require__(1029) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, t, l, o, p, r, s) {
    "use strict";
    var n = {
        projects: r,
        followers: o,
        following: p,
        team_members: s,
        collections: e,
        collections_following: t,
        appreciated: l
    };
    return function(e) {
        return n[e];
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 734:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(912), __webpack_require__(896), __webpack_require__(897), __webpack_require__(898), __webpack_require__(478) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, o, i, l, r) {
    "use strict";
    var t = {
        projects: e,
        followers: r,
        following: r,
        team_members: r,
        collections: i,
        collections_following: l,
        appreciated: o
    };
    return function(e) {
        return t[e];
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 74:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(30), __webpack_require__(32), __webpack_require__(22), __webpack_require__(13), __webpack_require__(75), __webpack_require__(35), __webpack_require__(2) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, e, i, n, o, s, l, r) {
    "use strict";
    var u = e.extend({
        init: function(t, e, n) {
            this.views = [], this.type = n || "user", this._model = new i(t, {
                blocking: !1,
                following: e || !1
            }), this.listenTo(this._model, "all", this.trigger);
        },
        _initView: function(t) {
            var e = new s(t, this._model);
            return e._controller = this, e;
        },
        add: function(t) {
            if (t.data("befollow")) return this;
            var e = this._initView(t);
            return t.data("befollow", e), this.views.push(e), this;
        },
        setFollowing: function(t) {
            this._model.set("following", t);
        },
        follow: function(t) {
            function e() {
                n.set("blocking", !1);
            }
            if (!this._model.get("blocking")) {
                var i, n = this._model, o = this._model.get("following");
                return this._model.set("blocking", !0), i = this.constructor.send(this.type, this.id, !o, t).then(function(t) {
                    return n.set("following", !o), t.following = !o, t;
                }, function(t) {
                    var e;
                    429 === t.status && (t.responseJSON && t.responseJSON.messages && (e = t.responseJSON.messages.pop().message), 
                    s.rateLimitPopup(e));
                }), this.trigger("request", i), i.then(e, e), i;
            }
        },
        destroy: function() {
            this.views.forEach(function(t) {
                t.destroy();
            }), this.views = [], this._model.destroy(), this._model = null;
        }
    }, {
        sendBackfill: function(t, e) {
            return this.send(t, e, !0, {
                backfill: "instant"
            });
        },
        send: function(t, e, i, n) {
            return r({
                url: "/relations/" + t + "/" + e + l.getLocation("search"),
                type: i ? "POST" : "DELETE",
                data: n
            }).then(function(n) {
                return o.info("follow_click_tracker", i ? "Followed" : "Unfollowed", {
                    followee: e,
                    type: t
                }), n;
            });
        }
    }).mixin(n);
    return u;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 75:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(24), __webpack_require__(5), __webpack_require__(38) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(i, o, l, t) {
    "use strict";
    var e = o.extend({
        init: function(i, o) {
            this.$view = i, this._model = o, this.rendered();
        },
        destroy: function() {
            this._model.off(null, null, this);
        },
        rendered: function() {
            var o = this;
            this._model.on("following", function(o) {
                this.$view.toggleClass("following", o), this.$view.data("following", o), o && this.$view.addClass("following-hold").one("mouseleave", function() {
                    i(this).removeClass("following-hold");
                });
            }, this), this.$view.on("click", function(l) {
                l.stopPropagation();
                var t = i(this).data(), e = {
                    backfill: t.backfill
                };
                o._controller.follow(e);
            });
        }
    }, {
        rateLimitPopup: function(i) {
            var o = i ? i + "<br /><br />" : "";
            t({
                title: l.translate("following_limit", "Following Limit"),
                html: o + 'Please read about our <a href="https://help.behance.net/entries/48445480-Following-limits-on-Behance">following limits</a>.',
                buttons: []
            });
        }
    });
    return e;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_follow/_link": __webpack_require__(130).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(!t.s(t.f("is_profile_owner",c,p,1),c,p,1,0,0,"")){t.b(t.rp("<lib/_follow/_link0",c,p,""));};return t.fl(); },partials: {"<lib/_follow/_link0":{name:"lib/_follow/_link", partials: {}, subs: { "classes": function(c,p,t,i) {t.b("profile-list-follow-link");},"type": function(c,p,t,i) {t.b("user");} }}}, subs: {  }}, "{{^is_profile_owner}}\n  {{<lib/_follow/_link}}\n    {{$classes}}profile-list-follow-link{{/classes}}\n    {{$type}}user{{/type}}\n  {{/lib/_follow/_link}}\n{{/is_profile_owner}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 77:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(t.s(t.d("tools_by_synonym.0",c,p,1),c,p,0,102,140,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<div class=\"project-tools-image-wrap\">");});c.pop();}t.b("\n");t.b("\n" + i);if(t.s(t.f("tools_by_synonym",c,p,1),c,p,0,186,1186,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <div class=\"tooltipi-container\">");t.b("\n" + i);t.b("    <a title=\"");t.b(t.v(t.f("title",c,p,0)));t.b("\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\"><img class=\"project-tools-image\" src=\"");t.b(t.v(t.f("icon_url",c,p,0)));t.b("\"></a>");t.b("\n" + i);t.b("    <div class=\"tooltipi tooltipi-white\">");t.b("\n" + i);t.b("      <p class=\"tool-title\">");t.b(t.v(t.f("title",c,p,0)));t.b("</p>");t.b("\n" + i);t.b("      <p><a href=\"");t.b(t.v(t.f("gallery_url",c,p,0)));t.b("\" data-search-term=\"");t.b(t.v(t.f("search_term",c,p,0)));t.b("\">");if(t.s(t.f("translate",c,p,1),c,p,0,487,520,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_view_gallery|View Gallery");});c.pop();}t.b(" <span class=\"rarr\">&rarr;</span></a></p>");t.b("\n" + i);t.b("      <p>");t.b("\n" + i);t.b("        <a href=\"");t.b(t.v(t.f("download_url",c,p,0)));t.b("\"");if(t.s(t.f("authenticated",c,p,1),c,p,0,638,755,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" class=\"js-adobeid-signup\" data-adobeid-signup-destination=\"");t.b(t.v(t.f("download_url",c,p,0)));t.b("\" data-adobeid-signup-enable-login=\"true\"");});c.pop();}t.b(" data-signup-from=\"Tools_Used_Download_");t.b(t.v(t.f("title",c,p,0)));t.b("\">");t.b("\n" + i);if(t.s(t.f("is_web_app",c,p,1),c,p,0,849,965,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            ");if(t.s(t.f("translate",c,p,1),c,p,0,876,907,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_get_started|Get Started");});c.pop();}t.b(" <span class=\"rarr\">&rarr;</span>");t.b("\n" + i);});c.pop();}if(!t.s(t.f("is_web_app",c,p,1),c,p,1,0,0,"")){t.b("            ");if(t.s(t.f("translate",c,p,1),c,p,0,1033,1068,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_download_trial|Download Now");});c.pop();}t.b(" <span class=\"rarr\">&rarr;</span>");t.b("\n" + i);};t.b("        </a>");t.b("\n" + i);t.b("      </p>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);});c.pop();}if(t.s(t.d("tools_by_synonym.0",c,p,1),c,p,0,1231,1237,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("</div>");});c.pop();}t.b("\n" + i);if(t.s(t.f("has_tools_without_synonym",c,p,1),c,p,0,1291,1462,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <div class=\"project-tools-text-wrap\">");t.b("\n" + i);if(t.s(t.f("tools_without_synonym",c,p,1),c,p,0,1362,1426,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <a href=\"");t.b(t.v(t.d("URLS.search",c,p,0)));t.b("?tools=");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b(t.v(t.f("title",c,p,0)));t.b("</a>");t.b("\n" + i);});c.pop();}t.b("  </div>");t.b("\n" + i);});c.pop();}return t.fl(); },partials: {}, subs: {  }}, "{{!Loop through tools twice, once for synonym (image) tools, once for others}}\n{{#tools_by_synonym.0}}<div class=\"project-tools-image-wrap\">{{/tools_by_synonym.0}}\n\n{{#tools_by_synonym}}\n  <div class=\"tooltipi-container\">\n    <a title=\"{{title}}\" href=\"{{url}}\"><img class=\"project-tools-image\" src=\"{{icon_url}}\"></a>\n    <div class=\"tooltipi tooltipi-white\">\n      <p class=\"tool-title\">{{title}}</p>\n      <p><a href=\"{{gallery_url}}\" data-search-term=\"{{search_term}}\">{{#translate}}project_view_gallery|View Gallery{{/translate}} <span class=\"rarr\">&rarr;</span></a></p>\n      <p>\n        <a href=\"{{download_url}}\"{{#authenticated}} class=\"js-adobeid-signup\" data-adobeid-signup-destination=\"{{download_url}}\" data-adobeid-signup-enable-login=\"true\"{{/authenticated}} data-signup-from=\"Tools_Used_Download_{{title}}\">\n          {{#is_web_app}}\n            {{#translate}}project_get_started|Get Started{{/translate}} <span class=\"rarr\">&rarr;</span>\n          {{/is_web_app}}\n          {{^is_web_app}}\n            {{#translate}}project_download_trial|Download Now{{/translate}} <span class=\"rarr\">&rarr;</span>\n          {{/is_web_app}}\n        </a>\n      </p>\n    </div>\n  </div>\n{{/tools_by_synonym}}\n{{#tools_by_synonym.0}}</div>{{/tools_by_synonym.0}}\n{{#has_tools_without_synonym}}\n  <div class=\"project-tools-text-wrap\">\n    {{#tools_without_synonym}}\n      <a href=\"{{URLS.search}}?tools={{id}}\">{{title}}</a>\n    {{/tools_without_synonym}}\n  </div>\n{{/has_tools_without_synonym}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(9) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e) {
    e.fn.changeInput = function(t, a, d) {
        var c = "object" == typeof d && "undefined" != typeof d.extra_event_args ? d.extra_event_args : [];
        return "undefined" != typeof t && e(this).each(function(d) {
            var s, i, n, l, o, r = e(this);
            if (r.is("input, button, textarea, select, optgroup, option") && (s = r.val(), "undefined" == typeof a || "val" !== t && "value" !== t || (r.data("uiSelectmenuold") || r.data("selectmenu") ? r.selectmenuold("value", a) : (r.val(a), 
            r.triggerHandler("change", c)))), r.is("input:not([type=hidden]), button, textarea, select, optgroup, option, .form-button")) {
                switch (i = this.disabled || r.attr("disabled"), o = !1, t) {
                  case "disable":
                    o = !0;
                    break;

                  case "enable":
                    o = !1;
                    break;

                  case "toggleDisabled":
                    o = "undefined" != typeof a ? Boolean(a) : !this.disabled;
                }
                o != i && (n = r.is("[type=submit], [type=button], button, .form-button, .form-submit") ? "disabled form-button-disabled" : "disabled", 
                o ? (r.addClass(n).trigger("disable", c).attr("disabled", !0), r.is("select") && r.next().addClass(n), 
                (r.data("uiSelectmenuold") || r.data("selectmenu")) && r.selectmenuold("disable")) : (r.removeClass(n).attr("disabled", !1).trigger("enable", c), 
                r.is("select") && r.next().removeClass(n), (r.data("uiSelectmenuold") || r.data("selectmenu")) && r.selectmenuold("enable")));
            }
            if (r.is("[type=checkbox], [type=radio]")) {
                switch (l = this.checked, t) {
                  case "check":
                    this.checked = !0;
                    break;

                  case "uncheck":
                    this.checked = !1;
                    break;

                  case "toggleChecked":
                    "undefined" != typeof a ? this.checked = Boolean(a) : this.checked = !this.checked;
                }
                this.checked != l && (r.triggerHandler("click", c), this.checked ? r.addClass("checked").attr("checked", !0).trigger("check", c) : r.removeClass("checked").attr("checked", !1).trigger("uncheck", c));
            }
        }), this;
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 80:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(3), __webpack_require__(13), __webpack_require__(81) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, n, i) {
    "use strict";
    return {
        mustache: i,
        _signUp: function() {
            n.info("onboarding", "Sign up dialog click", {
                action: this._controller.data.action,
                entity: this._controller.data.entity
            });
        },
        events: {
            click: {
                ".js-adobeid-signup": "_signUp"
            }
        },
        templateData: function() {
            var n = t({
                classes: [ "popup--onboarding" ],
                displayAction: {}
            }, this._super());
            return n.displayAction[n.action] = !0, n;
        }
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 81:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"onboarding-dialog__content\">");t.b("\n" + i);if(t.s(t.f("img1x",c,p,1),c,p,0,53,224,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"onboarding-dialog__image\">");t.b("\n" + i);t.b("      <img width=\"");t.b(t.v(t.f("imgWidth",c,p,0)));t.b("\" height=\"");t.b(t.v(t.f("imgHeight",c,p,0)));t.b("\" src=\"");t.b(t.v(t.f("img1x",c,p,0)));t.b("\" ");if(t.s(t.f("img2x",c,p,1),c,p,0,178,199,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("srcset=\"");t.b(t.v(t.f("img2x",c,p,0)));t.b(" 2x\"");});c.pop();}t.b(">");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);});c.pop();}t.b("  <div class=\"onboarding-dialog__copy\">");t.b("\n" + i);if(t.s(t.d("displayAction.collection",c,p,1),c,p,0,308,421,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      ");if(t.s(t.f("translate",c,p,1),c,p,0,329,402,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("signup_dialog_collection|Join Behance to add this project to a collection");});c.pop();}t.b("\n" + i);});c.pop();}if(t.s(t.d("displayAction.follow",c,p,1),c,p,0,480,573,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      ");if(t.s(t.f("translate",c,p,1),c,p,0,501,554,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("signup_dialog_follow|Join Behance to follow ");t.b(t.v(t.f("title",c,p,0)));});c.pop();}t.b("\n" + i);});c.pop();}if(t.s(t.d("displayAction.message",c,p,1),c,p,0,629,724,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      ");if(t.s(t.f("translate",c,p,1),c,p,0,650,705,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("signup_dialog_message|Join Behance to message ");t.b(t.v(t.f("title",c,p,0)));});c.pop();}t.b("\n" + i);});c.pop();}if(t.s(t.d("displayAction.comment",c,p,1),c,p,0,781,882,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      ");if(t.s(t.f("translate",c,p,1),c,p,0,802,863,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("signup_dialog_comment|Join Behance to comment on this project");});c.pop();}t.b("\n" + i);});c.pop();}t.b("  </div>");t.b("\n" + i);t.b("  <button class=\"form-button form-button-default form-button-xlarge js-adobeid-signup\" data-adobeid-signup-destination=\"");t.b(t.v(t.f("destination",c,p,0)));t.b("\" data-signup-from=\"Dialog_JoinBehance\">");if(t.s(t.f("translate",c,p,1),c,p,0,1107,1138,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("signup_dialog_join|Join Behance");});c.pop();}t.b("</button>");t.b("\n" + i);t.b("  <div class=\"onboarding-dialog__link\">");t.b("\n" + i);t.b("    ");if(t.s(t.f("translate",c,p,1),c,p,0,1220,1306,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("signup_dialog_signin|Already a member? <a class=\"js-adobeid-signin\">Sign in &rarr;</a>");});c.pop();}t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"onboarding-dialog__content\">\n  {{#img1x}}\n    <div class=\"onboarding-dialog__image\">\n      <img width=\"{{imgWidth}}\" height=\"{{imgHeight}}\" src=\"{{img1x}}\" {{#img2x}}srcset=\"{{img2x}} 2x\"{{/img2x}}>\n    </div>\n  {{/img1x}}\n  <div class=\"onboarding-dialog__copy\">\n    {{#displayAction.collection}}\n      {{#translate}}signup_dialog_collection|Join Behance to add this project to a collection{{/translate}}\n    {{/displayAction.collection}}\n    {{#displayAction.follow}}\n      {{#translate}}signup_dialog_follow|Join Behance to follow {{title}}{{/translate}}\n    {{/displayAction.follow}}\n    {{#displayAction.message}}\n      {{#translate}}signup_dialog_message|Join Behance to message {{title}}{{/translate}}\n    {{/displayAction.message}}\n    {{#displayAction.comment}}\n      {{#translate}}signup_dialog_comment|Join Behance to comment on this project{{/translate}}\n    {{/displayAction.comment}}\n  </div>\n  <button class=\"form-button form-button-default form-button-xlarge js-adobeid-signup\" data-adobeid-signup-destination=\"{{destination}}\" data-signup-from=\"Dialog_JoinBehance\">{{#translate}}signup_dialog_join|Join Behance{{/translate}}</button>\n  <div class=\"onboarding-dialog__link\">\n    {{#translate}}signup_dialog_signin|Already a member? <a class=\"js-adobeid-signin\">Sign in &rarr;</a>{{/translate}}\n  </div>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 83:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"error-bar\">");t.b(t.t(t.f("message",c,p,0)));t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"error-bar\">{{{message}}}</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 84:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_savingSpinner": __webpack_require__(52).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"form-item form-item-textarea");if(t.s(t.f("containerClasses",c,p,1),c,p,0,61,67,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" ");t.b(t.v(t.d(".",c,p,0)));});c.pop();}t.b("\">");t.b("\n" + i);t.b("  ");if(t.s(t.f("label",c,p,1),c,p,0,103,204,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<label for=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b(t.t(t.f("label",c,p,0)));if(t.s(t.f("saving_spinner",c,p,1),c,p,0,153,177,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_savingSpinner0",c,p,""));});c.pop();}t.b("</label>");});c.pop();}t.b("\n" + i);t.b("  <textarea id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" name=\"");t.b(t.v(t.f("name",c,p,0)));if(!t.s(t.f("name",c,p,1),c,p,1,0,0,"")){t.b(t.v(t.f("id",c,p,0)));};t.b("\" class=\"form-textarea");if(t.s(t.f("classes",c,p,1),c,p,0,311,317,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" ");t.b(t.v(t.d(".",c,p,0)));});c.pop();}t.b("\"");t.b("\n" + i);t.b("    ");if(t.s(t.f("maxlength",c,p,1),c,p,0,349,375,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" maxlength=\"");t.b(t.v(t.f("maxlength",c,p,0)));t.b("\"");});c.pop();}t.b("\n" + i);t.b("    ");if(t.s(t.f("placeholder",c,p,1),c,p,0,410,440,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" placeholder=\"");t.b(t.v(t.f("placeholder",c,p,0)));t.b("\"");});c.pop();}t.b("\n" + i);t.b("    ");if(t.s(t.f("autocomplete",c,p,1),c,p,0,478,510,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" autocomplete=\"");t.b(t.v(t.f("autocomplete",c,p,0)));t.b("\"");});c.pop();}t.b("\n" + i);t.b("    data-validate=\"");t.b(t.v(t.f("validate",c,p,0)));t.b("\">");t.b(t.v(t.f("value",c,p,0)));t.b("</textarea>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<lib/_savingSpinner0":{name:"lib/_savingSpinner", partials: {}, subs: {  }}}, subs: {  }}, "<div class=\"form-item form-item-textarea{{#containerClasses}} {{.}}{{/containerClasses}}\">\n  {{#label}}<label for=\"{{id}}\">{{{label}}}{{#saving_spinner}}{{> lib/_savingSpinner}}{{/saving_spinner}}</label>{{/label}}\n  <textarea id=\"{{id}}\" name=\"{{name}}{{^name}}{{id}}{{/name}}\" class=\"form-textarea{{#classes}} {{.}}{{/classes}}\"\n    {{#maxlength}} maxlength=\"{{maxlength}}\"{{/maxlength}}\n    {{#placeholder}} placeholder=\"{{placeholder}}\"{{/placeholder}}\n    {{#autocomplete}} autocomplete=\"{{autocomplete}}\"{{/autocomplete}}\n    data-validate=\"{{validate}}\">{{value}}</textarea>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(32), __webpack_require__(10) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, i) {
    "use strict";
    return new e(i.profile.id, i.profile || {});
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 86:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_savingSpinner": __webpack_require__(52).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("  ");if(t.s(t.f("label",c,p,1),c,p,0,12,113,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<label for=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b(t.t(t.f("label",c,p,0)));if(t.s(t.f("saving_spinner",c,p,1),c,p,0,62,86,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_savingSpinner0",c,p,""));});c.pop();}t.b("</label>");});c.pop();}t.b("\n" + i);t.b("  <input name=\"");t.b(t.v(t.f("name",c,p,0)));if(!t.s(t.f("name",c,p,1),c,p,1,0,0,"")){t.b(t.v(t.f("id",c,p,0)));};t.b("\" type=\"");if(t.s(t.f("type",c,p,1),c,p,0,188,196,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.v(t.f("type",c,p,0)));});c.pop();}if(!t.s(t.f("type",c,p,1),c,p,1,0,0,"")){t.b("text");};t.b("\" class=\"");if(!t.s(t.f("unstyled",c,p,1),c,p,1,0,0,"")){t.b("form-text");};if(t.s(t.f("classes",c,p,1),c,p,0,283,289,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" ");t.b(t.v(t.d(".",c,p,0)));});c.pop();}t.b(" validate[");t.b(t.v(t.f("validate",c,p,0)));t.b("]\" id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\"");t.b("\n" + i);t.b("  ");if(t.s(t.f("disabled",c,p,1),c,p,0,353,373,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" disabled=\"disabled\"");});c.pop();}t.b("\n" + i);t.b("  ");if(t.s(t.f("placeholder",c,p,1),c,p,0,405,437,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" placeholder=\"");t.b(t.t(t.f("placeholder",c,p,0)));t.b("\"");});c.pop();}t.b("\n" + i);t.b("  ");if(t.s(t.f("autocomplete",c,p,1),c,p,0,473,505,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" autocomplete=\"");t.b(t.v(t.f("autocomplete",c,p,0)));t.b("\"");});c.pop();}t.b("\n" + i);t.b("  ");if(t.s(t.f("autocapitalize",c,p,1),c,p,0,544,580,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" autocapitalize=\"");t.b(t.v(t.f("autocapitalize",c,p,0)));t.b("\"");});c.pop();}t.b("\n" + i);t.b("  ");if(t.s(t.f("autocorrect",c,p,1),c,p,0,618,648,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" autocorrect=\"");t.b(t.v(t.f("autocorrect",c,p,0)));t.b("\"");});c.pop();}t.b("\n" + i);t.b("  ");if(t.s(t.f("value",c,p,1),c,p,0,677,695,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" value=\"");t.b(t.v(t.f("value",c,p,0)));t.b("\"");});c.pop();}t.b("\n" + i);t.b("  ");if(t.s(t.f("maxlength",c,p,1),c,p,0,722,748,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" maxlength=\"");t.b(t.v(t.f("maxlength",c,p,0)));t.b("\"");});c.pop();}t.b("\n" + i);t.b("  data-validate=\"");t.b(t.v(t.f("validate",c,p,0)));t.b("\">");t.b("\n");return t.fl(); },partials: {"<lib/_savingSpinner0":{name:"lib/_savingSpinner", partials: {}, subs: {  }}}, subs: {  }}, "  {{#label}}<label for=\"{{id}}\">{{{label}}}{{#saving_spinner}}{{> lib/_savingSpinner}}{{/saving_spinner}}</label>{{/label}}\n  <input name=\"{{name}}{{^name}}{{id}}{{/name}}\" type=\"{{#type}}{{type}}{{/type}}{{^type}}text{{/type}}\" class=\"{{^unstyled}}form-text{{/unstyled}}{{#classes}} {{.}}{{/classes}} validate[{{validate}}]\" id=\"{{id}}\"\n  {{#disabled}} disabled=\"disabled\"{{/disabled}}\n  {{#placeholder}} placeholder=\"{{{placeholder}}}\"{{/placeholder}}\n  {{#autocomplete}} autocomplete=\"{{autocomplete}}\"{{/autocomplete}}\n  {{#autocapitalize}} autocapitalize=\"{{autocapitalize}}\"{{/autocapitalize}}\n  {{#autocorrect}} autocorrect=\"{{autocorrect}}\"{{/autocorrect}}\n  {{#value}} value=\"{{value}}\"{{/value}}\n  {{#maxlength}} maxlength=\"{{maxlength}}\"{{/maxlength}}\n  data-validate=\"{{validate}}\">\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 88:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"_icons/_social/_facebook": __webpack_require__(199).template,"_icons/_social/_twitter": __webpack_require__(202).template,"_icons/_social/_pinterest": __webpack_require__(201).template,"_icons/_social/_linkedin": __webpack_require__(200).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"social-sharing__icons js-social-sharing\"");t.b("\n" + i);t.b("  ");if(t.s(t.f("is_owner",c,p,1),c,p,0,68,188,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("data-text='");if(t.s(t.f("translate",c,p,1),c,p,0,93,173,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_social_sharing_my_text|Check out my @Behance project: \"");t.b(t.v(t.f("name",c,p,0)));t.b("\" ");t.b(t.v(t.f("url",c,p,0)));});c.pop();}t.b("'");});c.pop();}t.b("\n" + i);t.b("  ");if(!t.s(t.f("is_owner",c,p,1),c,p,1,0,0,"")){t.b("data-text='");if(t.s(t.f("translate",c,p,1),c,p,0,242,321,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_social_sharing_text|Check out this @Behance project: \"");t.b(t.v(t.f("name",c,p,0)));t.b("\" ");t.b(t.v(t.f("url",c,p,0)));});c.pop();}t.b("'");};t.b("\n" + i);t.b("  data-image='");t.b(t.v(t.d("covers.original",c,p,0)));t.b("'");t.b("\n" + i);t.b("  data-url=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\"");t.b("\n" + i);t.b("  data-from=\"");t.sub("from",c,p,i);t.b("\">");t.b("\n" + i);t.b("  <div class=\"js-viral-share-buttons social-sharing__icon social-sharing__icon--facebook\" data-service=\"facebook\">");t.b(t.rp("<_icons/_social/_facebook0",c,p,""));t.b("</div>");t.b("\n" + i);t.b("  <div class=\"js-viral-share-buttons social-sharing__icon social-sharing__icon--twitter\" data-service=\"twitter\">");t.b(t.rp("<_icons/_social/_twitter1",c,p,""));t.b("</div>");t.b("\n" + i);t.b("  <div class=\"js-viral-share-buttons social-sharing__icon social-sharing__icon--pinterest\" data-service=\"pinterest\">");t.b(t.rp("<_icons/_social/_pinterest2",c,p,""));t.b("</div>");t.b("\n" + i);t.b("  <div class=\"js-viral-share-buttons social-sharing__icon social-sharing__icon--linkedin\" data-service=\"linkedin\">");t.b(t.rp("<_icons/_social/_linkedin3",c,p,""));t.b("</div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<_icons/_social/_facebook0":{name:"_icons/_social/_facebook", partials: {}, subs: {  }},"<_icons/_social/_twitter1":{name:"_icons/_social/_twitter", partials: {}, subs: {  }},"<_icons/_social/_pinterest2":{name:"_icons/_social/_pinterest", partials: {}, subs: {  }},"<_icons/_social/_linkedin3":{name:"_icons/_social/_linkedin", partials: {}, subs: {  }}}, subs: { "from": function(c,p,t,i) {} }}, "<div class=\"social-sharing__icons js-social-sharing\"\n  {{#is_owner}}data-text='{{#translate}}project_social_sharing_my_text|Check out my @Behance project: \"{{name}}\" {{url}}{{/translate}}'{{/is_owner}}\n  {{^is_owner}}data-text='{{#translate}}project_social_sharing_text|Check out this @Behance project: \"{{name}}\" {{url}}{{/translate}}'{{/is_owner}}\n  data-image='{{covers.original}}'\n  data-url=\"{{url}}\"\n  data-from=\"{{$from}}{{/from}}\">\n  <div class=\"js-viral-share-buttons social-sharing__icon social-sharing__icon--facebook\" data-service=\"facebook\">{{>_icons/_social/_facebook}}</div>\n  <div class=\"js-viral-share-buttons social-sharing__icon social-sharing__icon--twitter\" data-service=\"twitter\">{{>_icons/_social/_twitter}}</div>\n  <div class=\"js-viral-share-buttons social-sharing__icon social-sharing__icon--pinterest\" data-service=\"pinterest\">{{>_icons/_social/_pinterest}}</div>\n  <div class=\"js-viral-share-buttons social-sharing__icon social-sharing__icon--linkedin\" data-service=\"linkedin\">{{>_icons/_social/_linkedin}}</div>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 89:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<span class=\"js-edit-icon content-edit edit-icon beicons-pre beicons-pre-edit hide-tablet hide-phone\"></span>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<span class=\"js-edit-icon content-edit edit-icon beicons-pre beicons-pre-edit hide-tablet hide-phone\"></span>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 896:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(292), __webpack_require__(390), __webpack_require__(18), __webpack_require__(147) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, t, i, n, p) {
    "use strict";
    return p.init(), t.extend({
        rendered: function() {
            this.fatclick(), this.picturefill();
        },
        template: n(i, e)
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 897:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(18), __webpack_require__(41), __webpack_require__(5), __webpack_require__(481), __webpack_require__(144), __webpack_require__(314), __webpack_require__(85), __webpack_require__(292), __webpack_require__(424), __webpack_require__(425) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, t, i, n, l, o, c, r, a, s, f) {
    "use strict";
    var u = function(t, i) {
        e(".js-collection-cover[data-id=" + i + "]").remove(), t.has_more || this.setEmpty(c);
    }, p = function() {
        var t = this;
        this.$parent.on("click", ".js-collection-delete", function() {
            var i = e(this).data("id");
            return l.delete(i).then(function(e) {
                u.call(t, e, i);
            }), !1;
        });
    }, d = function() {
        var t = this;
        this.$parent.on("click", ".js-collection-leave", function() {
            var i = e(this).data("id");
            return l.leave(i).then(function(e) {
                u.call(t, e, i);
            }), !1;
        });
    }, h = function() {
        this.$parent.on("click", ".js-collection-rename", function() {
            var t = e(this), i = t.data("id"), n = t.closest(".js-collection-cover"), o = n.find(".js-collection-title"), c = o.text();
            return l.rename(i, c).then(function(e) {
                o.text(e);
            }), !1;
        });
    }, v = function() {
        this.$parent.on("click", ".js-collection-privacy", function() {
            var t = e(this), i = t.data("id"), c = t.closest(".js-collection-cover");
            return l.togglePrivacy(i).then(function(e) {
                var i;
                e.collection.public ? (i = n.translate("profile_collection_make_private", "Make Private"), 
                c.find(".js-lock").remove()) : (i = n.translate("profile_collection_make_public", "Make Public"), 
                c.find(".js-collection-title").before(f())), t.text(i);
            }, function() {
                o.trigger("error", "Unable to change privacy. Please refresh and try again");
            }), !1;
        });
    }, b = function() {
        this.$parent.on("click", ".js-collection-owners", function() {
            var t = e(this).data("id");
            return l.addOwners(t), !1;
        });
    };
    return a.extend({
        rendered: function() {
            this.picturefill(), i.init(this.$parent);
        },
        bind: function() {
            r.get("is_profile_owner") && (p.call(this), d.call(this), h.call(this), v.call(this), 
            b.call(this));
        },
        unbind: function() {
            r.get("is_profile_owner") && this.$parent.off("click", ".js-collection-owners").off("click", ".js-collection-rename").off("click", ".js-collection-privacy").off("click", ".js-collection-delete").off("click", ".js-collection-leave");
        },
        template: t(s, e)
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 898:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(292), __webpack_require__(424), __webpack_require__(41), __webpack_require__(18) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, t, i, n, l) {
    "use strict";
    return t.extend({
        rendered: function() {
            this.picturefill(), n.init(this.$parent);
        },
        template: l(i, e)
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 899:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(292) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e) {
    "use strict";
    return e.extend({
        render: function(e) {
            this.$view.find(".js-drafts-count").text(e);
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(6) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e) {
    function t(t) {
        if (t.length) for (var i, s, n = e(t[0]); n.length && n[0] !== document; ) {
            if (i = n.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), 
            !isNaN(s) && 0 !== s)) return s;
            n = n.parent();
        }
        return 0;
    }
    e.widget("ui.selectmenuold", {
        options: {
            transferClasses: !0,
            appendTo: "body",
            typeAhead: 1e3,
            style: "dropdown",
            positionOptions: {
                my: "left top",
                at: "left bottom",
                offset: null
            },
            width: null,
            menuWidth: null,
            handleWidth: 26,
            maxHeight: null,
            icons: null,
            format: null,
            escapeHtml: !1,
            bgImage: function() {}
        },
        _create: function() {
            var t = this, i = this.options, s = (this.element.attr("id") || "ui-selectmenu-" + Math.random().toString(16).slice(2, 10)).replace(/(:|\.)/g, "");
            this.ids = [ s, s + "-button", s + "-menu" ], this._safemouseup = !0, this.isOpen = !1, 
            this.newelement = e("<a />", {
                class: "ui-selectmenu ui-widget ui-state-default ui-corner-all",
                id: this.ids[1],
                role: "button",
                href: "#nogo",
                tabindex: this.element.attr("disabled") ? 1 : 0,
                "aria-haspopup": !0,
                "aria-owns": this.ids[2]
            }), this.newelement.insertAfter(this.element);
            var n = this.element.attr("tabindex");
            n && this.newelement.attr("tabindex", n), this.newelement.data("selectelement", this.element), 
            this.selectmenuIcon = e('<span class="ui-selectmenu-icon ui-icon"></span>').prependTo(this.newelement), 
            this.newelement.prepend('<span class="ui-selectmenu-status" />'), this.element.bind({
                "click.selectmenu": function(e) {
                    t.newelement.focus(), e.preventDefault();
                }
            }), this.newelement.bind("mousedown.selectmenu", function(e) {
                return t._toggle(e, !0), "popup" == i.style && (t._safemouseup = !1, setTimeout(function() {
                    t._safemouseup = !0;
                }, 300)), !1;
            }).bind("click.selectmenu", function() {
                return !1;
            }).bind("keydown.selectmenu", function(i) {
                var s = !1;
                switch (i.keyCode) {
                  case e.ui.keyCode.ENTER:
                    s = !0;
                    break;

                  case e.ui.keyCode.SPACE:
                    t._toggle(i);
                    break;

                  case e.ui.keyCode.UP:
                    i.altKey ? t.open(i) : t._moveSelection(-1);
                    break;

                  case e.ui.keyCode.DOWN:
                    i.altKey ? t.open(i) : t._moveSelection(1);
                    break;

                  case e.ui.keyCode.LEFT:
                    t._moveSelection(-1);
                    break;

                  case e.ui.keyCode.RIGHT:
                    t._moveSelection(1);
                    break;

                  case e.ui.keyCode.TAB:
                    s = !0;
                    break;

                  case e.ui.keyCode.PAGE_UP:
                  case e.ui.keyCode.HOME:
                    t.index(0);
                    break;

                  case e.ui.keyCode.PAGE_DOWN:
                  case e.ui.keyCode.END:
                    t.index(t._optionLis.length);
                    break;

                  default:
                    s = !0;
                }
                return s;
            }).bind("keypress.selectmenu", function(e) {
                return e.which > 0 && t._typeAhead(e.which, "mouseup"), !0;
            }).bind("mouseover.selectmenu", function() {
                i.disabled || e(this).addClass("ui-selectmenu-hover ui-state-hover");
            }).bind("mouseout.selectmenu", function() {
                i.disabled || e(this).removeClass("ui-selectmenu-hover ui-state-hover");
            }).bind("focus.selectmenu", function() {
                i.disabled || e(this).addClass("ui-selectmenu-focus ui-state-focus");
            }).bind("blur.selectmenu", function() {
                i.disabled || e(this).removeClass("ui-selectmenu-focus ui-state-focus");
            }), e(document).bind("mousedown.selectmenu-" + this.ids[0], function(e) {
                t.isOpen && t.close(e);
            }), this.element.bind("click.selectmenu", function() {
                t._refreshValue();
            }).bind("focus.selectmenu", function() {
                t.newelement && t.newelement[0].focus();
            }), i.width || (i.width = this.element.outerWidth()), this.newelement.width(i.width), 
            this.element.hide(), this.list = e("<ul />", {
                class: "ui-selectmenu-menu ui-widget ui-widget-content",
                "aria-hidden": !0,
                role: "listbox",
                "aria-labelledby": this.ids[1],
                id: this.ids[2]
            }).appendTo(i.appendTo), this.list.bind("keydown.selectmenu", function(i) {
                var s = !1;
                switch (i.keyCode) {
                  case e.ui.keyCode.UP:
                    i.altKey ? t.close(i, !0) : t._moveFocus(-1);
                    break;

                  case e.ui.keyCode.DOWN:
                    i.altKey ? t.close(i, !0) : t._moveFocus(1);
                    break;

                  case e.ui.keyCode.LEFT:
                    t._moveFocus(-1);
                    break;

                  case e.ui.keyCode.RIGHT:
                    t._moveFocus(1);
                    break;

                  case e.ui.keyCode.HOME:
                    t._moveFocus(":first");
                    break;

                  case e.ui.keyCode.PAGE_UP:
                    t._scrollPage("up");
                    break;

                  case e.ui.keyCode.PAGE_DOWN:
                    t._scrollPage("down");
                    break;

                  case e.ui.keyCode.END:
                    t._moveFocus(":last");
                    break;

                  case e.ui.keyCode.ENTER:
                  case e.ui.keyCode.SPACE:
                    t.close(i, !0), e(i.target).parents("li:eq(0)").trigger("mouseup");
                    break;

                  case e.ui.keyCode.TAB:
                    s = !0, t.close(i, !0), e(i.target).parents("li:eq(0)").trigger("mouseup");
                    break;

                  case e.ui.keyCode.ESCAPE:
                    t.close(i, !0);
                    break;

                  default:
                    s = !0;
                }
                return s;
            }).bind("keypress.selectmenu", function(e) {
                return e.which > 0 && t._typeAhead(e.which, "focus"), !0;
            }), this.list.bind("mousedown.selectmenu mouseup.selectmenu", !1), e(window).bind("resize.selectmenu-" + this.ids[0], e.proxy(t.close, this)), 
            this.refreshPosition = e.proxy(t._refreshPosition, this);
        },
        _init: function() {
            var t = this, i = this.options, s = [];
            this.element.find("option").each(function() {
                var n = e(this);
                s.push({
                    value: n.attr("value"),
                    text: t._formatText(n.text(), n),
                    selected: n.prop("selected"),
                    disabled: n.attr("disabled"),
                    classes: n.attr("class"),
                    typeahead: n.attr("typeahead"),
                    parentOptGroup: n.parent("optgroup"),
                    bgImage: i.bgImage.call(n)
                });
            });
            var n = "popup" == t.options.style ? " ui-state-active" : "";
            if (this.list.html(""), s.length) for (var a = 0; a < s.length; a++) {
                var o = {
                    role: "presentation"
                };
                s[a].disabled && (o.class = this.namespace + "-state-disabled");
                var l = {
                    html: s[a].text || "&nbsp;",
                    href: "#nogo",
                    tabindex: -1,
                    role: "option",
                    "aria-selected": !1
                };
                s[a].disabled && (l["aria-disabled"] = s[a].disabled), s[a].typeahead && (l.typeahead = s[a].typeahead);
                var d = e("<a/>", l).bind("focus.selectmenu", function() {
                    e(this).parent().mouseover();
                }).bind("blur.selectmenu", function() {
                    e(this).parent().mouseout();
                }), u = e("<li/>", o).append(d).data("index", a).addClass(s[a].classes).data("optionClasses", s[a].classes || "").bind("mouseup.selectmenu", function(i) {
                    return !t._safemouseup || t._disabled(i.currentTarget) || t._disabled(e(i.currentTarget).parents("ul>li.ui-selectmenu-group ")) || (t.index(e(this).data("index")), 
                    t.select(i), t.close(i, !0)), !1;
                }).bind("click.selectmenu", function() {
                    return !1;
                }).bind("mouseover.selectmenu", function() {
                    e(this).hasClass(t.namespace + "-state-disabled") || e(this).parent("ul").parent("li").hasClass(t.namespace + "-state-disabled") || (t._selectedOptionLi().addClass(n), 
                    t._focusedOptionLi().removeClass("ui-selectmenu-item-focus ui-state-hover"), e(this).removeClass("ui-state-active").addClass("ui-selectmenu-item-focus ui-state-hover"));
                }).bind("mouseout.selectmenu", function() {
                    e(this).is(t._selectedOptionLi()) && e(this).addClass(n), e(this).removeClass("ui-selectmenu-item-focus ui-state-hover");
                });
                if (s[a].parentOptGroup.length) {
                    var r = "ui-selectmenu-group-" + this.element.find("optgroup").index(s[a].parentOptGroup);
                    this.list.find("li." + r).length ? this.list.find("li." + r + ":last ul").append(u) : e(' <li role="presentation" class="ui-selectmenu-group ' + r + (s[a].parentOptGroup.attr("disabled") ? " " + this.namespace + '-state-disabled" aria-disabled="true"' : '"') + '><span class="ui-selectmenu-group-label">' + s[a].parentOptGroup.attr("label") + "</span><ul></ul></li> ").appendTo(this.list).find("ul").append(u);
                } else u.appendTo(this.list);
                if (i.icons) for (var c in i.icons) if (u.is(i.icons[c].find)) {
                    u.data("optionClasses", s[a].classes + " ui-selectmenu-hasIcon").addClass("ui-selectmenu-hasIcon");
                    var h = i.icons[c].icon || "";
                    u.find("a:eq(0)").prepend('<span class="ui-selectmenu-item-icon ui-icon ' + h + '"></span>'), 
                    s[a].bgImage && u.find("span").css("background-image", s[a].bgImage);
                }
            } else e('<li role="presentation"><a href="#nogo" tabindex="-1" role="option"></a></li>').appendTo(this.list);
            var p = "dropdown" == i.style;
            if (this.newelement.toggleClass("ui-selectmenu-dropdown", p).toggleClass("ui-selectmenu-popup", !p), 
            this.list.toggleClass("ui-selectmenu-menu-dropdown ui-corner-bottom", p).toggleClass("ui-selectmenu-menu-popup ui-corner-all", !p).find("li:first").toggleClass("ui-corner-top", !p).end().find("li:last").addClass("ui-corner-bottom"), 
            this.selectmenuIcon.toggleClass("ui-icon-triangle-1-s", p).toggleClass("ui-icon-triangle-2-n-s", !p), 
            i.transferClasses) {
                var m = this.element.attr("class") || "";
                this.newelement.add(this.list).addClass(m);
            }
            this._computeWidth(), this.list.css("height", "auto");
            var f = this.list.height(), _ = e(window).height(), b = i.maxHeight ? Math.min(i.maxHeight, _) : _ / 3;
            f > b && this.list.height(b), this._optionLis = this.list.find("li:not(.ui-selectmenu-group)"), 
            this.element.attr("disabled") ? this.disable() : this.enable(), this._refreshValue(), 
            this._selectedOptionLi().addClass("ui-selectmenu-item-focus"), clearTimeout(this.refreshTimeout), 
            this.refreshTimeout = window.setTimeout(function() {
                t._refreshPosition();
            }, 200);
        },
        _computeWidth: function() {
            var e = this.options, t = this.newelement.width();
            "dropdown" === e.style ? this.list.width(e.menuWidth || t) : this.list.width(e.menuWidth || t - e.handleWidth);
        },
        destroy: function() {
            this.element.removeData(this.widgetName).removeClass("ui-selectmenu-disabled " + this.namespace + "-state-disabled").removeAttr("aria-disabled").unbind(".selectmenu"), 
            e(window).unbind(".selectmenu-" + this.ids[0]), e(document).unbind(".selectmenu-" + this.ids[0]), 
            this.newelement.remove(), this.list.remove(), this.element.unbind(".selectmenu").show(), 
            e.Widget.prototype.destroy.apply(this, arguments);
        },
        _typeAhead: function(e, t) {
            var i = this, s = String.fromCharCode(e).toLowerCase(), n = null, a = null;
            i._typeAhead_timer && (window.clearTimeout(i._typeAhead_timer), i._typeAhead_timer = void 0), 
            i._typeAhead_chars = (void 0 === i._typeAhead_chars ? "" : i._typeAhead_chars).concat(s), 
            i._typeAhead_chars.length < 2 || i._typeAhead_chars.substr(-2, 1) === s && i._typeAhead_cycling ? (i._typeAhead_cycling = !0, 
            n = s) : (i._typeAhead_cycling = !1, n = i._typeAhead_chars);
            for (var o = ("focus" !== t ? this._selectedOptionLi().data("index") : this._focusedOptionLi().data("index")) || 0, l = 0; l < this._optionLis.length; l++) {
                var d = this._optionLis.eq(l).text().substr(0, n.length).toLowerCase();
                if (d === n) if (i._typeAhead_cycling) {
                    if (null === a && (a = l), l > o) {
                        a = l;
                        break;
                    }
                } else a = l;
            }
            null !== a && this._optionLis.eq(a).find("a").trigger(t), i._typeAhead_timer = window.setTimeout(function() {
                i._typeAhead_timer = void 0, i._typeAhead_chars = void 0, i._typeAhead_cycling = void 0;
            }, i.options.typeAhead);
        },
        _uiHash: function() {
            var t = this.index();
            return {
                index: t,
                option: e("option", this.element).get(t),
                value: this.element[0].value
            };
        },
        open: function(t) {
            var i = this, s = this.options;
            if ("true" != i.newelement.attr("aria-disabled")) {
                i._closeOthers(t), i.newelement.addClass("ui-state-active"), i.list.attr("aria-hidden", !1), 
                i.list.addClass("ui-selectmenu-open");
                var n = this._selectedOptionLi();
                "dropdown" == s.style ? i.newelement.removeClass("ui-corner-all").addClass("ui-corner-top") : this.list.css("left", -5e3).scrollTop(this.list.scrollTop() + n.position().top - this.list.outerHeight() / 2 + n.outerHeight() / 2).css("left", "auto"), 
                i._refreshPosition(), i._computeWidth();
                var a = n.find("a");
                a.length && a[0].focus(), i.isOpen = !0, i._trigger("open", t, i._uiHash()), e(window).on("resize.selectmenu scroll.selectmenu", this.refreshPosition);
            }
        },
        close: function(t, i) {
            this.newelement.is(".ui-state-active") && (this.newelement.removeClass("ui-state-active"), 
            this.list.removeClass("ui-selectmenu-open"), this.list.attr("aria-hidden", !0), 
            "dropdown" == this.options.style && this.newelement.removeClass("ui-corner-top").addClass("ui-corner-all"), 
            i && this.newelement.focus(), this.isOpen = !1, this._trigger("close", t, this._uiHash()), 
            e(window).off("resize.selectmenu scroll.selectmenu", this.refreshPosition));
        },
        change: function(e) {
            this.element.trigger("change"), this._trigger("change", e, this._uiHash());
        },
        select: function(e) {
            return !this._disabled(e.currentTarget) && void this._trigger("select", e, this._uiHash());
        },
        widget: function() {
            return this.list.add(this.newelement);
        },
        _closeOthers: function(t) {
            e(".ui-selectmenu.ui-state-active").not(this.newelement).each(function() {
                e(this).data("selectelement").selectmenuold("close", t);
            }), e(".ui-selectmenu.ui-state-hover").trigger("mouseout");
        },
        _toggle: function(e, t) {
            this.isOpen ? this.close(e, t) : this.open(e);
        },
        _formatText: function(t, i) {
            return this.options.format ? t = this.options.format(t, i) : this.options.escapeHtml && (t = e("<div />").text(t).html()), 
            t;
        },
        _selectedIndex: function() {
            return this.element[0].selectedIndex;
        },
        _selectedOptionLi: function() {
            return this._optionLis.eq(this._selectedIndex());
        },
        _focusedOptionLi: function() {
            var e = this.list.find("a:focus").closest("li");
            return e.length || (e = this.list.find(".ui-selectmenu-item-focus")), e;
        },
        _moveSelection: function(e, t) {
            if (!this.options.disabled) {
                var i = parseInt(this._selectedOptionLi().data("index") || 0, 10), s = i + e;
                if (s < 0 && (s = 0), s > this._optionLis.size() - 1 && (s = this._optionLis.size() - 1), 
                s === t) return !1;
                this._optionLis.eq(s).hasClass(this.namespace + "-state-disabled") ? (e > 0 ? ++e : --e, 
                this._moveSelection(e, s)) : this._optionLis.eq(s).trigger("mouseover").trigger("mouseup");
            }
        },
        _moveFocus: function(e, t) {
            if (isNaN(e)) var i = parseInt(this._optionLis.filter(e).data("index"), 10); else var s = parseInt(this._focusedOptionLi().data("index") || 0, 10), i = s + e;
            if (i < 0 && (i = 0), i > this._optionLis.size() - 1 && (i = this._optionLis.size() - 1), 
            i === t) return !1;
            var n = "ui-selectmenu-item-" + Math.round(1e3 * Math.random());
            this._focusedOptionLi().find("a:eq(0)").attr("id", ""), this._optionLis.eq(i).hasClass(this.namespace + "-state-disabled") ? (e > 0 ? ++e : --e, 
            this._moveFocus(e, i)) : this._optionLis.eq(i).find("a:eq(0)").attr("id", n).focus(), 
            this.list.attr("aria-activedescendant", n);
        },
        _scrollPage: function(e) {
            var t = Math.floor(this.list.outerHeight() / this._optionLis.first().outerHeight());
            t = "up" == e ? -t : t, this._moveFocus(t);
        },
        _setOption: function(e, t) {
            this.options[e] = t, "disabled" == e && (t && this.close(), this.element.add(this.newelement).add(this.list)[t ? "addClass" : "removeClass"]("ui-selectmenu-disabled " + this.namespace + "-state-disabled").attr("aria-disabled", t));
        },
        disable: function(e, t) {
            "undefined" == typeof e ? this._setOption("disabled", !0) : "optgroup" == t ? this._disableOptgroup(e) : this._disableOption(e);
        },
        enable: function(e, t) {
            "undefined" == typeof e ? this._setOption("disabled", !1) : "optgroup" == t ? this._enableOptgroup(e) : this._enableOption(e);
        },
        _disabled: function(t) {
            return e(t).hasClass(this.namespace + "-state-disabled");
        },
        _disableOption: function(e) {
            var t = this._optionLis.eq(e);
            t && (t.addClass(this.namespace + "-state-disabled").find("a").attr("aria-disabled", !0), 
            this.element.find("option").eq(e).attr("disabled", "disabled"));
        },
        _enableOption: function(e) {
            var t = this._optionLis.eq(e);
            t && (t.removeClass(this.namespace + "-state-disabled").find("a").attr("aria-disabled", !1), 
            this.element.find("option").eq(e).removeAttr("disabled"));
        },
        _disableOptgroup: function(e) {
            var t = this.list.find("li.ui-selectmenu-group-" + e);
            t && (t.addClass(this.namespace + "-state-disabled").attr("aria-disabled", !0), 
            this.element.find("optgroup").eq(e).attr("disabled", "disabled"));
        },
        _enableOptgroup: function(e) {
            var t = this.list.find("li.ui-selectmenu-group-" + e);
            t && (t.removeClass(this.namespace + "-state-disabled").attr("aria-disabled", !1), 
            this.element.find("optgroup").eq(e).removeAttr("disabled"));
        },
        index: function(t) {
            return arguments.length ? !this._disabled(e(this._optionLis[t])) && t != this._selectedIndex() && (this.element[0].selectedIndex = t, 
            this._refreshValue(), this.change(), void 0) : this._selectedIndex();
        },
        getList: function() {
            return this.list;
        },
        getNewElement: function() {
            return this.newelement;
        },
        value: function(e) {
            return arguments.length ? void (e != this.element[0].value && (this.element[0].value = e, 
            this._refreshValue(), this.change())) : this.element[0].value;
        },
        _refreshValue: function() {
            var e = "popup" == this.options.style ? " ui-state-active" : "", t = "ui-selectmenu-item-" + Math.round(1e3 * Math.random());
            this._focusedOptionLi().removeClass("ui-selectmenu-item-focus"), this.list.find(".ui-selectmenu-item-selected").removeClass("ui-selectmenu-item-selected" + e).find("a").attr("aria-selected", "false").attr("id", ""), 
            this._selectedOptionLi().addClass("ui-selectmenu-item-selected" + e).find("a").attr("aria-selected", "true").attr("id", t);
            var i = this.newelement.data("optionClasses") ? this.newelement.data("optionClasses") : "", s = this._selectedOptionLi().data("optionClasses") ? this._selectedOptionLi().data("optionClasses") : "";
            this.newelement.removeClass(i).data("optionClasses", s).addClass(s).find(".ui-selectmenu-status").html(this._selectedOptionLi().find("a:eq(0)").html()), 
            this.list.attr("aria-activedescendant", t);
        },
        _refreshPosition: function() {
            var e = this.options;
            if ("popup" == e.style && !e.positionOptions.offset) var i = this._selectedOptionLi(), s = "0 " + (this.list.offset().top - i.offset().top - (this.newelement.outerHeight() + i.outerHeight()) / 2);
            this.list.css("zIndex", t(this.element) + 1).position({
                of: e.positionOptions.of || this.newelement,
                my: e.positionOptions.my,
                at: e.positionOptions.at,
                offset: e.positionOptions.offset || s,
                collision: e.positionOptions.collision || ("popup" == e.style ? "fit" : "flip")
            });
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 90:
/***/ function(module, exports, __webpack_require__) {

var __st0 = __webpack_require__(215);

!function(e, t, n) {
    var o = n(e), i = n(t), a = n.fancybox = function() {
        a.open.apply(this, arguments);
    }, r = !1, c = navigator.userAgent.match(/msie/i), s = null;
    n.extend(a, {
        version: "2.0.4",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 200,
            minHeight: 200,
            maxWidth: 9999,
            maxHeight: 9999,
            autoSize: !0,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: .5,
            fixed: !1 in t.documentElement || t,
            scrolling: "auto",
            wrapCSS: "fancybox-default",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3e3,
            modal: !1,
            loop: !0,
            ajax: {},
            keys: {
                next: [ 13, 32, 34, 39, 40 ],
                prev: [ 8, 33, 37, 38 ],
                close: [ 27 ]
            },
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe class="fancybox-iframe" name="fancybox-frame{rnd}" frameborder="0" hspace="0" ' + (c ? 'allowtransparency="true""' : "") + ' scrolling="{scrolling}" src="{href}"></iframe>',
                swf: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="wmode" value="transparent" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{href}" /><embed src="{href}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="100%" height="100%" wmode="transparent"></embed></object>',
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<div title="Close" class="fancybox-item fancybox-close"></div>',
                next: '<a title="Next" class="fancybox-item fancybox-next"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-item fancybox-prev"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 300,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 300,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {
                overlay: {
                    speedIn: 0,
                    speedOut: 300,
                    opacity: .8,
                    css: {
                        cursor: "pointer"
                    },
                    closeClick: !0
                },
                title: {
                    type: "float"
                }
            },
            onCancel: n.noop,
            beforeLoad: n.noop,
            afterLoad: n.noop,
            beforeShow: n.noop,
            afterShow: n.noop,
            beforeClose: n.noop,
            afterClose: n.noop
        },
        group: {},
        opts: {},
        coming: null,
        current: null,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: !1
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function(e, t) {
            n.isArray(e) || (e = [ e ]), e.length && (a.close(!0), a.opts = n.extend(!0, {}, a.defaults, t), 
            a.group = e, a._start(a.opts.index || 0));
        },
        cancel: function() {
            a.coming && !1 === a.trigger("onCancel") || (a.coming = null, a.hideLoading(), a.ajaxLoad && a.ajaxLoad.abort(), 
            a.ajaxLoad = null, a.imgPreload && (a.imgPreload.onload = a.imgPreload.onabort = a.imgPreload.onerror = null));
        },
        close: function(e) {
            a.cancel(), a.current && !1 !== a.trigger("beforeClose") && (a.unbindEvents(), !a.isOpen || e && e[0] === !0 ? (n(".fancybox-wrap").stop().trigger("onReset").remove(), 
            a._afterZoomOut()) : (a.isOpen = a.isOpened = !1, n(".fancybox-item").remove(), 
            a.wrap.stop(!0).removeClass("fancybox-opened"), a.inner.css("overflow", "hidden"), 
            a.transitions[a.current.closeMethod]()));
        },
        play: function(e) {
            var t = function() {
                clearTimeout(a.player.timer);
            }, o = function() {
                t(), a.current && a.player.isActive && (a.player.timer = setTimeout(a.next, a.current.playSpeed));
            }, i = function() {
                t(), n("body").unbind(".player"), a.player.isActive = !1, a.trigger("onPlayEnd");
            }, r = function() {
                a.current && (a.current.loop || a.current.index < a.group.length - 1) && (a.player.isActive = !0, 
                n("body").bind({
                    "afterShow.player onUpdate.player": o,
                    "onCancel.player beforeClose.player": i,
                    "beforeLoad.player": t
                }), o(), a.trigger("onPlayStart"));
            };
            a.player.isActive || e && e[0] === !1 ? i() : r();
        },
        next: function() {
            a.current && a.jumpto(a.current.index + 1);
        },
        prev: function() {
            a.current && a.jumpto(a.current.index - 1);
        },
        jumpto: function(e) {
            a.current && (e = parseInt(e, 10), a.group.length > 1 && a.current.loop && (e >= a.group.length ? e = 0 : e < 0 && (e = a.group.length - 1)), 
            "undefined" != typeof a.group[e] && (a.cancel(), a._start(e)));
        },
        reposition: function(e) {
            a.isOpen && a.wrap.css(a._getPosition(e));
        },
        update: function() {
            a.isOpen && (r || (s = setInterval(function() {
                r && (r = !1, clearTimeout(s), a.current && (a.current.autoSize && (a.inner.height("auto"), 
                a.current.height = a.inner.height()), a._setDimension(), a.current.canGrow && a.inner.height("auto"), 
                a.reposition(), a.trigger("onUpdate")));
            }, 100)), r = !0);
        },
        toggle: function() {
            a.isOpen && (a.current.fitToView = !a.current.fitToView, a.update());
        },
        hideLoading: function() {
            n("#fancybox-loading").remove();
        },
        showLoading: function() {
            a.hideLoading(), n('<div id="fancybox-loading"></div>').click(a.cancel).appendTo("body");
        },
        getViewport: function() {
            return {
                x: o.scrollLeft(),
                y: o.scrollTop(),
                w: o.width(),
                h: o.height()
            };
        },
        unbindEvents: function() {
            a.wrap && a.wrap.unbind(".fb"), i.unbind(".fb"), o.unbind(".fb");
        },
        bindEvents: function() {
            var e = a.current, t = e.keys;
            e && (o.bind("resize.fb, orientationchange.fb", a.update), t && i.bind("keydown.fb", function(e) {
                var o;
                e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || !(n.inArray(e.target.tagName.toLowerCase(), [ "input", "textarea", "select", "button" ]) < 0) || (o = e.keyCode, 
                n.inArray(o, t.close) > -1 ? (a.close(), e.preventDefault()) : n.inArray(o, t.next) > -1 ? (a.next(), 
                e.preventDefault()) : n.inArray(o, t.prev) > -1 && (a.prev(), e.preventDefault()));
            }), n.fn.mousewheel && e.mouseWheel && a.group.length > 1 && a.wrap.bind("mousewheel.fb", function(e, t) {
                var o = n(e.target).get(0);
                0 !== o.clientHeight && o.scrollHeight !== o.clientHeight || (e.preventDefault(), 
                a[t > 0 ? "prev" : "next"]());
            }));
        },
        trigger: function(e) {
            var t, o = a[n.inArray(e, [ "onCancel", "beforeLoad", "afterLoad" ]) > -1 ? "coming" : "current"];
            if (o) {
                if (n.isFunction(o[e]) && (t = o[e].apply(o, Array.prototype.slice.call(arguments, 1))), 
                t === !1) return !1;
                o.helpers && n.each(o.helpers, function(t, i) {
                    i && "undefined" != typeof a.helpers[t] && n.isFunction(a.helpers[t][e]) && a.helpers[t][e](i, o);
                }), n.event.trigger(e + ".fb");
            }
        },
        isImage: function(e) {
            return e && e.match(/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i);
        },
        isSWF: function(e) {
            return e && e.match(/\.(swf)(.*)?$/i);
        },
        _start: function(e) {
            var t, o, i, r, c = {}, s = a.group[e] || null;
            return "object" == typeof s && (s.nodeType || s instanceof n) && (t = !0, n.metadata && (c = n(s).metadata())), 
            c = n.extend(!0, {}, a.opts, {
                index: e,
                element: s
            }, n.isPlainObject(s) ? s : c), n.each([ "href", "title", "content", "type" ], function(e, o) {
                c[o] = a.opts[o] || t && n(s).attr(o) || c[o] || null;
            }), "number" == typeof c.margin && (c.margin = [ c.margin, c.margin, c.margin, c.margin ]), 
            c.modal && n.extend(!0, c, {
                closeBtn: !1,
                closeClick: !1,
                nextClick: !1,
                arrows: !1,
                mouseWheel: !1,
                keys: null,
                helpers: {
                    overlay: {
                        css: {
                            cursor: "auto"
                        },
                        closeClick: !1
                    }
                }
            }), a.coming = c, !1 === a.trigger("beforeLoad") ? void (a.coming = null) : (i = c.type, 
            o = c.href, i || (t && (r = n(s).data("fancybox-type"), !r && s.className && (r = s.className.match(/fancybox\.(\w+)/), 
            i = r ? r[1] : null)), !i && o && (a.isImage(o) ? i = "image" : a.isSWF(o) ? i = "swf" : o.match(/^#/) && (i = "inline")), 
            i || (i = t ? "inline" : "html"), c.type = i), "inline" === i || "html" === i ? (c.content = c.content || ("inline" === i && o ? n(o) : s), 
            c.content.length || (i = null)) : (c.href = o || s, c.href || (i = null)), c.group = a.group, 
            void ("image" === i ? a._loadImage() : "ajax" === i ? a._loadAjax() : i ? a._afterLoad() : a._error("type")));
        },
        _error: function(e) {
            n.extend(a.coming, {
                type: "html",
                autoSize: !0,
                minHeight: "0",
                hasError: e,
                content: a.coming.tpl.error
            }), a._afterLoad();
        },
        _loadImage: function() {
            a.imgPreload = new Image(), a.imgPreload.onload = function() {
                this.onload = this.onerror = null, a.coming.width = this.width, a.coming.height = this.height, 
                a._afterLoad();
            }, a.imgPreload.onerror = function() {
                this.onload = this.onerror = null, a._error("image");
            }, a.imgPreload.src = a.coming.href, a.imgPreload.complete || a.showLoading();
        },
        _loadAjax: function() {
            a.showLoading(), a.ajaxLoad = n.ajax(n.extend({}, a.coming.ajax, {
                url: a.coming.href,
                error: function(e, t) {
                    "abort" !== t ? a._error("ajax", e) : a.hideLoading();
                },
                success: function(e, t) {
                    "success" === t && (a.coming.content = e, a._afterLoad());
                }
            }));
        },
        _preload: function() {
            var e = a.group, t = a.current.index, o = function(e) {
                e && a.isImage(e) && (new Image().src = e);
            };
            e.length > 1 && (o(n(e[t + 1] || e[0]).attr("href")), o(n(e[t - 1] || e[e.length - 1]).attr("href")));
        },
        _afterLoad: function() {
            return a.hideLoading(), a.coming && !1 !== a.trigger("afterLoad", a.current) ? (a.isOpened ? (n(".fancybox-item").remove(), 
            a.wrap.stop(!0).removeClass("fancybox-opened"), a.inner.css("overflow", "hidden"), 
            a.transitions[a.current.prevMethod]()) : (n(".fancybox-wrap").stop().trigger("onReset").remove(), 
            a.trigger("afterClose")), a.unbindEvents(), a.isOpen = !1, a.current = a.coming, 
            a.coming = !1, a.wrap = n(a.current.tpl.wrap).addClass("fancybox-tmp " + a.current.wrapCSS).appendTo("body"), 
            a.outer = n(".fancybox-outer", a.wrap).css("padding", a.current.padding + "px"), 
            a.inner = n(".fancybox-inner", a.wrap), a._setContent(), a.trigger("beforeShow"), 
            a._setDimension(), a.wrap.hide().removeClass("fancybox-tmp"), a.bindEvents(), a._preload(), 
            void a.transitions[a.isOpened ? a.current.nextMethod : a.current.openMethod]()) : void (a.coming = !1);
        },
        _setContent: function() {
            var e, t, o = a.current, i = o.type;
            switch (i) {
              case "inline":
              case "ajax":
              case "html":
                e = o.content, "inline" === i && e instanceof n && (e = e.show().detach(), e.parent().hasClass("fancybox-inner") && e.parents(".fancybox-wrap").trigger("onReset").remove(), 
                n(a.wrap).bind("onReset", function() {
                    e.appendTo("body").hide();
                })), o.autoSize && (t = n('<div class="fancybox-tmp"></div>').appendTo(n("body")).append(e), 
                o.width = t.outerWidth(), o.height = t.outerHeight(!0), e = t.contents().detach(), 
                t.remove());
                break;

              case "image":
                e = o.tpl.image.replace("{href}", o.href), o.aspectRatio = !0;
                break;

              case "swf":
                e = o.tpl.swf.replace(/\{width\}/g, o.width).replace(/\{height\}/g, o.height).replace(/\{href\}/g, o.href);
                break;

              case "iframe":
                e = o.tpl.iframe.replace("{href}", o.href).replace("{scrolling}", o.scrolling).replace("{rnd}", new Date().getTime());
            }
            n.inArray(i, [ "image", "swf", "iframe" ]) > -1 && (o.autoSize = !1, o.scrolling = !1), 
            a.inner.append(e);
        },
        _setDimension: function() {
            var e, t, o = a.wrap, i = a.outer, r = a.inner, c = a.current, s = a.getViewport(), l = c.margin, p = 2 * c.padding, d = c.width + p, f = c.height + p, h = c.width / c.height, u = c.maxWidth, g = c.maxHeight, m = c.minWidth, y = c.minHeight;
            if (s.w -= l[1] + l[3], s.h -= l[0] + l[2], d.toString().indexOf("%") > -1 && (d = s.w * parseFloat(d) / 100), 
            f.toString().indexOf("%") > -1 && (f = s.h * parseFloat(f) / 100), c.fitToView && (u = Math.min(s.w, u), 
            g = Math.min(s.h, g)), m = Math.min(d, m), y = Math.min(d, y), u = Math.max(m, u), 
            g = Math.max(y, g), c.aspectRatio ? (d > u && (d = u, f = (d - p) / h + p), f > g && (f = g, 
            d = (f - p) * h + p), d < m && (d = m, f = (d - p) / h + p), f < y && (f = y, d = (f - p) * h + p)) : (d = Math.max(m, Math.min(d, u)), 
            f = Math.max(y, Math.min(f, g))), d = Math.round(d), f = Math.round(f), n(o.add(i).add(r)).width("auto").height("auto"), 
            r.width(d - p).height(f - p), o.width(d), e = o.height(), d > u || e > g) for (;(d > u || e > g) && d > m && e > y; ) f -= 10, 
            c.aspectRatio ? (d = Math.round((f - p) * h + p), d < m && (d = m, f = (d - p) / h + p)) : d -= 10, 
            r.width(d - p).height(f - p), o.width(d), e = o.height();
            c.dim = {
                width: d,
                height: e
            }, c.canGrow = c.autoSize && f > y && f < g, c.canShrink = !1, c.canExpand = !1, 
            d - p < c.width || f - p < c.height ? c.canExpand = !0 : (d > s.w || e > s.h) && d > m && f > y && (c.canShrink = !0), 
            t = e - p, a.innerSpace = t - r.height(), a.outerSpace = t - i.height();
        },
        _getPosition: function(e) {
            var t = a.current, n = a.getViewport(), o = t.margin, i = a.wrap.width() + o[1] + o[3], r = a.wrap.height() + o[0] + o[2], c = {
                position: "absolute",
                top: o[0] + n.y,
                left: o[3] + n.x
            };
            return t.fixed && (!e || e[0] === !1) && r <= n.h && i <= n.w && (c = {
                position: "fixed",
                top: o[0],
                left: o[3]
            }), c.top = Math.ceil(Math.max(c.top, c.top + (n.h - r) * t.topRatio)) + "px", c.left = Math.ceil(Math.max(c.left, c.left + .5 * (n.w - i))) + "px", 
            c;
        },
        _afterZoomIn: function() {
            var e = a.current;
            a.isOpen = a.isOpened = !0, a.wrap.addClass("fancybox-opened").css("overflow", "visible"), 
            a.update(), a.inner.css("overflow", "auto" === e.scrolling ? "auto" : "yes" === e.scrolling ? "scroll" : "hidden"), 
            (e.closeClick || e.nextClick) && a.inner.css("cursor", "pointer").bind("click.fb", e.nextClick ? a.next : a.close), 
            e.closeBtn && n(e.tpl.closeBtn).appendTo(a.wrap).bind("click.fb", a.close), e.arrows && a.group.length > 1 && ((e.loop || e.index > 0) && n(e.tpl.prev).appendTo(a.wrap).bind("click.fb", a.prev), 
            (e.loop || e.index < a.group.length - 1) && n(e.tpl.next).appendTo(a.wrap).bind("click.fb", a.next)), 
            a.trigger("afterShow"), a.opts.autoPlay && !a.player.isActive && (a.opts.autoPlay = !1, 
            a.play());
        },
        _afterZoomOut: function() {
            a.trigger("afterClose"), a.wrap.trigger("onReset").remove(), n.extend(a, {
                group: {},
                opts: {},
                current: null,
                isOpened: !1,
                isOpen: !1,
                wrap: null,
                outer: null,
                inner: null
            });
        }
    }), a.transitions = {
        getOrigPosition: function() {
            var e, t, o = a.current.element, i = {}, r = 50, c = 50;
            return o && o.nodeName && n(o).is(":visible") ? (e = n(o).find("img:first"), e.length ? (i = e.offset(), 
            r = e.outerWidth(), c = e.outerHeight()) : i = n(o).offset()) : (t = a.getViewport(), 
            i.top = t.y + .5 * (t.h - c), i.left = t.x + .5 * (t.w - r)), i = {
                top: Math.ceil(i.top) + "px",
                left: Math.ceil(i.left) + "px",
                width: Math.ceil(r) + "px",
                height: Math.ceil(c) + "px"
            };
        },
        step: function(e, t) {
            var n, o, i;
            "width" !== t.prop && "height" !== t.prop || (o = i = Math.ceil(e - 2 * a.current.padding), 
            "height" === t.prop && (n = (e - t.start) / (t.end - t.start), t.start > t.end && (n = 1 - n), 
            o -= a.innerSpace * n, i -= a.outerSpace * n), a.inner[t.prop](o), a.outer[t.prop](i));
        },
        zoomIn: function() {
            var e, t, o = a.wrap, i = a.current, r = i.dim;
            "elastic" === i.openEffect ? (t = n.extend({}, r, a._getPosition(!0)), delete t.position, 
            e = this.getOrigPosition(), i.openOpacity && (e.opacity = 0, t.opacity = 1), o.css(e).show().animate(t, {
                duration: i.openSpeed,
                easing: i.openEasing,
                step: this.step,
                complete: a._afterZoomIn
            })) : (o.css(n.extend({}, r, a._getPosition())), "fade" === i.openEffect ? o.fadeIn(i.openSpeed, a._afterZoomIn) : (o.show(), 
            a._afterZoomIn()));
        },
        zoomOut: function() {
            var e, t = a.wrap, n = a.current;
            "elastic" === n.closeEffect ? ("fixed" === t.css("position") && t.css(a._getPosition(!0)), 
            e = this.getOrigPosition(), n.closeOpacity && (e.opacity = 0), t.animate(e, {
                duration: n.closeSpeed,
                easing: n.closeEasing,
                step: this.step,
                complete: a._afterZoomOut
            })) : t.fadeOut("fade" === n.closeEffect ? n.closeSpeed : 0, a._afterZoomOut);
        },
        changeIn: function() {
            var e, t = a.wrap, n = a.current;
            "elastic" === n.nextEffect ? (e = a._getPosition(!0), e.opacity = 0, e.top = parseInt(e.top, 10) - 200 + "px", 
            t.css(e).show().animate({
                opacity: 1,
                top: "+=200px"
            }, {
                duration: n.nextSpeed,
                complete: a._afterZoomIn
            })) : (t.css(a._getPosition()), "fade" === n.nextEffect ? t.hide().fadeIn(n.nextSpeed, a._afterZoomIn) : (t.show(), 
            a._afterZoomIn()));
        },
        changeOut: function() {
            var e = a.wrap, t = a.current, o = function() {
                n(this).trigger("onReset").remove();
            };
            e.removeClass("fancybox-opened"), "elastic" === t.prevEffect ? e.animate({
                opacity: 0,
                top: "+=200px"
            }, {
                duration: t.prevSpeed,
                complete: o
            }) : e.fadeOut("fade" === t.prevEffect ? t.prevSpeed : 0, o);
        }
    }, a.helpers.overlay = {
        overlay: null,
        update: function() {
            var e, n, a;
            this.overlay.width(0).height(0), c ? (n = Math.max(t.documentElement.scrollWidth, t.body.scrollWidth), 
            a = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), e = n < a ? o.width() : n) : e = i.width(), 
            this.overlay.width(e).height(i.height());
        },
        beforeShow: function(e) {
            this.overlay || (this.overlay = n('<div id="fancybox-overlay"></div>').css(e.css || {
                background: "black"
            }).appendTo("body"), this.update(), e.closeClick && this.overlay.bind("click.fb", a.close), 
            o.bind("resize.fb", n.proxy(this.update, this)), this.overlay.fadeTo(e.speedIn || "fast", e.opacity || 1));
        },
        onUpdate: function() {
            this.update();
        },
        afterClose: function(e) {
            this.overlay && this.overlay.fadeOut(e.speedOut || "fast", function() {
                n(this).remove();
            }), this.overlay = null;
        }
    }, a.helpers.title = {
        beforeShow: function(e) {
            var t, o = a.current.title;
            o && (t = n('<div class="fancybox-title fancybox-title-' + e.type + '-wrap">' + o + "</div>").appendTo("body"), 
            "float" === e.type && (t.width(t.width()), t.wrapInner('<span class="child"></span>'), 
            a.current.margin[2] += Math.abs(parseInt(t.css("margin-bottom"), 10))), t.appendTo("over" === e.type ? a.inner : "outside" === e.type ? a.wrap : a.outer));
        }
    }, n.fn.fancybox = function(e) {
        function t(e) {
            var t, i, c = [], s = this.rel;
            e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault(), i = n(this).data("fancybox-group"), 
            "undefined" != typeof i ? t = !!i && "data-fancybox-group" : s && "" !== s && "nofollow" !== s && (i = s, 
            t = "rel"), t && (c = r.length ? n(r).filter("[" + t + '="' + i + '"]') : n("[" + t + '="' + i + '"]')), 
            c.length ? (o.index = c.index(this), a.open(c.get(), o)) : a.open(this, o));
        }
        var o = e || {}, r = this.selector || "";
        return r ? i.undelegate(r, "click.fb-start").delegate(r, "click.fb-start", t) : n(this).unbind("click.fb-start").bind("click.fb-start", t), 
        this;
    };
}(window, document, jQuery);

/***/ },

/***/ 901:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(23), __webpack_require__(0), __webpack_require__(18), __webpack_require__(2), __webpack_require__(5), __webpack_require__(123), __webpack_require__(144), __webpack_require__(288), __webpack_require__(292), __webpack_require__(504), __webpack_require__(593), __webpack_require__(594), __webpack_require__(141) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, t, o, r, n, l, a, i, c, s, f, u) {
    "use strict";
    return c.extend({
        rendered: function() {
            this.fatclick(), this.picturefill();
        },
        bind: function() {
            this.$parent.on("mouseenter mouseleave", ".cover-name-link, .cover-img", function(e) {
                t(this).closest(".project-cover").toggleClass("hover", "mouseenter" === e.type);
            }).on("click", ".js-project-delete", function() {
                var o = t(this).data("id");
                l(i({
                    title: n.translate("profile_project_draft_delete_title", "Delete Project Draft"),
                    html: f({
                        draft: !0,
                        multiple_owners: t(this).data("multipleOwners")
                    }),
                    buttons: [ {
                        label: n.translate("profile_project_button_delete", "Delete"),
                        classes: [ "form-button-default", "js-confirm" ]
                    }, {
                        label: n.translate("profile_project_button_cancel", "Cancel"),
                        classes: [ "form-button-cancel", "js-cancel" ]
                    } ]
                }), {
                    waitingText: n.translate("profile_project_draft_deleting", "Deleting..."),
                    promiseGenerator: function() {
                        return r({
                            url: e.PROJECTS.DELETE_URL,
                            data: {
                                id: o
                            },
                            type: "POST"
                        }).then(function(e) {
                            a.trigger("draft-remove", o, e.count);
                        });
                    }
                });
            }).on("click", ".js-project-remove-owner", function() {
                var o = t(this).data("id");
                l(i({
                    title: n.translate("profile_project_draft-delete_title", "Are you sure you want to remove yourself from this draft project?"),
                    html: u({
                        draft: !0
                    }),
                    buttons: [ {
                        label: n.translate("profile_project_button_remove", "Remove"),
                        classes: [ "form-button-default", "js-confirm" ]
                    }, {
                        label: n.translate("profile_project_button_cancel", "Cancel"),
                        classes: [ "form-button-cancel", "js-cancel" ]
                    } ]
                }), {
                    waitingText: n.translate("profile_project_draft_removing", "Removing..."),
                    promiseGenerator: function() {
                        return r({
                            url: e.PROJECTS.REMOVE_OWNER_URL,
                            data: {
                                id: o
                            },
                            type: "POST"
                        }).then(function(e) {
                            a.trigger("draft-remove", o, e.count);
                        });
                    }
                });
            });
        },
        unbind: function() {
            this.$parent.off("mouseenter mouseleave", ".cover-name-link, .cover-img").off("click", ".js-project-delete").off("click", ".js-project-remove-owner");
        },
        template: o(s, t)
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 912:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(23), __webpack_require__(0), __webpack_require__(18), __webpack_require__(2), __webpack_require__(468), __webpack_require__(5), __webpack_require__(79), __webpack_require__(31), __webpack_require__(123), __webpack_require__(144), __webpack_require__(288), __webpack_require__(314), __webpack_require__(85), __webpack_require__(292), __webpack_require__(101), __webpack_require__(593), __webpack_require__(594), __webpack_require__(141) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, t, o, n, r, l, i, a, c, s, u, p, f, d, _, h, j) {
    "use strict";
    var b = function(e) {
        t(this).closest(".project-cover").toggleClass("hover", "mouseenter" === e.type);
    }, m = function() {
        this.$parent.sortable({
            handle: ".js-controls-overlay-reorder",
            containment: ".js-gallery",
            tolerance: "pointer",
            forcePlaceholderSize: !0
        }).on("sortupdate", function(t, o) {
            n({
                url: e.PROJECTS.ORDER_URL,
                type: "POST",
                data: {
                    id: o.item.data("id"),
                    after_id: o.item.prev().data("id") || 0
                }
            }).then(null, function(e) {
                s.trigger("error", a.singleError(e));
            });
        }), this.on("postrender", function() {
            this.$parent.sortable("refresh");
        });
    }, g = function(e, o) {
        t(".js-project-cover[data-id=" + e + "]").remove(), 0 === o && this.setEmpty(p), 
        this.trigger("project-removed");
    }, v = function() {
        var o = this;
        this.$parent.on("click", ".js-project-delete", function() {
            var a = t(this), s = a.closest(".js-controls-overlay-menu"), p = i.init(s).show(), f = a.data("id");
            s.addClass("loading"), r({
                url: e.ADOBE_PORTFOLIO.URLS.GALLERIES,
                data: {
                    project_id: f
                }
            }).then(function(e) {
                return e.galleries.some(function(e) {
                    return e.enabled;
                });
            }, function() {
                return !1;
            }).then(function(t) {
                s.removeClass("loading"), p.hide(), c(u({
                    title: l.translate("profile_project_delete_title", "Delete Project"),
                    html: h({
                        multiple_owners: a.data("multipleOwners"),
                        is_portfolio_project: t
                    }),
                    buttons: [ {
                        label: l.translate("profile_project_button_delete", "Delete"),
                        classes: [ "form-button-default", "js-confirm" ]
                    }, {
                        label: l.translate("profile_project_button_cancel", "Cancel"),
                        classes: [ "form-button-cancel", "js-cancel" ]
                    } ]
                }), {
                    waitingText: l.translate("profile_project_delete_deleting", "Deleting..."),
                    promiseGenerator: function() {
                        return n({
                            url: e.PROJECTS.DELETE_URL,
                            data: {
                                id: f
                            },
                            type: "POST"
                        }).then(function(e) {
                            return g.call(o, f, e.count), e;
                        });
                    }
                }), o.trigger("dialog-displayed");
            });
        });
    }, y = function() {
        var o = this;
        this.$parent.on("click", ".js-project-remove-owner", function() {
            var a = t(this), s = a.closest(".js-controls-overlay-menu"), p = i.init(s).show(), f = a.data("id");
            s.addClass("loading"), r({
                url: e.ADOBE_PORTFOLIO.URLS.GALLERIES,
                data: {
                    project_id: f
                }
            }).then(function(e) {
                return e.galleries.some(function(e) {
                    return e.enabled;
                });
            }, function() {
                return !1;
            }).then(function(t) {
                s.removeClass("loading"), p.hide(), c(u({
                    title: l.translate("profile_project_remove_title", "Are you sure you want to remove this project from your profile?"),
                    html: j({
                        is_portfolio_project: t
                    }),
                    buttons: [ {
                        label: l.translate("profile_project_button_remove", "Remove"),
                        classes: [ "form-button-default", "js-confirm" ]
                    }, {
                        label: l.translate("profile_project_button_cancel", "Cancel"),
                        classes: [ "form-button-cancel", "js-cancel" ]
                    } ]
                }), {
                    waitingText: l.translate("profile_project_delete_removing", "Removing..."),
                    promiseGenerator: function() {
                        return n({
                            url: e.PROJECTS.REMOVE_OWNER_URL,
                            data: {
                                id: f
                            },
                            type: "POST"
                        }).then(function(e) {
                            return g.call(o, f, e.count), e;
                        });
                    }
                }), o.trigger("dialog-displayed");
            });
        });
    }, O = function(e, t) {
        s.trigger("draft-add", e, t);
    }, R = function() {
        var o = this;
        this.$parent.on("click", ".js-project-unpublish", function() {
            var r = t(this).data("id");
            c(u({
                title: l.translate("profile_project_unpublish_title", "Unpublish Project"),
                html: l.translate("profile_project_unpublish_content", "Are you sure you want to unpublish this project?"),
                buttons: [ {
                    label: l.translate("profile_project_button_unpublish", "Unpublish"),
                    classes: [ "form-button-default", "js-confirm" ]
                }, {
                    label: l.translate("profile_project_button_cancel", "Cancel"),
                    classes: [ "form-button-cancel", "js-cancel" ]
                } ]
            }), {
                waitingText: l.translate("profile_project_unpublish_unpublishing", "Unpublishing..."),
                promiseGenerator: function() {
                    return n({
                        url: e.PROJECTS.UNPUBLISH_URL,
                        data: {
                            id: r
                        },
                        type: "POST"
                    }).then(function(e) {
                        return g.call(o, r, e.count.published), O(e.project, e.count.unpublished), e;
                    });
                }
            });
        });
    }, E = function() {
        this.$parent.on("click", ".js-project-clone", function() {
            var o = t(this).data("id");
            c(u({
                title: l.translate("profile_project_clone_title", "Clone Project as New Draft"),
                html: l.translate("profile_project_clone_content", "This creates a new, unpublished clone of your project. Everything in the project will be duplicated, except project settings and project stats."),
                buttons: [ {
                    label: l.translate("profile_project_button_create_craft", "Create Draft"),
                    classes: [ "form-button-default", "js-confirm" ]
                }, {
                    label: l.translate("profile_project_button_cancel", "Cancel"),
                    classes: [ "form-button-cancel", "js-cancel" ]
                } ]
            }), {
                waitingText: l.translate("profile_project_clone_cloning", "Cloning..."),
                promiseGenerator: function() {
                    return n({
                        url: e.PROJECTS.CLONE_URL,
                        data: {
                            id: o
                        },
                        type: "POST"
                    }).then(function(e) {
                        return O(e.project, e.count), e;
                    });
                }
            });
        });
    };
    return d.extend({
        rendered: function() {
            this.fatclick(), this.picturefill(), this.dateFormatter();
        },
        bind: function() {
            this.$parent.on("mouseenter mouseleave", ".cover-name-link, .cover-img, .controls-overlay, .edit-icon", b), 
            f.get("is_profile_owner") && (m.call(this), v.call(this), y.call(this), R.call(this), 
            E.call(this));
        },
        unbind: function() {
            this.$parent.off("mouseenter mouseleave", ".cover-name-link, .cover-img, .controls-overlay, .edit-icon", b), 
            f.get("is_profile_owner") && (this.off("postrender"), this.$parent.sortable("destroy").off("sortupdate").off("click", ".js-project-delete").off("click", ".js-project-clone").off("click", ".js-project-unpublish"));
        },
        template: o(_, t)
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 92:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(24), __webpack_require__(13), __webpack_require__(126) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, t, o, i) {
    "use strict";
    var r = t.extend({
        init: function(t) {
            this.$view = t instanceof e ? t : e(".project-cover[data-id=" + t + "]");
        },
        rendered: function() {
            this.fatclick(), this.$view.on("mouseenter mouseleave", ".cover-name-link, .cover-img, .controls-overlay, .edit-icon", this.toggleHover).on("click", function() {
                o.info("project_click_tracker", "Gallery project viewed", e(this).data());
            });
        },
        toggleHover: function(t) {
            e(this).closest(".project-cover").toggleClass("hover", "mouseenter" === t.type);
        },
        destroy: function() {
            this.$view.off("mouseenter mouseleave", ".cover-name-link, .cover-img, .controls-overlay, .edit-icon", this.toggleHover), 
            this._super();
        }
    }).mixin(i);
    return r;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 95:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e) {
    "use strict";
    function t(t, i) {
        var n = e("<select>", {
            name: t[0].id,
            multiple: i || !1
        }).hide();
        return i || e("<option>", {
            selected: !0,
            disabled: !0
        }).appendTo(n), t.children("li").each(function() {
            e("<option>", {
                value: e(this).data("value")
            }).appendTo(n);
        }), n.insertAfter(t), n;
    }
    function i(i, n) {
        return i.each(function() {
            var l = t(e(this).on("click", ">li", function() {
                var t = e(this), a = t.data("value"), u = l.find('[value="' + a + '"]'), s = !u.prop("selected");
                u.prop("selected", s), s = u.prop("selected"), (n ? i.find('[data-value="' + a + '"]') : t.siblings().removeClass("active").end()).toggleClass("active", s);
            }), n);
        }), i;
    }
    return {
        selectList: function(e) {
            return i(e || this.$view.find("ul,ol"), !1);
        },
        multiList: function(e) {
            return i(e || this.$view.find("ul,ol"), !0);
        }
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 96:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)();
// imports


// module
exports.push([module.i, ".popup.mini-profile:before {\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  box-shadow: -2px -2px 4px -2px rgba(0, 0, 0, 0.4);\n  content: '';\n  position: absolute;\n  z-index: -1;\n}\n.popup.mini-profile.top-right:before, .popup.mini-profile.top-left:before {\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  -o-transform: rotate(45deg);\n  transform: rotate(45deg);\n  top: -8px;\n}\n.popup.mini-profile.bottom-right:before, .popup.mini-profile.bottom-left:before {\n  -webkit-transform: rotate(-134deg);\n  -moz-transform: rotate(-134deg);\n  -ms-transform: rotate(-134deg);\n  -o-transform: rotate(-134deg);\n  transform: rotate(-134deg);\n  bottom: -8px;\n}\n.popup.mini-profile.top-right:before, .popup.mini-profile.bottom-right:before {\n  right: 45px;\n}\n.popup.mini-profile.top-left:before, .popup.mini-profile.bottom-left:before {\n  left: 45px;\n}\n\n.mini-profile-wrap {\n  width: 331px;\n}\n.mini-profile-wrap .gallery-projects-wrap {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  background: #fff;\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n  padding: 4px 3px 4px 1px;\n  position: relative;\n  text-decoration: none;\n  width: 361px;\n}\n.mini-profile-wrap .gallery-projects-wrap .gallery-cover-overlay {\n  background: #0088f5;\n  background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(0, 156, 252, 0.75)), to(rgba(0, 116, 238, 0.75)));\n  background: -webkit-linear-gradient(0% 0%, 0% 100%, from(rgba(0, 156, 252, 0.75)), to(rgba(0, 116, 238, 0.75)));\n  background: -moz-linear-gradient(center top, rgba(0, 156, 252, 0.75), rgba(0, 116, 238, 0.75));\n  background: linear-gradient(rgba(0, 156, 252, 0.75), rgba(0, 116, 238, 0.75));\n  -webkit-transition: opacity 0.15s ease-in;\n  transition: opacity 0.15s ease-in;\n  border: 1px solid #356bca;\n  border-radius: 4px;\n  bottom: 0;\n  color: #fff;\n  font-size: 16px;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  text-decoration: none !important;\n  text-shadow: 1px 2px 0 #0a4fb9;\n  text-transform: uppercase;\n  top: 0;\n}\n.ie .mini-profile-wrap .gallery-projects-wrap .gallery-cover-overlay {\n  display: none;\n  font-weight: bold;\n}\n.mini-profile-wrap .gallery-projects-wrap:hover .gallery-cover-overlay {\n  opacity: 1;\n}\n.ie .mini-profile-wrap .gallery-projects-wrap:hover .gallery-cover-overlay {\n  background: rgba(0, 156, 252, 0.75);\n  display: block;\n}\n.mini-profile-wrap .gallery-projects-wrap .gallery-cover-overlay-text {\n  -ms-transform: translateY(-50%);\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  position: absolute;\n  top: 50%;\n  width: 100%;\n}\n.mini-profile-wrap .gallery-projects-wrap .project-cover-wrap {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  background: #f3f3f3;\n  border-left: 3px solid #fff;\n  float: left;\n  height: 90px;\n  overflow: hidden;\n  width: 33.3%;\n}\n.mini-profile-wrap .gallery-projects-wrap .project-cover-wrap .project-cover {\n  border-radius: 0;\n  box-shadow: none;\n  margin: 0;\n  vertical-align: top;\n  visibility: visible;\n  width: 100%;\n}\n.mini-profile-wrap .gallery-projects-wrap .project-cover-wrap.empty .project-cover {\n  display: none;\n}\n.mini-profile-wrap .gallery-projects-wrap-4 {\n  width: 479px;\n}\n.mini-profile-wrap .gallery-projects-wrap-4 .project-cover-wrap {\n  width: 25%;\n}\n.mini-profile-wrap .gallery-projects-wrap-4 .project-cover-wrap:nth-child(n+5) {\n  display: none;\n}\n.mini-profile-wrap .gallery-projects-wrap-2 {\n  width: 242px;\n}\n.mini-profile-wrap .gallery-projects-wrap-2 .project-cover-wrap {\n  width: 50%;\n}\n.mini-profile-wrap .gallery-projects-wrap-2 .project-cover-wrap:nth-child(n+3) {\n  display: none;\n}\n.mini-profile-wrap .user-image-wrap,\n.mini-profile-wrap .user-image {\n  width: 35px;\n  height: 35px;\n}\n.mini-profile-wrap .user-image-wrap {\n  background: #f3f3f3;\n  display: block;\n  float: left;\n  margin: 0 10px 0 0;\n  padding: 0;\n}\n.mini-profile-wrap .user-info {\n  display: inline-block;\n  max-width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.mini-profile-wrap .user-name {\n  color: #3c3c3c;\n  display: block;\n  font-size: 14px;\n  padding-bottom: 3px;\n}\n.mini-profile-wrap .location-link {\n  color: #6f6f6f;\n  font-size: 13px;\n}\n.mini-profile-wrap .location-link:before {\n  margin-right: 3px;\n}\n.mini-profile-wrap .follow-button-container {\n  float: right;\n  width: auto !important;\n}\n.mini-profile-wrap .gallery-projects-wrap {\n  float: left;\n  margin: 0 0 10px;\n  width: 331px;\n}\n.mini-profile-wrap .gallery-projects-wrap .project-cover-wrap {\n  display: block !important;\n  height: 82px;\n  width: 108px;\n}\n.mini-profile-wrap .user-stats-followed {\n  float: inherit;\n}\n.mini-profile-wrap .user-info-container {\n  display: inline-block;\n}\n.mini-profile-wrap .stats-wrap {\n  color: #adadad;\n  font-size: 13px;\n  font-weight: bold;\n  margin-bottom: -2px;\n}\n.mini-profile-wrap .cover-stat {\n  margin-right: 10px;\n}\n.mini-profile-wrap .cover-stat:before {\n  margin-right: 2px;\n}\n\n\n", ""]);

// exports


/***/ },

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_follow/_buttonUserSmall": __webpack_require__(60).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(t.s(t.f("user",c,p,1),c,p,0,9,1814,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<div class=\"mini-profile-wrap hide-phone hide-tablet cfix\">");t.b("\n");t.b("\n" + i);t.b("  <div class=\"user-info-container cfix\">");t.b("\n" + i);t.b("    <a target=\"_blank\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" class=\"user-image-wrap user-image-link\">");t.b("\n" + i);t.b("      <img src=\"");t.b(t.v(t.d("images.115",c,p,0)));t.b("\" class=\"user-image\">");t.b("\n" + i);t.b("    </a>");t.b("\n");t.b("\n" + i);t.b("    <div class=\"user-info\">");t.b("\n" + i);t.b("      <a target=\"_blank\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" class=\"user-name\">");t.b(t.v(t.f("display_name",c,p,0)));t.b("</a>");t.b("\n" + i);t.b("      <a target=\"_blank\" href=\"");t.b(t.v(t.f("location_link",c,p,0)));t.b("\" class=\"location-link beicons-pre beicons-pre-location\">");if(t.s(t.f("city",c,p,1),c,p,0,474,484,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.v(t.f("city",c,p,0)));t.b(", ");});c.pop();}if(t.s(t.f("state",c,p,1),c,p,0,503,514,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.v(t.f("state",c,p,0)));t.b(", ");});c.pop();}if(t.s(t.f("country",c,p,1),c,p,0,536,547,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.v(t.f("country",c,p,0)));});c.pop();}t.b("</a>");t.b("\n" + i);t.b("    </div> <!-- .user-info -->");t.b("\n" + i);t.b("  </div> <!-- .user-info-container -->");t.b("\n");t.b("\n" + i);t.b(t.rp("<lib/_follow/_buttonUserSmall0",c,p,"  "));t.b("\n" + i);if(t.s(t.f("has_latest_projects",c,p,1),c,p,0,698,1327,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <a target=\"_blank\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" class=\"cfix user-view-link gallery-projects-wrap\">");t.b("\n" + i);t.b("      <ul class=\"project-cover-container\">");t.b("\n" + i);if(t.s(t.f("latest_projects",c,p,1),c,p,0,855,1003,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <li class=\"project-cover-wrap\">");t.b("\n" + i);t.b("          ");if(t.s(t.d("covers.115",c,p,1),c,p,0,921,969,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<img src=\"");t.b(t.v(t.d("covers.115",c,p,0)));t.b("\" class=\"project-cover\">");});c.pop();}t.b("\n" + i);t.b("        </li>");t.b("\n" + i);});c.pop();}t.b("      </ul> <!-- .project-cover-container -->");t.b("\n" + i);t.b("      <span class=\"gallery-cover-overlay\">");t.b("\n" + i);t.b("        <div class=\"gallery-cover-overlay-text\">");if(t.s(t.f("translate",c,p,1),c,p,0,1175,1211,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("user_cover_view_profile|View Profile");});c.pop();}t.b("&nbsp;<span class=\"rarr\">&rarr;</span></div>");t.b("\n" + i);t.b("      </span>");t.b("\n" + i);t.b("    </a> <!-- .gallery-projects-wrap -->");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("stats",c,p,1),c,p,0,1365,1768,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <div class=\"stats-wrap\">");t.b("\n");t.b("\n" + i);t.b("    <span class=\"cover-stat beicons-pre beicons-pre-eye cover-stat-views\">");t.b("\n" + i);t.b("      ");t.b(t.v(t.f("views",c,p,0)));t.b("\n" + i);t.b("    </span>");t.b("\n");t.b("\n" + i);t.b("    <span class=\"cover-stat beicons-pre beicons-pre-thumb cover-stat-appreciations\">");t.b("\n" + i);t.b("      ");t.b(t.v(t.f("appreciations",c,p,0)));t.b("\n" + i);t.b("    </span>");t.b("\n");t.b("\n" + i);t.b("    <span class=\"cover-stat beicons-pre beicons-pre-followers user-stats-followed\">");t.b("\n" + i);t.b("      ");t.b(t.v(t.f("followers",c,p,0)));t.b("\n" + i);t.b("    </span>");t.b("\n" + i);t.b("  </div> <!-- .stats-wrap -->");t.b("\n" + i);});c.pop();}t.b("</div> <!-- .mini-profile-wrap -->");t.b("\n" + i);});c.pop();}return t.fl(); },partials: {"<lib/_follow/_buttonUserSmall0":{name:"lib/_follow/_buttonUserSmall", partials: {}, subs: {  }}}, subs: {  }}, "{{#user}}\n<div class=\"mini-profile-wrap hide-phone hide-tablet cfix\">\n\n  <div class=\"user-info-container cfix\">\n    <a target=\"_blank\" href=\"{{url}}\" class=\"user-image-wrap user-image-link\">\n      <img src=\"{{images.115}}\" class=\"user-image\">\n    </a>\n\n    <div class=\"user-info\">\n      <a target=\"_blank\" href=\"{{url}}\" class=\"user-name\">{{display_name}}</a>\n      <a target=\"_blank\" href=\"{{location_link}}\" class=\"location-link beicons-pre beicons-pre-location\">{{#city}}{{city}}, {{/city}}{{#state}}{{state}}, {{/state}}{{#country}}{{country}}{{/country}}</a>\n    </div> <!-- .user-info -->\n  </div> <!-- .user-info-container -->\n\n  {{>lib/_follow/_buttonUserSmall}}\n\n  {{#has_latest_projects}}\n    <a target=\"_blank\" href=\"{{url}}\" class=\"cfix user-view-link gallery-projects-wrap\">\n      <ul class=\"project-cover-container\">\n    {{#latest_projects}}\n        <li class=\"project-cover-wrap\">\n          {{#covers.115}}<img src=\"{{covers.115}}\" class=\"project-cover\">{{/covers.115}}\n        </li>\n    {{/latest_projects}}\n      </ul> <!-- .project-cover-container -->\n      <span class=\"gallery-cover-overlay\">\n        <div class=\"gallery-cover-overlay-text\">{{#translate}}user_cover_view_profile|View Profile{{/translate}}&nbsp;<span class=\"rarr\">&rarr;</span></div>\n      </span>\n    </a> <!-- .gallery-projects-wrap -->\n  {{/has_latest_projects}}\n\n  {{#stats}}\n  <div class=\"stats-wrap\">\n\n    <span class=\"cover-stat beicons-pre beicons-pre-eye cover-stat-views\">\n      {{views}}\n    </span>\n\n    <span class=\"cover-stat beicons-pre beicons-pre-thumb cover-stat-appreciations\">\n      {{appreciations}}\n    </span>\n\n    <span class=\"cover-stat beicons-pre beicons-pre-followers user-stats-followed\">\n      {{followers}}\n    </span>\n  </div> <!-- .stats-wrap -->\n  {{/stats}}\n</div> <!-- .mini-profile-wrap -->\n{{/user}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 98:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_profileListItem": __webpack_require__(63).template,"lib/_follow/_userLink": __webpack_require__(76).template,"lib/_follow/_buttonUser": __webpack_require__(129).template,"lib/_message/_button": __webpack_require__(241).template,"lib/_follow/_buttonUserSmall": __webpack_require__(60).template,"lib/_message/_buttonSmall": __webpack_require__(209).template,"lib/_follow/_buttonAll": __webpack_require__(127).template,"lib/_follow/_buttonAllSmall": __webpack_require__(128).template,"project/_blocks/_ownerEditButton": __webpack_require__(254).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"project-owner-info");if(t.s(t.f("has_multiple_owners",c,p,1),c,p,0,278,298,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" multiple-owner-info");});c.pop();}if(!t.s(t.f("has_multiple_owners",c,p,1),c,p,1,0,0,"")){t.b(" single-owner-info");};t.b(" ");t.sub("ownerInfoClasses",c,p,i);t.b("\">");t.b("\n" + i);if(!t.s(t.f("has_multiple_owners",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("owners",c,p,1),c,p,0,476,513,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_profileListItem0",c,p,"      "));});c.pop();}};if(t.s(t.f("has_multiple_owners",c,p,1),c,p,0,578,1175,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"project-owner-avatar\">");t.b("\n" + i);if(t.s(t.f("owners",c,p,1),c,p,0,635,707,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <img src=\"");t.b(t.v(t.d("images.115",c,p,0)));t.b("\" class=\"multiple-owner-avatar\">");t.b("\n" + i);});c.pop();}t.b("    </div>");t.b("\n" + i);t.b("    <div class=\"profile-list-name tooltipi-container\">");t.b("\n" + i);t.b("      <span class=\"multiple-owners-name\">");if(t.s(t.f("translate",c,p,1),c,p,0,840,879,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_multiple_owners|Multiple Owners");});c.pop();}t.b("</span>");t.b("\n" + i);t.b("      <div class=\"tooltipi tooltipi-white multiple-owners-list\">");t.b("\n" + i);if(t.s(t.f("owners",c,p,1),c,p,0,985,1137,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_profileListItem2",c,p,""));});c.pop();}t.b("      </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(!t.s(t.f("is_owner",c,p,1),c,p,1,0,0,"")){if(!t.s(t.f("has_multiple_owners",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("owners",c,p,1),c,p,0,1263,2195,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <div class=\"project-owner-actions ");t.sub("ownerActionClasses",c,p,i);t.b("\">");t.b("\n" + i);t.b("          <div class=\"hide-phone js-hide-phone\">");t.b("\n" + i);if(t.s(t.d(".",c,p,1),c,p,0,1420,1534,"{{ }}")){t.rs(c,p,function(c,p,t){t.sub("followButton",c,p,i);});c.pop();}if(t.s(t.d(".",c,p,1),c,p,0,1557,1710,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_message/_button4",c,p,""));});c.pop();}t.b("          </div>");t.b("\n" + i);t.b("          <div class=\"show-phone\">");t.b("\n" + i);if(t.s(t.d(".",c,p,1),c,p,0,1787,1848,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_follow/_buttonUserSmall5",c,p,"              "));});c.pop();}if(t.s(t.d(".",c,p,1),c,p,0,1873,2150,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("              <div class=\"profile-action user-message\">");t.b("\n" + i);t.b(t.rp("<lib/_message/_buttonSmall6",c,p,""));t.b("              </div>");t.b("\n" + i);});c.pop();}t.b("          </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);});c.pop();}};t.b("\n" + i);if(t.s(t.f("has_multiple_owners",c,p,1),c,p,0,2265,2648,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <div class=\"project-owner-actions follow-all-container ");t.sub("ownerActionClasses",c,p,i);t.b("\">");t.b("\n" + i);t.b("        <div class=\"hide-phone js-hide-phone\">");t.b("\n" + i);t.sub("followButtonAll",c,p,i);t.b("        </div>");t.b("\n" + i);t.b("        <div class=\"show-phone\">");t.b("\n" + i);t.b(t.rp("<lib/_follow/_buttonAllSmall8",c,p,"          "));t.b("        </div>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);});c.pop();}};t.b("\n" + i);if(!t.s(t.f("is_editor",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("is_owner",c,p,1),c,p,0,2724,2927,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <div class=\"project-owner-actions ");t.sub("ownerActionClasses",c,p,i);t.b("\">");t.b("\n" + i);t.sub("editButton",c,p,i);t.b("      </div>");t.b("\n" + i);});c.pop();}};if(t.s(t.f("is_editor",c,p,1),c,p,0,2974,3339,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"project-owner-actions\">");t.b("\n" + i);if(!t.s(t.f("has_multiple_owners",c,p,1),c,p,1,0,0,"")){t.sub("followButton",c,p,i);};if(t.s(t.f("has_multiple_owners",c,p,1),c,p,0,3198,3301,"{{ }}")){t.rs(c,p,function(c,p,t){t.sub("followButtonAll",c,p,i);});c.pop();}t.b("    </div>");t.b("\n" + i);});c.pop();}t.b("</div>");t.b("\n");return t.fl(); },partials: {"<lib/_profileListItem0":{name:"lib/_profileListItem", partials: {}, subs: {  }},"<lib/_profileListItem2":{name:"lib/_profileListItem", partials: {"<follow_linklib/_follow/_userLink1":{name:"lib/_follow/_userLink", partials: {}, subs: {  }}}, subs: { "follow_link": function(c,p,t,i) {t.b(t.rp("<follow_linklib/_follow/_userLink1",c,p,""));} }},"<followButtonlib/_follow/_buttonUser3":{name:"lib/_follow/_buttonUser", partials: {}, subs: {  }},"<lib/_message/_button4":{name:"lib/_message/_button", partials: {}, subs: { "classes": function(c,p,t,i) {t.b("project-action user-message");} }},"<lib/_follow/_buttonUserSmall5":{name:"lib/_follow/_buttonUserSmall", partials: {}, subs: {  }},"<lib/_message/_buttonSmall6":{name:"lib/_message/_buttonSmall", partials: {}, subs: { "classes": function(c,p,t,i) {t.b("form-button-light-and-grey form-button form-button-small");} }},"<followButtonAlllib/_follow/_buttonAll7":{name:"lib/_follow/_buttonAll", partials: {}, subs: {  }},"<lib/_follow/_buttonAllSmall8":{name:"lib/_follow/_buttonAllSmall", partials: {}, subs: {  }},"<editButtonproject/_blocks/_ownerEditButton9":{name:"project/_blocks/_ownerEditButton", partials: {}, subs: {  }},"<followButtonlib/_follow/_buttonUser10":{name:"lib/_follow/_buttonUser", partials: {}, subs: {  }},"<followButtonAlllib/_follow/_buttonAll11":{name:"lib/_follow/_buttonAll", partials: {}, subs: {  }}}, subs: { "ownerInfoClasses": function(c,p,t,i) {},"ownerActionClasses": function(c,p,t,i) {},"followButton": function(c,p,t,i) {t.b(t.rp("<followButtonlib/_follow/_buttonUser10",c,p,"          "));},"followButtonAll": function(c,p,t,i) {t.b(t.rp("<followButtonAlllib/_follow/_buttonAll11",c,p,"          "));},"editButton": function(c,p,t,i) {t.b(t.rp("<editButtonproject/_blocks/_ownerEditButton9",c,p,"          "));} }}, "{{!this template is also used within the owner bar in the project footer}}\n{{!TODO: account for looking at your own project}}\n{{!TODO: should we always serve the larger image or use picturefill to serve it when necessary?}}\n<div class=\"project-owner-info{{#has_multiple_owners}} multiple-owner-info{{/has_multiple_owners}}{{^has_multiple_owners}} single-owner-info{{/has_multiple_owners}} {{$ownerInfoClasses}}{{/ownerInfoClasses}}\">\n  {{^has_multiple_owners}}\n    {{#owners}}\n      {{>lib/_profileListItem}}\n    {{/owners}}\n  {{/has_multiple_owners}}\n  {{#has_multiple_owners}}\n    <div class=\"project-owner-avatar\">\n      {{#owners}}\n        <img src=\"{{images.115}}\" class=\"multiple-owner-avatar\">\n      {{/owners}}\n    </div>\n    <div class=\"profile-list-name tooltipi-container\">\n      <span class=\"multiple-owners-name\">{{#translate}}project_multiple_owners|Multiple Owners{{/translate}}</span>\n      <div class=\"tooltipi tooltipi-white multiple-owners-list\">\n        {{#owners}}\n          {{<lib/_profileListItem}}\n            {{$follow_link}}{{>lib/_follow/_userLink}}{{/follow_link}}\n          {{/lib/_profileListItem}}\n        {{/owners}}\n      </div>\n    </div>\n  {{/has_multiple_owners}}\n\n  {{^is_owner}}\n    {{^has_multiple_owners}}\n      {{#owners}}\n        <div class=\"project-owner-actions {{$ownerActionClasses}}{{/ownerActionClasses}}\">\n          <div class=\"hide-phone js-hide-phone\">\n          {{#.}}\n            {{$followButton}}\n              {{>lib/_follow/_buttonUser}}\n            {{/followButton}}\n          {{/.}}\n          {{#.}}\n            {{<lib/_message/_button}}\n              {{$classes}}project-action user-message{{/classes}}\n            {{/lib/_message/_button}}\n          {{/.}}\n          </div>\n          <div class=\"show-phone\">\n            {{#.}}\n              {{>lib/_follow/_buttonUserSmall}}\n            {{/.}}\n            {{#.}}\n              <div class=\"profile-action user-message\">\n              {{<lib/_message/_buttonSmall}}\n                {{$classes}}form-button-light-and-grey form-button form-button-small{{/classes}}\n              {{/lib/_message/_buttonSmall}}\n              </div>\n            {{/.}}\n          </div>\n        </div>\n      {{/owners}}\n    {{/has_multiple_owners}}\n\n    {{#has_multiple_owners}}\n      <div class=\"project-owner-actions follow-all-container {{$ownerActionClasses}}{{/ownerActionClasses}}\">\n        <div class=\"hide-phone js-hide-phone\">\n          {{$followButtonAll}}\n            {{>lib/_follow/_buttonAll}}\n          {{/followButtonAll}}\n        </div>\n        <div class=\"show-phone\">\n          {{>lib/_follow/_buttonAllSmall}}\n        </div>\n      </div>\n    {{/has_multiple_owners}}\n  {{/is_owner}}\n\n  {{^is_editor}}\n    {{#is_owner}}\n      <div class=\"project-owner-actions {{$ownerActionClasses}}{{/ownerActionClasses}}\">\n        {{$editButton}}\n          {{>project/_blocks/_ownerEditButton}}\n        {{/editButton}}\n      </div>\n    {{/is_owner}}\n  {{/is_editor}}\n  {{#is_editor}}\n    <div class=\"project-owner-actions\">\n      {{^has_multiple_owners}}\n        {{$followButton}}\n          {{>lib/_follow/_buttonUser}}\n        {{/followButton}}\n      {{/has_multiple_owners}}\n      {{#has_multiple_owners}}\n        {{$followButtonAll}}\n          {{>lib/_follow/_buttonAll}}\n        {{/followButtonAll}}\n      {{/has_multiple_owners}}\n    </div>\n  {{/is_editor}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 99:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(96);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(59)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./mini.css", function() {
			var newContent = require("!!./../../../../node_modules/css-loader/index.js!./mini.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }

},[1437]);