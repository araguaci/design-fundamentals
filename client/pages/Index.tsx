import Navigation from "@/components/Navigation";
import { useTranslation } from "@/hooks/useTranslation";

export default function Index() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-background">
      <Navigation />

      {/* Page Header */}
      <header className="bg-gradient-to-br from-primary/5 to-secondary/5 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            {t('home.title')}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t('home.subtitle')}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Article Header */}
        <article className="prose prose-sm sm:prose dark:prose-invert max-w-none">
          <div className="mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-muted-foreground">
              <span className="font-medium">{t('home.author')}</span>
              <span>{t('home.date')}</span>
            </div>
          </div>

          {/* Intro Section */}
          <section className="mb-12">
            <p className="text-lg leading-relaxed text-foreground/90 mb-4">
              {t('home.intro.p1')}
            </p>
            <p className="text-lg leading-relaxed text-foreground/90 mb-4">
              {t('home.intro.p2')}
            </p>
            <p className="text-base leading-relaxed text-foreground/80 mb-4">
              {t('home.intro.p3')}
            </p>
            <p className="text-base leading-relaxed text-foreground/80">
              {t('home.intro.p4')}
            </p>
          </section>

          {/* Fundamental 1: Color */}
          <section className="mb-12 pb-12 border-b border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  {t('home.color.title')}
                </h3>
                <p className="text-muted-foreground mt-1">
                  {t('home.color.subtitle')}
                </p>
              </div>
            </div>

            <p className="text-base leading-relaxed text-foreground/80 mb-4">
              {t('home.color.description')}
            </p>

            <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">
              {t('home.color.theory.title')}
            </h4>
            <p className="text-base leading-relaxed text-foreground/80 mb-4">
              {t('home.color.theory.p1')}
            </p>
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              {t('home.color.theory.p2')}
            </p>

            <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-6 mb-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-secondary mt-0.5">•</span>
                  <span className="text-foreground/80">
                    <strong>{t('home.color.schemes.monochromatic').split(':')[0]}:</strong> {t('home.color.schemes.monochromatic').split(':')[1]?.trim()}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-secondary mt-0.5">•</span>
                  <span className="text-foreground/80">
                    <strong>{t('home.color.schemes.complementary').split(':')[0]}:</strong> {t('home.color.schemes.complementary').split(':')[1]?.trim()}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-secondary mt-0.5">•</span>
                  <span className="text-foreground/80">
                    <strong>{t('home.color.schemes.triadic').split(':')[0]}:</strong> {t('home.color.schemes.triadic').split(':')[1]?.trim()}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-secondary mt-0.5">•</span>
                  <span className="text-foreground/80">
                    <strong>{t('home.color.schemes.analogous').split(':')[0]}:</strong> {t('home.color.schemes.analogous').split(':')[1]?.trim()}
                  </span>
                </li>
              </ul>
            </div>

            <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">
              {t('home.color.applying.title')}
            </h4>
            <p className="text-base leading-relaxed text-foreground/80 mb-4">
              {t('home.color.applying.p1')}
            </p>
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              {t('home.color.applying.p2')}
            </p>

            <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">
              {t('home.color.tips.title')}
            </h4>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>
                  <strong>{t('home.color.tips.lessIsMore')}</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>
                  <strong>{t('home.color.tips.saturation')}</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>
                  <strong>{t('home.color.tips.consistent')}</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>
                  <strong>{t('home.color.tips.contrast')}</strong>
                </span>
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
                <h3 className="text-2xl font-bold text-foreground">
                  {t('home.typography.title')}
                </h3>
                <p className="text-muted-foreground mt-1">
                  {t('home.typography.subtitle')}
                </p>
              </div>
            </div>

            <p className="text-base leading-relaxed text-foreground/80 mb-4">
              {t('home.typography.description')}
            </p>
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              {t('home.typography.p2')}
            </p>

            <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">
              {t('home.typography.choosing.title')}
            </h4>
            <p className="text-base leading-relaxed text-foreground/80 mb-4">
              {t('home.typography.choosing.p1')}
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-primary mt-0.5">•</span>
                  <span className="text-foreground/80">
                    <strong>{t('home.typography.types.serif').split(':')[0]}:</strong> {t('home.typography.types.serif').split(':')[1]?.trim()}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-primary mt-0.5">•</span>
                  <span className="text-foreground/80">
                    <strong>{t('home.typography.types.sansSerif').split(':')[0]}:</strong> {t('home.typography.types.sansSerif').split(':')[1]?.trim()}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-primary mt-0.5">•</span>
                  <span className="text-foreground/80">
                    <strong>{t('home.typography.types.monospace').split(':')[0]}:</strong> {t('home.typography.types.monospace').split(':')[1]?.trim()}
                  </span>
                </li>
              </ul>
            </div>

            <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">
              {t('home.typography.spacing.title')}
            </h4>
            <p className="text-base leading-relaxed text-foreground/80 mb-4">
              {t('home.typography.spacing.p1')}
            </p>
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              {t('home.typography.spacing.p2')}
            </p>

            <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">
              {t('home.typography.tips.title')}
            </h4>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>
                  <strong>{t('home.typography.tips.opposites')}</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>
                  <strong>{t('home.typography.tips.weights')}</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>
                  <strong>{t('home.typography.tips.limit')}</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>
                  <strong>{t('home.typography.tips.scale')}</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>
                  <strong>{t('home.typography.tips.lineHeight')}</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>
                  <strong>{t('home.typography.tips.alignment')}</strong>
                </span>
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
                <h3 className="text-2xl font-bold text-foreground">
                  {t('home.hierarchy.title')}
                </h3>
                <p className="text-muted-foreground mt-1">
                  {t('home.hierarchy.subtitle')}
                </p>
              </div>
            </div>

            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              {t('home.hierarchy.description')}
            </p>

            <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">
              {t('home.hierarchy.how.title')}
            </h4>
            <p className="text-base leading-relaxed text-foreground/80 mb-4">
              {t('home.hierarchy.how.p1')}
            </p>

            <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">
              {t('home.hierarchy.size.title')}
            </h4>
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              {t('home.hierarchy.size.p1')}
            </p>

            <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">
              {t('home.hierarchy.color.title')}
            </h4>
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              {t('home.hierarchy.color.p1')}
            </p>

            <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">
              {t('home.hierarchy.spacing.title')}
            </h4>
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              {t('home.hierarchy.spacing.p1')}
            </p>
            <p className="text-base leading-relaxed text-foreground/80">
              {t('home.hierarchy.spacing.p2')}
            </p>
          </section>

          {/* Fundamental 4: Contrast */}
          <section className="mb-12 pb-12 border-b border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  {t('home.contrast.title')}
                </h3>
                <p className="text-muted-foreground mt-1">
                  {t('home.contrast.subtitle')}
                </p>
              </div>
            </div>

            <p className="text-base leading-relaxed text-foreground/80 mb-4">
              {t('home.contrast.description')}
            </p>
            <p className="text-base leading-relaxed text-foreground/80 mb-4">
              {t('home.contrast.p2')}
            </p>
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              {t('home.contrast.p3')}
            </p>

            <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">
              {t('home.contrast.accessibility.title')}
            </h4>
            <p className="text-base leading-relaxed text-foreground/80 mb-4">
              {t('home.contrast.accessibility.p1')}
            </p>
            <p className="text-base leading-relaxed text-foreground/80">
              {t('home.contrast.accessibility.p2')}
            </p>
          </section>

          {/* Fundamental 5: Alignment */}
          <section className="mb-12 pb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold text-xl">
                5
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  {t('home.alignment.title')}
                </h3>
                <p className="text-muted-foreground mt-1">
                  {t('home.alignment.subtitle')}
                </p>
              </div>
            </div>

            <p className="text-base leading-relaxed text-foreground/80 mb-4">
              {t('home.alignment.description')}
            </p>
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              {t('home.alignment.p2')}
            </p>
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              {t('home.alignment.p3')}
            </p>
            <p className="text-base leading-relaxed text-foreground/80">
              {t('home.alignment.p4')}
            </p>
          </section>

          {/* Conclusion */}
          <section className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t('home.conclusion.title')}
            </h3>
            <p className="text-base leading-relaxed text-foreground/80 mb-4">
              {t('home.conclusion.p1')}
            </p>
            <p className="text-base leading-relaxed text-foreground/80">
              {t('home.conclusion.p2')}
            </p>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50 mt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <p className="text-sm text-muted-foreground text-center">
            {t('home.footer')}
          </p>
        </div>
      </footer>
    </div>
  );
}
