export function WishPreview({ wish }) {
    if (!wish) return <div>Loading...</div>
    return <article className='wish-preview'></article>
}
// NAME , LABELS , PRICE , AVAILABLE DATES , IMG , ACTIONS
