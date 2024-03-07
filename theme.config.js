const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'flex', marginTop: '8rem', justifyContent: 'center' }}>
      <time>{YEAR}</time> © LilScottyPippen
    </small>
  )
}
