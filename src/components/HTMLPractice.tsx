
const HTMLPractice = () => {
  return (
    <main>
      <h1>Testing HTML Tags</h1>
      <p>I'm trying out HTML tags that I don't use often. Practicing writing these tags will build the muscle memory needed to use them when they're needed.</p>
      <p>I'm using the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">MDN HTML elements reference</a> as a guide. Whenever I see an element I don't use often, I'm creating a section for it.</p>
      <p>From here on out, I will likely re-write information from the WHATWG specification or from MDN. Do not intend to plagairize - merely rewrite what they have written.</p>
      <h2>Content sectioning</h2>
      <h3>
        <code>address</code>
      </h3>
      <p>The <code>address</code> element represents the contect information for its nearest <code>article</code> or <code>body</code> ancestor. If that is the <code>body</code> element, then the contact information applies to the document as a whole.</p>
      <p>Example: Contact me by using Twitter at <address><a href="https://www.twitter.com/kzeillmann">@kzeillmann</a></address></p>
      <h3>
        <code>article</code>
      </h3>
      <p>The <code>article</code> element represents a complete, or self-contained, composition in a document, page, application, or site and that is, in principle, independently distributable or reusable, e.g. in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content</p>
      <p>When <code>article</code> elements are neste, the inner <code>article</code> represents articles that are in principle related to the contents of the outer article. For instance, a blog entry on a site that accepts user-submitted coments could represent the comments as <code>article</code> elements nested within the <code>article</code> for the blog entry.</p>
      <article>This is the content of the article.</article>
      <h3>
        <code>aside</code>
      </h3>
      <p>The <code>aside</code> element represents a section of a page that consists of content that is tangentially related to the content around the <code>aside</code> element, and which could be considered separate from that content. Such sections are often represneted as sidebars in printed typography.</p>
      <p>The element can be used for typographical effects like pull quotes or sidebars, for advertising, for groups of <code>nav</code> elements, and for other content that is considered separate from the main content of the page.</p>
      <aside>
        <h1>Switzerland</h1>
        <p>Switzerland, a land-locked country in the middle of geographic Europe, has not joined the geopolitical European Union, though it is a signatory to a number of European treaties.</p>
      </aside>
      <h2>Text content</h2>
      <h3>
        <code>blockquote</code>
      </h3>
      <p>The <code>blockquote</code> represents a section that is quoted from another source.</p>
      <p> Content inside a <code>blockquote</code> must be quoted from another source, whose address, if it has one, may be cited in the <code>cite</code> attribute/</p>
      <p>If a <code>cite</code> attribute is present, it must be a valid URL potentially surrounded by spaces. To obtain the corresponding citation link, the value of the attirubte must be parsed relative to the element's node document. User agents may allow users to follow such citation links, but thye are primarily intended for private use, not for readers.</p>
      <blockquote>
        <p>[Jane] then said that she liked [...] fish</p>
      </blockquote>
      <h3>
        Description List
      </h3>
      <p>The HTML <code>dl</code> element represents a description list. The lement encloses a list of groups of terms (specified using the <code>dt</code> element) and descriptions (provided by <code>dd</code> elements). Common uses for this element are to imlement a glossary or to display metadata</p>
      <p>Cryptids of Cornwall:</p>
      <dl>
        <dt>Beast of Bodmin</dt>
        <dd>A large feline inhabiting Bodmin Moor.</dd>

        <dt>Morgawr</dt>
        <dd>A large sea serpent.</dd>

        <dt>Owlman</dt>
        <dd>A giant owl-like creature</dd>
      </dl>
      <h3>
        <code>figure</code>
      </h3>
      <p>The HTML <code>figure</code> represents self-contained content, potentially with an optional caption, which is specified using the <code>figcaption</code> element. The figure, its caption, and its contents are referenced as a single unit.</p>
      <figure>
        <img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/elephant-660-480.jpg" alt="Elephant at sunset" />
        <figcaption>An elephant at sunset</figcaption>
      </figure>
      <h3>
        <code>pre</code>
      </h3>
      <p>The HTML <code>pre</code> element represents preformatted text which is to be presented exactly as writen in the HTML file. The text is typically rendered using a non-proportional (monospace) font. Whitespace inside this element is displayed as written.</p>
      <pre>{`
            ___________________________
            < I'm an expert in my field. >
              ---------------------------
                    \   ^__^
                      \  (oo)\_______
                        (__)\       )\/\
                            ||----w |
                            ||     ||
              
      `}</pre>

      <p>Note - this page is using JSX and must use a template literal to get it to display correctly</p>
      <h2>Inline text semantics</h2>
      <h3>
        <code>abbr</code>
      </h3>
      <p>The HTML Abbreviation element (<code>abbr</code>) represents an abbreviation or acronym; the optional <code>title</code> attribute can provide an expansion or description for the abbreviation. If present, <code>title</code> must contain this full description and nothing else.</p>
      <p>You can use <abbr title="Cascading Style Sheets">CSS</abbr> to style your <abbr title="HyperText Markup Language">HTML</abbr>.</p>
      <h3>
        <code>cite</code>
      </h3>
      <p>The <code>cite</code> element represents the title of a work. This can be a work that is being quoted or referenced in detail (i.e. a citation), or it can just be a work that is mentioned in passing.</p>
      <p>My favorite book is <cite>Les Misérables</cite>.</p>
      <h3>
        <code>data</code>
      </h3>
      <p>The <code>data</code> element represents its contents, along with a machine-readable form of those contents in the <code>value</code> attribute.</p>
      <p>The <code>value</code> attribute must be present. Its value must be a representation of the element's contents in a machine-readable format.</p>
      <p>You can use the <code>data</code> attribute to mark numbers that are written out with their numerical value like this: <data value="8">eight</data>.</p>
      <h3>
        <code>dfn</code>
      </h3>
      <p>The <code>dfn</code> element is used to indicate the term being defined within the context of a definition phrase or sentence. The <code>p</code> element, the <code>dt</code>/<code>dt</code> pairing, or the <code>section</code> element which is the nearest ancestor of the <code>dfn</code> is considered to be the definition of the term.</p>
      <p>Example: A <dfn>validator</dfn> is a program that checks for syntax erros in code or documents.</p>
      <h3>
        <code>kbd</code>
      </h3>
      <p>The <code>kbd</code> element represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device. By convention, the user agent defaults to rendering the contents of a <code>kbd</code> element using its default monospace font, although this is not mandated by the HTML standard.</p>
      <p>Example: Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to re-render an MDN page.</p>
      <h3>
        <code>mark</code>
      </h3>
      <p>
        The <code>mark</code> element represents text which is marked or highlighted for reference or notation purposes, due to the marked passage's relevance or importance in the enclosing context.
      </p>
      <p>Example: Several species of <mark>salamander</mark> inhabit the temperate rainforcest of the Pacific Northwest.</p>
      <h3>
        <code>q</code>: Inline Quotation Element
      </h3>
      <p>The <code>q</code> element indicates that the enclosed text is a short inline quotation. Most modern browsers implement this by surrounding the text in quotation marks. The element is intended for short quotations that don't require paragraph breaks; for long quotations use the <code>blockquote</code> element.</p>
      <p>Example: When Dave asks HAL to open the pod bay door, HAL answers: <q cite="https://www.imdb.com/title/tt0062622/quotes/qt0396921">I'm sorry, Dave. I'm afraid I can't do that.</q></p>
      <h3>
        <code>s</code>
      </h3>
      <p>The <code>s</code> element renders a text with a strikethrough. Use the <code>s</code> element to represent things that are no longer relevant or no longer accurate. However, <code>s</code> is not appropriate when indicating document edits; for that, use the <code>del</code> and <code>ins</code> elements, as appropriate.</p>
      <p>Example: <s>There will be a few tickets available at the box office tonight.</s> SOLD OUT!</p>
      <h3><code>samp</code></h3>
      <p>The <code>samp</code> element is used to enclose inline text which represents a sample (or quoted) output from a computer program.</p>
      <p>Example: I was trying to boot my computer but got this message:</p>
      <p> <samp>Keyboard not found <br/> Press F1 to continue</samp></p>
      <h3><code>time</code></h3>
      <p>The <code>time</code> element represents a specific period in time. It may include the <code>datetime</code> attribute to translate dates into a machine-readable format, allowing for better search engine results or custom features such as reminders. </p>
      <p>It may represent one of the following</p>
      <ul>
        <li>A time on a 24-hour clock</li>
        <li>A precise date in the Gregorian calendar (time and timezone optional)</li>
        <li>A valid time duration</li>
      </ul>
      <p>Example: The Cure will be celebrating their 40th anniversary on <time dateTime="2018-07-07">July 7</time></p>
      <p>The concert starts at <time dateTime="20:00">20:00</time> and you'll be able to enjoy the band for at least <time dateTime="PTH230M">2h 30m</time></p>
      <h3><code>var</code></h3>
      <p>The <code>var</code> element represents the name of a variable in a mathematical expression or a programming context. It's usualy presented using an italicized version of the current typeface, although that behavior is browser-dependent</p>
      <p>Example: The volume of a cube is <var>l</var> x <var>w</var> x <var>h</var></p>
      <h2>Image and Multimedia</h2>
      <h3><code>area/map</code></h3>
      <p>The <code>area</code> element defines an area inside an image map that has predefined clickable areas. An image map allows geometric areas of an image to be associated with hypertext link. This element is only used within a <code>map</code> element.</p>
      <p>The <code>map</code> element is used with <code>area</code> elements to define an image map</p>
      <p>Example:</p>
      <map name="infographic">
        <area shape="poly" coords="130,147,200,107,254,219,130,228"
              href="https://developer.mozilla.org/docs/Web/HTML"
              target="_blank" alt="HTML" />
        <area shape="poly" coords="130,147,130,228,6,219,59,107"
              href="https://developer.mozilla.org/docs/Web/CSS"
              target="_blank" alt="CSS" />
        <area shape="poly" coords="130,147,200,107,130,4,59,107"
              href="https://developer.mozilla.org/docs/Web/JavaScript"
              target="_blank" alt="JavaScript" />
      </map>
      <img src="https://interactive-examples.mdn.mozilla.net/media/examples/mdn-info2.png" alt="MDN infographic" useMap="#infographic" />
      <p>Note to self: Why doesn't this work?? I copy-pasted from their website - answer is that dimensions are probably not the same</p>
      <h3><code>audio</code></h3>
      <p>The <code>audio</code> element is used to embed sound content in documents. It may contain one or more audio sources, represented in the <code>src</code> attribute or the <code>source</code> element</p>
      <p>The content inside the opening and closing tags is shown as a fallback in browsers that don't support the element</p>
      <p>Example: </p>
      <figure>
          <figcaption>Listen to the T-Rex</figcaption>
          <audio controls={true} src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3">The audio element is not supported in your browser!</audio>
      </figure>
      <h2>Embedded Content</h2>
      <h3><code>picture</code></h3>
      <p>The <code>picture</code> element contains zero or more <code>source</code> elements and one <code>img</code> element to offer alternative versions of an image for different display/device scenarios.</p>
      <p>The browser will consider each child source and choose teh best match among them. If no matches are found, or the browser doesn't support the picture element, the URL of the elemen'ts src attribute is selected. The selected image is then presented in the space occupied by the img element</p>
      <p>Example: Change the width of the browser window to see the image change.</p>
      <picture>
        <source srcSet="https://interactive-examples.mdn.mozilla.net/media/cc0-images/surfer-240-200.jpg" media="(min-width: 800px)"/>
        <img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/painted-hand-298-332.jpg" alt="" />
      </picture>
      <p>Common use cases for picture:</p>
      <ol>
        <li>Art direction - cropping or modifying images for different <code>media</code> conditions (simpler version of a detailed image on smaller displays, for example)</li>
        <li>Offering alternative image formats, such as AVIF or WEBP, not supported on all browsers</li>
        <li>Saving bandwidth and speeindg page load times - loading most appropraite image for viewer's display</li>
      </ol>
      <h3><code>portal</code></h3>
      <p>The <code>portal</code> element enables the embedding of another HTML page into the current one for the purposes of allowing smoother navigation into new pages. A portal is similar to an iframe. An iframe allows a separate browsing context to be embedded. However, the embedded content of a portal is more limited than that of an iframe. It cannot be interacted with, and therefore is not suitable for embedding widgets into a document. Instead, the portal acts as a preview of the content of another page. It can be navigated into, therefore allowing for seamless transition into the embedded content.</p>
    </main>
  );
}

export default HTMLPractice;
