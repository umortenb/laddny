import { Trans } from "@lingui/react";
import BlockComponent from "../components/BlockComponent";
import BlockContainerComponent from "../components/BlockContainerComponent";
import { getIntl } from "../lib/i18n";
import { Block, ContentType } from "../models/block";
import { Paper } from "../view/Paper";

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
      <Paper>
        <BlockContainerComponent block={newBlock} />
      </Paper>
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
