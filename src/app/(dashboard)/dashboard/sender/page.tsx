import { Card, CardContent } from "@/components/ui/card";

const statsData = [
  {
    title: "Draft",
    count: "32",
    documents: "Documents",
    amount: "$443",
    today: "07 Today",
    color: "text-[#8f8deb]",
  },
  {
    title: "Sent",
    count: "12",
    documents: "Documents",
    amount: "$443",
    today: "07 Today",
    color: "text-[#8f8deb]",
  },
  {
    title: "Viewed",
    count: "24",
    documents: "Documents",
    amount: "$443",
    today: "07 Today",
    color: "text-[#8f8deb]",
  },
  {
    title: "Completed",
    count: "07",
    documents: "Documents",
    amount: "$443",
    today: "07 Today",
    color: "text-[#8f8deb]",
  },
  {
    title: "Expired",
    count: "02",
    documents: "Documents",
    amount: "$443",
    today: "07 Today",
    color: "text-[#8f8deb]",
  },
  {
    title: "Waiting for payment",
    count: "08",
    documents: "Documents",
    amount: "$443",
    today: "07 Today",
    color: "text-[#8f8deb]",
  },
  {
    title: "Paid",
    count: "11",
    documents: "Documents",
    amount: "$443",
    today: "07 Today",
    color: "text-[#8f8deb]",
  },
  {
    title: "Declined",
    count: "19",
    documents: "Documents",
    amount: "$443",
    today: "07 Today",
    color: "text-[#8f8deb]",
  },
];

const bgImage = "/images/dashboard/sender/bg-1.png";

export default function SenderDashboard() {
  return (
    <div
      className="min-h-full p-14 space-y-8 rounded-3xl overflow-hidden"
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#383838] mb-2">
          Welcome Devin Taylor
        </h1>
        <p className="text-[#383838]/70 text-xl">
          Lorem Ipsum is simply dummy text of the printing...
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <Card
            key={index}
            className="bg-white/90 backdrop-blur-sm border-0 pb-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl relative min-h-[240px]"
          >
            <CardContent>
              <div className="space-y-3">
                <h3 className="text-xl font-bold capitalize text-[#383838] tracking-wide">
                  {stat.title}
                </h3>
                <div className="space-y-1">
                  <div className={`text-5xl font-bold ${stat.color}`}>
                    {stat.count}
                  </div>
                  <div className="text-lg text-[#9ca3af]">{stat.documents}</div>
                </div>
              </div>
            </CardContent>
            <div className="flex items-center justify-between p-3 border rounded-2xl bg-accent absolute bottom-0 left-0 right-0">
              <span className="text-lg font-semibold text-[#383838]">
                {stat.amount}
              </span>
              <span className="text-lg font-semibold text-[#383838]">{stat.today}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
