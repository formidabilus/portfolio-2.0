import { Experience } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

const query = groq`
    *[_type == 'experience'] {
        ...,
        technologies[]->
    }
`;

export const fetchExperiences = async () => {
  const res = await sanityClient.fetch(query);

  const experiences: Experience[] = res;

  return experiences;
};
