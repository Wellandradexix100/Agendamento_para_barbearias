import { Card, CardContent } from "./ui/card";

const Footer = () => {
  return (
    <footer>
      <Card>
        <CardContent className="px-5 py-6">
          <p className="text-sm text-center  text-gray-400">
            @Copyright <span className="font-bold">DigitalW@ve</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  );
};

export default Footer;
