export default function Index() {
  return (
    <div className="min-h-screen bg-white dark:bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-background border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
            Design Fundamentals
          </h1>
          <p className="text-muted-foreground mt-1">Learn the 5 essential principles</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Article Header */}
        <article className="prose prose-sm sm:prose dark:prose-invert max-w-none">
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-foreground mb-4">
              The 5 UI Fundamentals a Developer Must Know
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-muted-foreground">
              <span className="font-medium">By Jeferson Brito</span>
              <span>October 28, 2025</span>
            </div>
          </div>

          {/* Intro Section */}
          <section className="mb-12">
            <p className="text-lg leading-relaxed text-foreground/90 mb-4">
              Can developers also design? This is a fairly tricky question to answer. Nowadays, with how teams are structured and projects are led, it is common to see developers handing off the design work to designers to focus on development tasks only. But it doesn't have to be that way.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90 mb-4">
              Not every developer is indeed a designer, but that doesn't mean developers can't learn the basics of design and apply them to their work.
            </p>
            <p className="text-base leading-relaxed text-foreground/80 mb-4">
              Understanding the fundamentals that build user interfaces is essential for any developer who wants to create great products. From colors to visual hierarchy, these principles will help you create better user experiences even without being a designer.
            </p>
            <p className="text-base leading-relaxed text-foreground/80">
              For those who think you need to have an artistic talent to be a designer, I'll show you 5 fundamental concepts in design that will improve any piece of UI you create.
            </p>
          </section>

          {/* Fundamental 1: Color */}
          <section className="mb-12 pb-12 border-b border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Color</h3>
                <p className="text-muted-foreground mt-1">
                  The foundation of visual perception and emotional impact
                </p>
              </div>
            </div>

            <p className="text-base leading-relaxed text-foreground/80 mb-4">
              Color is the first UI design fundamental that changes the first impression of a user experience. When you visit a website or use an app, your eye is exposed to color. Every design has some sort of personality that is expressed through color. It can communicate securely and professionally as a baking website, or fun and playful as a game app, without any words.
            </p>

            <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">Color Theory</h4>
            <p className="text-base leading-relaxed text-foreground/80 mb-4">
              Color theory is a set of principles used to create harmonious color combinations. It's based on the color wheel, which is a circular diagram that shows the relationships between colors.
            </p>
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              But how do we know which colors work well together? Well, some color schemes can help us match visuals effectively using the color wheel.
            </p>

            <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-6 mb-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-secondary mt-0.5">•</span>
                  <span className="text-foreground/80"><strong>Monochromatic:</strong> Uses one color in different shades and tints.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-secondary mt-0.5">•</span>
                  <span className="text-foreground/80"><strong>Complementary:</strong> Uses two colors that are opposite each other on the color wheel.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-secondary mt-0.5">•</span>
                  <span className="text-foreground/80"><strong>Triadic:</strong> Uses three colors that are evenly spaced around the color wheel, which together form a triangle.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-secondary mt-0.5">•</span>
                  <span className="text-foreground/80"><strong>Analogous:</strong> Uses colors that are next to each other on the color wheel.</span>
                </li>
              </ul>
            </div>

            <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">Applying Color to UI</h4>
            <p className="text-base leading-relaxed text-foreground/80 mb-4">
              Applying color in user interfaces is about tinting squares based on a color palette. A color palette is a set of colors that are used in a design to create a cohesive look and feel.
            </p>
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              80-20 and 60-30-10 are common rules used to choose how your colors are going to be applied on a design. The 60-30-10 rule, for example, is a guideline where you apply 60% of your design on a primary color, 30% on a secondary, and 10% on an accent color.
            </p>

            <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">General Tips for Colors</h4>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Less is more</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Consider color saturation</strong> when creating variations of a color</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Be consistent</strong> where each color is being used</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Consider color contrast</strong> with text when mixing them</span>
              </li>
            </ul>
          </section>

          {/* Fundamental 2: Typography */}
          <section className="mb-12 pb-12 border-b border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Typography</h3>
                <p className="text-muted-foreground mt-1">
                  The art of making text readable and beautiful
                </p>
              </div>
            </div>

            <p className="text-base leading-relaxed text-foreground/80 mb-4">
              Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed. It is beyond just choosing the most aesthetic font. Great typography can tell a story like anyone could, make text pleasant to read, and help establish a brand identity.
            </p>
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              Take any sort of graphic design that isn't finished and choose the proper font and color, and you will see a completely drastic change in the result. These two fundamentals are just powerful ingredients to start with.
            </p>

            <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">Choosing Typefaces</h4>
            <p className="text-base leading-relaxed text-foreground/80 mb-4">
              Choosing a typeface is just as tricky as trying to estimate a ticket in a sprint. Designers often spend a lot of time mixing and matching different pairs of fonts to find the perfect combination. There are some general rules of thumb that can help you choose the right typeface for your project.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-primary mt-0.5">•</span>
                  <span className="text-foreground/80"><strong>Serif:</strong> Fonts with small lines or strokes attached to the end of the character. Often used in print media for readability (e.g., Merriweather, Times New Roman, Georgia).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-primary mt-0.5">•</span>
                  <span className="text-foreground/80"><strong>Sans-serif:</strong> Fonts without small lines or strokes at the end. Often used in digital media for legibility (e.g., Raleway, Roboto, Open Sans).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-primary mt-0.5">•</span>
                  <span className="text-foreground/80"><strong>Monospace:</strong> Fonts where each character takes up the same space. Used in coding environments (e.g., Source Code Pro, Fira Code, Courier New).</span>
                </li>
              </ul>
            </div>

            <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">Line-Height and Letter-Spacing</h4>
            <p className="text-base leading-relaxed text-foreground/80 mb-4">
              We spend a lot of time on our screens reading text, so it's important to make sure that the text is easy to read and visually appealing. Fonts are designed to have a certain amount of space between letters, known as letter-spacing. The rule of thumb is to always keep a narrow letter-spacing in the main UI text and larger letter-spacing in headings and so on.
            </p>
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              For even better reading experience, make sure your paragraphs are not too wide (between 45 and 75 characters per line) and the spacing between paragraph lines, so called line-height, is enough. Because if lines are too long, it makes it harder for people to gauge where the line starts and ends.
            </p>

            <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">General Tips for Typography</h4>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Opposites attract:</strong> serif with sans-serif, small with tall, decorative with simple</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Stick with fixed font-weights</strong> like normal (400/500) and bold (700/800)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Limit typefaces to 2-3</strong> for consistency</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Use a type scale</strong> to create consistent hierarchy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Line-height matters:</strong> taller for small text (1.5), shorter for large text (1.3)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Don't center long text</strong> – left-align always looks better</span>
              </li>
            </ul>
          </section>

          {/* Fundamental 3: Visual Hierarchy */}
          <section className="mb-12 pb-12 border-b border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Visual Hierarchy</h3>
                <p className="text-muted-foreground mt-1">
                  Guiding users through intentional design choices
                </p>
              </div>
            </div>

            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              Visual hierarchy is the arrangement of elements in a way that implies importance. We use visual hierarchy to guide the user through a product. For example, in a website, we want users to first see the logo, then the main headline, call to action, and then the rest of the content, and this is done by giving visual clues such as size, color, contrast, and spacing to different elements.
            </p>

            <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">How Can We Establish Visual Hierarchy?</h4>
            <p className="text-base leading-relaxed text-foreground/80 mb-4">
              Culturally, humans usually look at a page by quickly scanning with our eyes from top to bottom, left to right, kind of a zig-zag pattern. So digital designers often play with some visual cues to guide users to different elements within a user interface to help users understand content and accomplish their goals.
            </p>

            <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">Font Size and Weight</h4>
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              When talking about text readability and hierarchy, font-size and font-weight are the most important factors. It's the first one or two sentences that draw our attention on the main page of a news site. In the same way that big headlines in newspapers grab our attention, large and bold fonts help stand out and can emphasize important information and call to action.
            </p>

            <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">Color and Contrast</h4>
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              We're visually drawn to bright colors and high contrast areas, especially when they are surrounded by more muted colors or backgrounds. The strategy is simple: play with color to direct users to key elements on the screen.
            </p>

            <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">Spacing (White Space)</h4>
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              White space, or just spacing, is the space between elements in a design. It is a vital part of UI designs and helps to create a sense of organization and structure. Thoughtful spacing between elements creates visual interest and shows users how different UI elements are related.
            </p>
            <p className="text-base leading-relaxed text-foreground/80">
              As always, it's important to note that when everything is competing for attention, we want to try to cut down the number of elements visible at once or de-emphasize some elements on the UI so we can have more harmony and avoid chaotic environments.
            </p>
          </section>

          {/* Fundamental 4: Contrast */}
          <section className="mb-12 pb-12 border-b border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Contrast</h3>
                <p className="text-muted-foreground mt-1">
                  Making elements stand out and drawing attention
                </p>
              </div>
            </div>

            <p className="text-base leading-relaxed text-foreground/80 mb-4">
              Contrast is the difference between two or more elements that makes them stand out from each other. It's the reason why we can see and distinguish objects in our environment. Every element in a user interface, by nature, has a certain amount of contrast based on the background.
            </p>
            <p className="text-base leading-relaxed text-foreground/80 mb-4">
              Contrast is great for UX and can be used to prioritize areas of a design and draw attention to certain areas. When you use bold text to emphasize a text element, you are drawing attention to it by increasing the contrast between the bold text and the regular text, which is essentially more pixels used for text rendering.
            </p>
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              As with anything that stands out, it can also be distracting if overused. When you run into a situation where the main element of an interface is not standing out enough, instead of trying to further emphasize the element you want to draw attention to, figure out how you can de-emphasize the elements around it. This can be done by reducing the size, weight, or color intensity of the surrounding elements.
            </p>

            <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">Accessibility and Contrast</h4>
            <p className="text-base leading-relaxed text-foreground/80 mb-4">
              One key aspect of contrast is accessibility. To make sure your designs are accessible, the Web Content Accessibility Guidelines (WCAG) recommend a minimum contrast ratio of 4.5:1 for normal text (paragraphs, links, etc), and 3:1 for large text, such as headings. This ensures that text is readable for users with visual impairments, including those with color blindness.
            </p>
            <p className="text-base leading-relaxed text-foreground/80">
              I personally advise avoiding using colors with a high lightness value, such as yellow or light gray, for text. These colors can be hard to read and easily violate the WCAG contrast ratio. Instead, try techniques such as rotating the hue to a slightly different color or background, for instance, a soft white instead of pure white or a different shade of dark instead of pure black. In any case, check out the contrast checker tool to guarantee your text is readable.
            </p>
          </section>

          {/* Fundamental 5: Alignment */}
          <section className="mb-12 pb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold text-xl">
                5
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Alignment</h3>
                <p className="text-muted-foreground mt-1">
                  Creating order and balance in your layout
                </p>
              </div>
            </div>

            <p className="text-base leading-relaxed text-foreground/80 mb-4">
              Alignment is the design process of ensuring every element is positioned correctly in relation to other elements. It is an aspect of design that gives us a sense of order and balance. In fact, we see alignment in nature all the time that can be observed in biological and astronomical alignment, from cellular to planetary orbits. If something is out of alignment, it will be very noticeable how inconsistent the design can be.
            </p>
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              Alignment of text is essential for readability, as bad text can be hard to read and understand. In general, we should left-align text for English-speaking users. Center-aligned text can be used for short blocks of text like headings or titles, but it should be avoided for long paragraphs.
            </p>
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              In the case of numbers in table layouts, we should right-align numbers for better readability and comparison. This is because numbers are read from left to right, and right-alignment allows the decimal points to line up vertically, making it easier to compare values.
            </p>
            <p className="text-base leading-relaxed text-foreground/80">
              When using design tools such as Figma or Penpot, we can use the built-in alignment tools to ensure that elements are properly aligned. We can also use grids and guides to help us maintain consistent spacing and alignment throughout our designs.
            </p>
          </section>

          {/* Conclusion */}
          <section className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Conclusion</h3>
            <p className="text-base leading-relaxed text-foreground/80 mb-4">
              In summary, developers can design too! By understanding and applying these 5 fundamental concepts of UI design: <strong>color, typography, visual hierarchy, contrast, and alignment</strong>, developers can create and deliver more visually appealing and user-friendly interfaces.
            </p>
            <p className="text-base leading-relaxed text-foreground/80">
              I advise you to start with color and typography (choose great fonts!) and then build upon each foundation with iterations and feedback from your design and product team.
            </p>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50 mt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <p className="text-sm text-muted-foreground text-center">
            © 2025 Design Fundamentals. By Jeferson Brito. Learn design basics for better development.
          </p>
        </div>
      </footer>
    </div>
  );
}
