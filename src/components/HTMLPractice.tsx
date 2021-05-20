
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
    </main>
  );
}

export default HTMLPractice;
