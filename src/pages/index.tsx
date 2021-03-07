import { Trans } from "@lingui/react";
import Link from "next/link";
import { getIntl } from "../lib/i18n";

const HomePage = () => {
  return (
    <div>
      <Trans id="Test" />
      <Link href="/" locale="en-US">
        EN
      </Link>
      <Link href="/" locale="de-DE">
        DE
      </Link>
    </div>
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
