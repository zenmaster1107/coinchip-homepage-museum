import type { PageModel } from './mockData.ts'

export default function PageContent({ page }: { page: PageModel }) {
  return (
    <section className="cc-pagePanel" aria-labelledby={`page-title-${page.title}`}>
      <header className="cc-pageHero">
        <span className="cc-pagePanel__eyebrow">{page.eyebrow}</span>
        <h1 className="cc-pagePanel__title" id={`page-title-${page.title}`}>
          {page.title}
        </h1>
        <p className="cc-pagePanel__body">{page.body}</p>
      </header>

      <section className="cc-metricGrid" aria-label={`${page.title} highlights`}>
        {page.stats.map((stat) => (
          <article className="cc-metricCard" key={stat.label}>
            <span className="cc-metricCard__label">{stat.label}</span>
            <span className="cc-metricCard__value" data-numeric="true">
              {stat.value}
            </span>
            <span className="cc-metricCard__delta">{stat.detail}</span>
          </article>
        ))}
      </section>

      <section className="cc-contentGrid" aria-label={`${page.title} detail`}>
        {page.sections.map((section) => (
          <article className="cc-contentCard" key={section.title}>
            <div className="cc-contentCard__header">
              <span className="cc-pagePanel__eyebrow">{section.eyebrow}</span>
              <h2 className="cc-contentCard__title">{section.title}</h2>
            </div>
            <div className="cc-contentList">
              {section.rows.map((row) => (
                <div className="cc-contentList__row" key={`${section.title}-${row.label}`}>
                  <div className="cc-contentList__copy">
                    <span className="cc-contentList__label">{row.label}</span>
                    {row.meta ? <span className="cc-contentList__meta">{row.meta}</span> : null}
                  </div>
                  <span
                    className="cc-contentList__value"
                    {...(row.numeric ? { 'data-numeric': 'true' } : {})}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>
    </section>
  )
}
