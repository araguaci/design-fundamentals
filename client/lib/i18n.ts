/**
 * Sistema de Internacionalização (i18n)
 * Suporta pt_BR (padrão) e en
 */

export type Locale = 'pt_BR' | 'en';

export const defaultLocale: Locale = 'pt_BR';

export const supportedLocales: Locale[] = ['pt_BR', 'en'];

// Traduções
export const translations = {
  pt_BR: {
    // Navigation
    nav: {
      home: 'Início',
      examples: 'Exemplos',
      resources: 'Recursos',
      bestPractices: 'Boas Práticas',
    },
    // Homepage
    home: {
      title: 'Os 5 Fundamentos de UI',
      subtitle: 'Princípios essenciais que todo desenvolvedor deve conhecer',
      author: 'Por Jeferson Brito',
      date: '28 de Outubro de 2025',
      intro: {
        p1: 'Desenvolvedores também podem projetar? Esta é uma questão bastante complicada de responder. Hoje em dia, com a forma como as equipes são estruturadas e os projetos são conduzidos, é comum ver desenvolvedores delegando o trabalho de design para designers para focar apenas em tarefas de desenvolvimento. Mas não precisa ser assim.',
        p2: 'Nem todo desenvolvedor é de fato um designer, mas isso não significa que desenvolvedores não possam aprender o básico de design e aplicá-lo em seu trabalho.',
        p3: 'Entender os fundamentos que constroem interfaces de usuário é essencial para qualquer desenvolvedor que queira criar ótimos produtos. Das cores à hierarquia visual, esses princípios ajudarão você a criar melhores experiências do usuário mesmo sem ser um designer.',
        p4: 'Para aqueles que pensam que você precisa ter talento artístico para ser um designer, vou mostrar 5 conceitos fundamentais em design que melhorarão qualquer interface que você criar.',
      },
      color: {
        title: 'Cor',
        subtitle: 'A base da percepção visual e impacto emocional',
        description: 'A cor é o primeiro fundamento de design de UI que muda a primeira impressão de uma experiência do usuário. Quando você visita um site ou usa um app, seu olho é exposto à cor. Todo design tem algum tipo de personalidade que é expressa através da cor. Pode comunicar segurança e profissionalismo como um site de padaria, ou divertido e lúdico como um app de jogos, sem palavras.',
        theory: {
          title: 'Teoria das Cores',
          p1: 'A teoria das cores é um conjunto de princípios usados para criar combinações de cores harmoniosas. É baseada na roda de cores, que é um diagrama circular que mostra as relações entre as cores.',
          p2: 'Mas como sabemos quais cores funcionam bem juntas? Bem, alguns esquemas de cores podem nos ajudar a combinar visuais efetivamente usando a roda de cores.',
        },
        schemes: {
          monochromatic: 'Monocromático: Usa uma cor em diferentes tons e matizes.',
          complementary: 'Complementar: Usa duas cores que são opostas na roda de cores.',
          triadic: 'Triádico: Usa três cores igualmente espaçadas na roda de cores, que juntas formam um triângulo.',
          analogous: 'Análogo: Usa cores que estão próximas umas das outras na roda de cores.',
        },
        applying: {
          title: 'Aplicando Cor na UI',
          p1: 'Aplicar cor em interfaces de usuário é sobre colorir quadrados baseados em uma paleta de cores. Uma paleta de cores é um conjunto de cores que são usadas em um design para criar uma aparência e sensação coesas.',
          p2: '80-20 e 60-30-10 são regras comuns usadas para escolher como suas cores serão aplicadas em um design. A regra 60-30-10, por exemplo, é uma diretriz onde você aplica 60% do seu design em uma cor primária, 30% em uma secundária e 10% em uma cor de destaque.',
        },
        tips: {
          title: 'Dicas Gerais para Cores',
          lessIsMore: 'Menos é mais',
          saturation: 'Considere a saturação da cor ao criar variações de uma cor',
          consistent: 'Seja consistente onde cada cor está sendo usada',
          contrast: 'Considere o contraste de cor com texto ao misturá-los',
        },
      },
      typography: {
        title: 'Tipografia',
        subtitle: 'A arte de tornar o texto legível e bonito',
        description: 'Tipografia é a arte e técnica de organizar tipos para tornar a linguagem escrita legível, legível e atraente quando exibida. Vai além de apenas escolher a fonte mais estética. Uma ótima tipografia pode contar uma história como qualquer um poderia, tornar o texto agradável de ler e ajudar a estabelecer uma identidade de marca.',
        p2: 'Pegue qualquer tipo de design gráfico que não esteja finalizado e escolha a fonte e cor adequadas, e você verá uma mudança completamente drástica no resultado. Esses dois fundamentos são apenas ingredientes poderosos para começar.',
        choosing: {
          title: 'Escolhendo Tipografias',
          p1: 'Escolher uma tipografia é tão complicado quanto tentar estimar um ticket em uma sprint. Designers frequentemente passam muito tempo misturando e combinando diferentes pares de fontes para encontrar a combinação perfeita. Existem algumas regras gerais que podem ajudá-lo a escolher a tipografia certa para seu projeto.',
        },
        types: {
          serif: 'Serif: Fontes com pequenas linhas ou traços anexados ao final do caractere. Frequentemente usadas em mídia impressa para legibilidade (ex: Merriweather, Times New Roman, Georgia).',
          sansSerif: 'Sans-serif: Fontes sem pequenas linhas ou traços no final. Frequentemente usadas em mídia digital para legibilidade (ex: Raleway, Roboto, Open Sans).',
          monospace: 'Monospace: Fontes onde cada caractere ocupa o mesmo espaço. Usadas em ambientes de codificação (ex: Source Code Pro, Fira Code, Courier New).',
        },
        spacing: {
          title: 'Altura da Linha e Espaçamento de Letras',
          p1: 'Passamos muito tempo em nossas telas lendo texto, então é importante garantir que o texto seja fácil de ler e visualmente atraente. As fontes são projetadas para ter uma certa quantidade de espaço entre letras, conhecido como letter-spacing. A regra geral é sempre manter um letter-spacing estreito no texto principal da UI e letter-spacing maior em títulos e assim por diante.',
          p2: 'Para uma experiência de leitura ainda melhor, certifique-se de que seus parágrafos não sejam muito largos (entre 45 e 75 caracteres por linha) e o espaçamento entre as linhas do parágrafo, chamado line-height, seja suficiente. Porque se as linhas forem muito longas, fica mais difícil para as pessoas avaliarem onde a linha começa e termina.',
        },
        tips: {
          title: 'Dicas Gerais para Tipografia',
          opposites: 'Opostos se atraem: serif com sans-serif, pequeno com alto, decorativo com simples',
          weights: 'Mantenha-se com pesos de fonte fixos como normal (400/500) e negrito (700/800)',
          limit: 'Limite tipografias a 2-3 para consistência',
          scale: 'Use uma escala de tipos para criar hierarquia consistente',
          lineHeight: 'Altura da linha importa: maior para texto pequeno (1.5), menor para texto grande (1.3)',
          alignment: 'Não centralize texto longo – alinhamento à esquerda sempre parece melhor',
        },
      },
      hierarchy: {
        title: 'Hierarquia Visual',
        subtitle: 'Guiando usuários através de escolhas de design intencionais',
        description: 'Hierarquia visual é o arranjo de elementos de uma forma que implica importância. Usamos hierarquia visual para guiar o usuário através de um produto. Por exemplo, em um site, queremos que os usuários vejam primeiro o logo, depois o título principal, call to action, e então o resto do conteúdo, e isso é feito dando pistas visuais como tamanho, cor, contraste e espaçamento para diferentes elementos.',
        how: {
          title: 'Como Podemos Estabelecer Hierarquia Visual?',
          p1: 'Culturalmente, os humanos geralmente olham para uma página escaneando rapidamente com nossos olhos de cima para baixo, da esquerda para a direita, uma espécie de padrão zigue-zague. Então designers digitais frequentemente brincam com algumas pistas visuais para guiar usuários para diferentes elementos dentro de uma interface de usuário para ajudar usuários a entender conteúdo e realizar seus objetivos.',
        },
        size: {
          title: 'Tamanho e Peso da Fonte',
          p1: 'Quando falamos sobre legibilidade e hierarquia de texto, font-size e font-weight são os fatores mais importantes. São as primeiras uma ou duas frases que chamam nossa atenção na página principal de um site de notícias. Da mesma forma que grandes manchetes em jornais capturam nossa atenção, fontes grandes e negritas ajudam a se destacar e podem enfatizar informações importantes e call to action.',
        },
        color: {
          title: 'Cor e Contraste',
          p1: 'Somos visualmente atraídos por cores brilhantes e áreas de alto contraste, especialmente quando estão cercadas por cores mais suaves ou fundos. A estratégia é simples: brinque com cor para direcionar usuários a elementos-chave na tela.',
        },
        spacing: {
          title: 'Espaçamento (Espaço em Branco)',
          p1: 'Espaço em branco, ou apenas espaçamento, é o espaço entre elementos em um design. É uma parte vital dos designs de UI e ajuda a criar uma sensação de organização e estrutura. Espaçamento cuidadoso entre elementos cria interesse visual e mostra aos usuários como diferentes elementos de UI estão relacionados.',
          p2: 'Como sempre, é importante notar que quando tudo está competindo por atenção, queremos tentar reduzir o número de elementos visíveis de uma vez ou desenfatizar alguns elementos na UI para que possamos ter mais harmonia e evitar ambientes caóticos.',
        },
      },
      contrast: {
        title: 'Contraste',
        subtitle: 'Fazendo elementos se destacarem e chamando atenção',
        description: 'Contraste é a diferença entre dois ou mais elementos que os fazem se destacar uns dos outros. É a razão pela qual podemos ver e distinguir objetos em nosso ambiente. Todo elemento em uma interface de usuário, por natureza, tem uma certa quantidade de contraste baseado no fundo.',
        p2: 'Contraste é ótimo para UX e pode ser usado para priorizar áreas de um design e chamar atenção para certas áreas. Quando você usa texto em negrito para enfatizar um elemento de texto, está chamando atenção para ele aumentando o contraste entre o texto em negrito e o texto regular, que é essencialmente mais pixels usados para renderização de texto.',
        p3: 'Como com qualquer coisa que se destaca, também pode ser distrativo se usado em excesso. Quando você se depara com uma situação onde o elemento principal de uma interface não está se destacando o suficiente, em vez de tentar enfatizar ainda mais o elemento que você quer chamar atenção, descubra como você pode desenfatizar os elementos ao redor dele. Isso pode ser feito reduzindo o tamanho, peso ou intensidade da cor dos elementos circundantes.',
        accessibility: {
          title: 'Acessibilidade e Contraste',
          p1: 'Um aspecto-chave do contraste é acessibilidade. Para garantir que seus designs sejam acessíveis, as Diretrizes de Acessibilidade de Conteúdo da Web (WCAG) recomendam uma proporção de contraste mínima de 4.5:1 para texto normal (parágrafos, links, etc) e 3:1 para texto grande, como títulos. Isso garante que o texto seja legível para usuários com deficiências visuais, incluindo aqueles com daltonismo.',
          p2: 'Eu pessoalmente aconselho evitar usar cores com um valor de leveza alto, como amarelo ou cinza claro, para texto. Essas cores podem ser difíceis de ler e facilmente violam a proporção de contraste WCAG. Em vez disso, tente técnicas como girar o matiz para uma cor ou fundo ligeiramente diferente, por exemplo, um branco suave em vez de branco puro ou um tom diferente de escuro em vez de preto puro. Em qualquer caso, verifique a ferramenta de verificação de contraste para garantir que seu texto seja legível.',
        },
      },
      alignment: {
        title: 'Alinhamento',
        subtitle: 'Criando ordem e equilíbrio em seu layout',
        description: 'Alinhamento é o processo de design de garantir que cada elemento esteja posicionado corretamente em relação a outros elementos. É um aspecto do design que nos dá uma sensação de ordem e equilíbrio. Na verdade, vemos alinhamento na natureza o tempo todo que pode ser observado em alinhamento biológico e astronômico, de órbitas celulares a planetárias. Se algo está fora de alinhamento, será muito perceptível como o design pode ser inconsistente.',
        p2: 'O alinhamento do texto é essencial para legibilidade, pois texto ruim pode ser difícil de ler e entender. Em geral, devemos alinhar texto à esquerda para usuários de língua portuguesa. Texto centralizado pode ser usado para blocos curtos de texto como títulos ou títulos, mas deve ser evitado para parágrafos longos.',
        p3: 'No caso de números em layouts de tabela, devemos alinhar números à direita para melhor legibilidade e comparação. Isso é porque números são lidos da esquerda para a direita, e alinhamento à direita permite que os pontos decimais se alinhem verticalmente, facilitando a comparação de valores.',
        p4: 'Ao usar ferramentas de design como Figma ou Penpot, podemos usar as ferramentas de alinhamento integradas para garantir que os elementos estejam adequadamente alinhados. Também podemos usar grades e guias para nos ajudar a manter espaçamento e alinhamento consistentes em nossos designs.',
      },
      conclusion: {
        title: 'Conclusão',
        p1: 'Em resumo, desenvolvedores também podem projetar! Ao entender e aplicar esses 5 conceitos fundamentais de design de UI: cor, tipografia, hierarquia visual, contraste e alinhamento, desenvolvedores podem criar e entregar interfaces mais visualmente atraentes e amigáveis ao usuário.',
        p2: 'Eu aconselho você a começar com cor e tipografia (escolha ótimas fontes!) e então construir sobre cada fundamento com iterações e feedback de sua equipe de design e produto.',
      },
      footer: '© 2025 Design Fundamentals. Por Jeferson Brito. Aprenda o básico de design para melhor desenvolvimento.',
    },
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      examples: 'Examples',
      resources: 'Resources',
      bestPractices: 'Best Practices',
    },
    // Homepage - manter conteúdo original em inglês
    home: {
      title: 'The 5 UI Fundamentals',
      subtitle: 'Essential principles every developer should know',
      author: 'By Jeferson Brito',
      date: 'October 28, 2025',
      intro: {
        p1: 'Can developers also design? This is a fairly tricky question to answer. Nowadays, with how teams are structured and projects are led, it is common to see developers handing off the design work to designers to focus on development tasks only. But it doesn\'t have to be that way.',
        p2: 'Not every developer is indeed a designer, but that doesn\'t mean developers can\'t learn the basics of design and apply them to their work.',
        p3: 'Understanding the fundamentals that build user interfaces is essential for any developer who wants to create great products. From colors to visual hierarchy, these principles will help you create better user experiences even without being a designer.',
        p4: 'For those who think you need to have an artistic talent to be a designer, I\'ll show you 5 fundamental concepts in design that will improve any piece of UI you create.',
      },
      color: {
        title: 'Color',
        subtitle: 'The foundation of visual perception and emotional impact',
        description: 'Color is the first UI design fundamental that changes the first impression of a user experience. When you visit a website or use an app, your eye is exposed to color. Every design has some sort of personality that is expressed through color. It can communicate securely and professionally as a baking website, or fun and playful as a game app, without any words.',
        theory: {
          title: 'Color Theory',
          p1: 'Color theory is a set of principles used to create harmonious color combinations. It\'s based on the color wheel, which is a circular diagram that shows the relationships between colors.',
          p2: 'But how do we know which colors work well together? Well, some color schemes can help us match visuals effectively using the color wheel.',
        },
        schemes: {
          monochromatic: 'Monochromatic: Uses one color in different shades and tints.',
          complementary: 'Complementary: Uses two colors that are opposite each other on the color wheel.',
          triadic: 'Triadic: Uses three colors that are evenly spaced around the color wheel, which together form a triangle.',
          analogous: 'Analogous: Uses colors that are next to each other on the color wheel.',
        },
        applying: {
          title: 'Applying Color to UI',
          p1: 'Applying color in user interfaces is about tinting squares based on a color palette. A color palette is a set of colors that are used in a design to create a cohesive look and feel.',
          p2: '80-20 and 60-30-10 are common rules used to choose how your colors are going to be applied on a design. The 60-30-10 rule, for example, is a guideline where you apply 60% of your design on a primary color, 30% on a secondary, and 10% on an accent color.',
        },
        tips: {
          title: 'General Tips for Colors',
          lessIsMore: 'Less is more',
          saturation: 'Consider color saturation when creating variations of a color',
          consistent: 'Be consistent where each color is being used',
          contrast: 'Consider color contrast with text when mixing them',
        },
      },
      typography: {
        title: 'Typography',
        subtitle: 'The art of making text readable and beautiful',
        description: 'Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed. It is beyond just choosing the most aesthetic font. Great typography can tell a story like anyone could, make text pleasant to read, and help establish a brand identity.',
        p2: 'Take any sort of graphic design that isn\'t finished and choose the proper font and color, and you will see a completely drastic change in the result. These two fundamentals are just powerful ingredients to start with.',
        choosing: {
          title: 'Choosing Typefaces',
          p1: 'Choosing a typeface is just as tricky as trying to estimate a ticket in a sprint. Designers often spend a lot of time mixing and matching different pairs of fonts to find the perfect combination. There are some general rules of thumb that can help you choose the right typeface for your project.',
        },
        types: {
          serif: 'Serif: Fonts with small lines or strokes attached to the end of the character. Often used in print media for readability (e.g., Merriweather, Times New Roman, Georgia).',
          sansSerif: 'Sans-serif: Fonts without small lines or strokes at the end. Often used in digital media for legibility (e.g., Raleway, Roboto, Open Sans).',
          monospace: 'Monospace: Fonts where each character takes up the same space. Used in coding environments (e.g., Source Code Pro, Fira Code, Courier New).',
        },
        spacing: {
          title: 'Line-Height and Letter-Spacing',
          p1: 'We spend a lot of time on our screens reading text, so it\'s important to make sure that the text is easy to read and visually appealing. Fonts are designed to have a certain amount of space between letters, known as letter-spacing. The rule of thumb is to always keep a narrow letter-spacing in the main UI text and larger letter-spacing in headings and so on.',
          p2: 'For even better reading experience, make sure your paragraphs are not too wide (between 45 and 75 characters per line) and the spacing between paragraph lines, so called line-height, is enough. Because if lines are too long, it makes it harder for people to gauge where the line starts and ends.',
        },
        tips: {
          title: 'General Tips for Typography',
          opposites: 'Opposites attract: serif with sans-serif, small with tall, decorative with simple',
          weights: 'Stick with fixed font-weights like normal (400/500) and bold (700/800)',
          limit: 'Limit typefaces to 2-3 for consistency',
          scale: 'Use a type scale to create consistent hierarchy',
          lineHeight: 'Line-height matters: taller for small text (1.5), shorter for large text (1.3)',
          alignment: 'Don\'t center long text – left-align always looks better',
        },
      },
      hierarchy: {
        title: 'Visual Hierarchy',
        subtitle: 'Guiding users through intentional design choices',
        description: 'Visual hierarchy is the arrangement of elements in a way that implies importance. We use visual hierarchy to guide the user through a product. For example, in a website, we want users to first see the logo, then the main headline, call to action, and then the rest of the content, and this is done by giving visual clues such as size, color, contrast, and spacing to different elements.',
        how: {
          title: 'How Can We Establish Visual Hierarchy?',
          p1: 'Culturally, humans usually look at a page by quickly scanning with our eyes from top to bottom, left to right, kind of a zig-zag pattern. So digital designers often play with some visual cues to guide users to different elements within a user interface to help users understand content and accomplish their goals.',
        },
        size: {
          title: 'Font Size and Weight',
          p1: 'When talking about text readability and hierarchy, font-size and font-weight are the most important factors. It\'s the first one or two sentences that draw our attention on the main page of a news site. In the same way that big headlines in newspapers grab our attention, large and bold fonts help stand out and can emphasize important information and call to action.',
        },
        color: {
          title: 'Color and Contrast',
          p1: 'We\'re visually drawn to bright colors and high contrast areas, especially when they are surrounded by more muted colors or backgrounds. The strategy is simple: play with color to direct users to key elements on the screen.',
        },
        spacing: {
          title: 'Spacing (White Space)',
          p1: 'White space, or just spacing, is the space between elements in a design. It is a vital part of UI designs and helps to create a sense of organization and structure. Thoughtful spacing between elements creates visual interest and shows users how different UI elements are related.',
          p2: 'As always, it\'s important to note that when everything is competing for attention, we want to try to cut down the number of elements visible at once or de-emphasize some elements on the UI so we can have more harmony and avoid chaotic environments.',
        },
      },
      contrast: {
        title: 'Contrast',
        subtitle: 'Making elements stand out and drawing attention',
        description: 'Contrast is the difference between two or more elements that makes them stand out from each other. It\'s the reason why we can see and distinguish objects in our environment. Every element in a user interface, by nature, has a certain amount of contrast based on the background.',
        p2: 'Contrast is great for UX and can be used to prioritize areas of a design and draw attention to certain areas. When you use bold text to emphasize a text element, you are drawing attention to it by increasing the contrast between the bold text and the regular text, which is essentially more pixels used for text rendering.',
        p3: 'As with anything that stands out, it can also be distracting if overused. When you run into a situation where the main element of an interface is not standing out enough, instead of trying to further emphasize the element you want to draw attention to, figure out how you can de-emphasize the elements around it. This can be done by reducing the size, weight, or color intensity of the surrounding elements.',
        accessibility: {
          title: 'Accessibility and Contrast',
          p1: 'One key aspect of contrast is accessibility. To make sure your designs are accessible, the Web Content Accessibility Guidelines (WCAG) recommend a minimum contrast ratio of 4.5:1 for normal text (paragraphs, links, etc), and 3:1 for large text, such as headings. This ensures that text is readable for users with visual impairments, including those with color blindness.',
          p2: 'I personally advise avoiding using colors with a high lightness value, such as yellow or light gray, for text. These colors can be hard to read and easily violate the WCAG contrast ratio. Instead, try techniques such as rotating the hue to a slightly different color or background, for instance, a soft white instead of pure white or a different shade of dark instead of pure black. In any case, check out the contrast checker tool to guarantee your text is readable.',
        },
      },
      alignment: {
        title: 'Alignment',
        subtitle: 'Creating order and balance in your layout',
        description: 'Alignment is the design process of ensuring every element is positioned correctly in relation to other elements. It is an aspect of design that gives us a sense of order and balance. In fact, we see alignment in nature all the time that can be observed in biological and astronomical alignment, from cellular to planetary orbits. If something is out of alignment, it will be very noticeable how inconsistent the design can be.',
        p2: 'Alignment of text is essential for readability, as bad text can be hard to read and understand. In general, we should left-align text for English-speaking users. Center-aligned text can be used for short blocks of text like headings or titles, but it should be avoided for long paragraphs.',
        p3: 'In the case of numbers in table layouts, we should right-align numbers for better readability and comparison. This is because numbers are read from left to right, and right-alignment allows the decimal points to line up vertically, making it easier to compare values.',
        p4: 'When using design tools such as Figma or Penpot, we can use the built-in alignment tools to ensure that elements are properly aligned. We can also use grids and guides to help us maintain consistent spacing and alignment throughout our designs.',
      },
      conclusion: {
        title: 'Conclusion',
        p1: 'In summary, developers can design too! By understanding and applying these 5 fundamental concepts of UI design: color, typography, visual hierarchy, contrast, and alignment, developers can create and deliver more visually appealing and user-friendly interfaces.',
        p2: 'I advise you to start with color and typography (choose great fonts!) and then build upon each foundation with iterations and feedback from your design and product team.',
      },
      footer: '© 2025 Design Fundamentals. By Jeferson Brito. Learn design basics for better development.',
    },
  },
} as const;

// Helper function para obter tradução
export function t(locale: Locale, key: string): string {
  const keys = key.split('.');
  
  // Tenta obter do locale atual
  let value: any = translations[locale];
  for (const k of keys) {
    value = value?.[k];
  }
  
  // Se não encontrou, tenta fallback para pt_BR
  if (value === undefined) {
    value = translations[defaultLocale];
    for (const k of keys) {
      value = value?.[k];
    }
  }
  
  // Se ainda não encontrou, retorna a chave
  return typeof value === 'string' ? value : key;
}

