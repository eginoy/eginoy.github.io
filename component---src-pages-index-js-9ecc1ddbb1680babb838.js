(self.webpackChunkeginoy_blog=self.webpackChunkeginoy_blog||[]).push([[678],{8505:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#d8d8e8","images":{"fallback":{"src":"/static/1c151bd1b091cbedba3870d9ed1612c2/d24ee/profile-pic.jpg","srcSet":"/static/1c151bd1b091cbedba3870d9ed1612c2/d24ee/profile-pic.jpg 50w,\\n/static/1c151bd1b091cbedba3870d9ed1612c2/64618/profile-pic.jpg 100w","sizes":"50px"},"sources":[{"srcSet":"/static/1c151bd1b091cbedba3870d9ed1612c2/d4bf4/profile-pic.avif 50w,\\n/static/1c151bd1b091cbedba3870d9ed1612c2/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/1c151bd1b091cbedba3870d9ed1612c2/3faea/profile-pic.webp 50w,\\n/static/1c151bd1b091cbedba3870d9ed1612c2/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')},9535:function(e,t,l){"use strict";var a=l(7294),i=l(5444),c=l(154);t.Z=function(){var e,t=null===(e=(0,i.useStaticQuery)("3257411868").site.siteMetadata)||void 0===e?void 0:e.author;return a.createElement("div",{className:"bio"},a.createElement(c.S,{className:"bio-avatar",layout:"fixed",formats:["AUTO","WEBP","AVIF"],src:"../images/profile-pic.jpg",width:50,height:50,quality:95,alt:"Profile picture",__imageData:l(8505)}),(null==t?void 0:t.name)&&a.createElement("p",null,"Written by ",a.createElement("strong",null,t.name)," ",(null==t?void 0:t.summary)||null," "))}},7704:function(e,t,l){"use strict";l.r(t);var a=l(7294),i=l(5444),c=l(9535),r=l(7198),n=l(3751);t.default=function(e){var t,l=e.data,s=e.location,o=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",d=l.allMarkdownRemark.nodes;return 0===d.length?a.createElement(r.Z,{location:s,title:o},a.createElement(n.Z,{title:"All posts"}),a.createElement(c.Z,null),a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):a.createElement(r.Z,{location:s,title:o},a.createElement(n.Z,{title:"All posts"}),a.createElement(c.Z,null),a.createElement("ol",{style:{listStyle:"none"}},d.map((function(e){var t=e.frontmatter.title||e.fields.slug;return a.createElement("li",{key:e.fields.slug},a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",null,a.createElement("h2",null,a.createElement(i.Link,{to:e.fields.slug,itemProp:"url"},a.createElement("span",{itemProp:"headline"},t))),a.createElement("small",null,e.frontmatter.date)),a.createElement("section",null,a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-9ecc1ddbb1680babb838.js.map