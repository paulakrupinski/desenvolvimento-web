function Article(props) {
  return (
    <article>
      <h2>{props.titulo}</h2>

      <time>{props.data}</time>

      <p>{props.paragrafo1}</p>
      <p>{props.paragrafo2}</p>

      <figure>
      <img src="/praia.jpg" alt="Praia paradisíaca no Nordeste" />
      <figcaption>Vista incrível de uma praia no Nordeste brasileiro.</figcaption>
      </figure>

    </article>
  )
}

export default Article