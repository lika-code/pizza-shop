import React from "react";
import ContentLoader from 'react-content-loader';

function ItemLoadingBlock() {
    return (
        <ContentLoader
            className="pizza-block"
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="140" cy="124" r="115" />
            <rect x="0" y="258" rx="6" ry="6" width="280" height="28" />
            <rect x="0" y="296" rx="6" ry="6" width="280" height="76" />
            <rect x="0" y="394" rx="6" ry="6" width="91" height="31" />
            <rect x="48" y="426" rx="0" ry="0" width="1" height="1" />
            <rect x="136" y="385" rx="20" ry="20" width="140" height="46" />
        </ContentLoader>
    );
}

export default ItemLoadingBlock;
