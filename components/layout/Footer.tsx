import React from "react";
import Section from "../ui/Section";

const Footer = () => {
  return (
    <footer className="border-t">
      <Section className="py-6">
        <p className="text-center text-sm leading-loose text-muted-foreground">
          © {new Date().getFullYear()} Sanity Blog. All rights reserved.
        </p>
      </Section>
    </footer>
  );
};

export default Footer;
