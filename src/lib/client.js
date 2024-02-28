import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { PUBLIC_SANITY_KEY } from "../../tokens";

export const client = createClient({
    projectId: "frturdab", // find this at manage.sanity.io or in your sanity.json
    dataset: "production", // this is from those question during 'sanity init'
    apiVersion: "2022-03-07",
    useCdn: true,
    token: PUBLIC_SANITY_KEY,
    ignoreBrowserTokenWarning: true,
});

export const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
