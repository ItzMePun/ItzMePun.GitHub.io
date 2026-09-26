export function toCloudinaryPublicId(src: string): string {
    return src.replace(/^\/+/, "");
}
