interface SideNavBubbleProps {
  title: string;
}

function SideNavBubble({ title }: SideNavBubbleProps) {
  return (
    <li className="bg-orange-200 bg-opacity-25 border-orange-900 border border-opacity-50 rounded-lg px-4 py-2 cursor-pointer hover:bg-opacity-50 hover:border-opacity-100 hover:border-orange-600">
      {title}
    </li>
  );
}

export default SideNavBubble;
