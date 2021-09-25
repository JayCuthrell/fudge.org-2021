import React from "react"
import { Link } from "gatsby"

const SiteLogo = m => {
  return (
    <Link to={`/`}>
    <svg width="313.6325439453125px" height="53.6175048828125px" xmlns="http://www.w3.org/2000/svg" viewBox="93.18372802734376 48.19124755859375 313.6325439453125 53.6175048828125" preserveAspectRatio="xMidYMid"><defs><filter id="editing-extrusion" x="-100%" y="-100%" width="300%" height="300%"><feFlood result="color1" flood-color="#444"></feFlood><feConvolveMatrix order="8,8" divisor="1" kernelMatrix="1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1" in="SourceAlpha" result="extrude"></feConvolveMatrix><feComposite in="color1" in2="extrude" result="comp-extrude" operator="in"></feComposite><feOffset dx="4" dy="4" in="comp-extrude" result="offset-extrude"></feOffset><feMerge><feMergeNode in="offset-extrude"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs><g filter="url(#editing-extrusion)"><g transform="translate(142, 86.640625)"><path d="M15-3L9-3L9-15L3-15L3-18L9-18L9-21L12-21L12-24L21-24L21-21L15-21L15-18L21-18L21-15L15-15L15-3ZM45-3L27-3L27-6L24-6L24-18L30-18L30-6L39-6L39-18L45-18L45-3ZM69-3L51-3L51-6L48-6L48-15L51-15L51-18L63-18L63-24L69-24L69-3ZM54-15L54-6L63-6L63-15L54-15ZM90 0L75 0L75-3L87-3L87-6L75-6L75-9L72-9L72-15L75-15L75-18L93-18L93-3L90-3L90 0ZM78-15L78-9L87-9L87-15L78-15ZM114-3L99-3L99-6L96-6L96-15L99-15L99-18L114-18L114-15L117-15L117-9L102-9L102-6L114-6L114-3ZM102-15L102-12L111-12L111-15L102-15ZM132-3L126-3L126-9L132-9L132-3ZM162-3L147-3L147-6L144-6L144-15L147-15L147-18L162-18L162-15L165-15L165-6L162-6L162-3ZM150-15L150-6L159-6L159-15L150-15ZM177-18L177-15L180-15L180-12L177-12L177-3L171-3L171-18L177-18ZM180-18L189-18L189-15L180-15L180-18ZM210 0L195 0L195-3L207-3L207-6L195-6L195-9L192-9L192-15L195-15L195-18L213-18L213-3L210-3L210 0ZM198-15L198-9L207-9L207-15L198-15Z" fill="#ccc"></path></g></g></svg>
    </Link>
  )
}

export default SiteLogo
