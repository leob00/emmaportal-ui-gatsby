export interface ArticleBody {
    processed: string;
    summary: string;
}

export interface FieldImage {
    alt: string;
}

export interface LocalFile {
    url: string;
}

export interface FieldImage2 {
    localFile: LocalFile;
}

export interface Relationships {
    field_image: FieldImage2;
}

export interface ArticleModel {
    id: string;
    title: string;
    body: ArticleBody;    
    field_image?: FieldImage;
    relationships?: Relationships;
    path: ArticlePath;
}

export interface ArticleResponse {
    nodeArticle: ArticleModel
}
export interface ArticlePath {
    alias:string
}