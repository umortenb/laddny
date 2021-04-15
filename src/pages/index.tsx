import { Trans } from "@lingui/react";
import BlockContainer from "../components/blocks/BlockContainer";
import { getIntl } from "../lib/i18n";
import { Block, ContentType } from "../models/block";

const newBlock: Block = {
  type: ContentType.Container,
  content: [
    {
      block: {
        type: ContentType.Text,
      },
    },
    {
      block: {
        type: ContentType.Text,
      },
    },
  ],
};

const HomePage = () => {
  return (
    <>
      <Trans id="Test" />
      <BlockContainer block={newBlock} />
    </>
  );
};

export default HomePage;

export async function getStaticProps(context) {
  const messages = await getIntl(context.locale);

  return {
    props: {
      messages,
    },
  };
}
