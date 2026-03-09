export interface Image {
    id: string;
    urls: {
        small: string;
        regular: string;
    };
    alt_description: string;
    user: {
        name: string;
    };
    likes: number;

    // alt_description: string;
    // alternative_slugs: {de: string; en: string; es: string; fr: string; id: string; it: string; ja: string; ko: string; pt: string};
    // asset_type: string;
    // blur_hash: string;
    // bookmarked: boolean;
    // breadcrumbs: [];
    // color: string
    // created_at: string;

}
