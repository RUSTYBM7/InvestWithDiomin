import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Mail, Users, FileText, TrendingUp, Lock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export default function AdminDashboard() {
  const [consultations, setConsultations] = useState<any[]>([]);
  const [subscribers, setSubscribers] = useState<any[]>([]);
  const [downloads, setDownloads] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState(false);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      setIsLoading(true);

      const [consRes, subRes, dlRes] = await Promise.all([
        supabase.from("consultation_requests").select("*").order("created_at", { ascending: false }).limit(10),
        supabase.from("newsletter_subscribers").select("*").order("created_at", { ascending: false }).limit(10),
        supabase.from("catalog_downloads").select("*").order("downloaded_at", { ascending: false }).limit(10),
      ]);

      if (consRes.error || subRes.error || dlRes.error) {
        setAuthError(true);
        throw new Error("Unauthorized");
      }

      setConsultations(consRes.data || []);
      setSubscribers(subRes.data || []);
      setDownloads(dlRes.data || []);
    } catch (error) {
      console.error("Dashboard load error:", error);
      toast.error("Access denied. Admin credentials required.");
      setAuthError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const stats = [
    { label: "Total Consultations", value: consultations.length, icon: Users },
    { label: "Newsletter Subscribers", value: subscribers.length, icon: Mail },
    { label: "Catalog Downloads", value: downloads.length, icon: FileText },
    { label: "Conversion Rate", value: "24%", icon: TrendingUp },
  ];

  if (authError) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Card className="max-w-md">
          <CardContent className="p-8 text-center">
            <Lock className="mx-auto mb-4 h-12 w-12 text-destructive" />
            <h2 className="mb-2 font-bold">Access Denied</h2>
            <p className="text-sm text-muted-foreground">
              Admin dashboard requires authentication. Please contact your administrator.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/20">
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage leads, content, and analytics</p>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="mt-1 text-2xl font-bold">{stat.value}</p>
                    </div>
                    <Icon className="h-8 w-8 text-primary/30" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="consultations" className="space-y-4">
          <TabsList>
            <TabsTrigger value="consultations">Consultations</TabsTrigger>
            <TabsTrigger value="subscribers">Subscribers</TabsTrigger>
            <TabsTrigger value="downloads">Downloads</TabsTrigger>
          </TabsList>

          {/* Consultations */}
          <TabsContent value="consultations">
            <Card>
              <CardHeader>
                <CardTitle>Consultation Requests</CardTitle>
                <CardDescription>Recent booking inquiries</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="animate-pulse space-y-4">
                    {[1, 2, 3].map((i) => <div key={i} className="h-12 rounded bg-muted" />)}
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {consultations.map((cons) => (
                          <TableRow key={cons.id}>
                            <TableCell className="font-medium">{cons.name}</TableCell>
                            <TableCell>{cons.email}</TableCell>
                            <TableCell>
                              <Badge>{cons.status}</Badge>
                            </TableCell>
                            <TableCell className="text-sm text-muted-foreground">
                              {new Date(cons.created_at).toLocaleDateString()}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Subscribers */}
          <TabsContent value="subscribers">
            <Card>
              <CardHeader>
                <CardTitle>Newsletter Subscribers</CardTitle>
                <CardDescription>Active email subscribers</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="animate-pulse space-y-4">
                    {[1, 2, 3].map((i) => <div key={i} className="h-12 rounded bg-muted" />)}
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Email</TableHead>
                          <TableHead>Subscribed</TableHead>
                          <TableHead>Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {subscribers.map((sub) => (
                          <TableRow key={sub.id}>
                            <TableCell className="font-medium">{sub.email}</TableCell>
                            <TableCell className="text-sm text-muted-foreground">
                              {new Date(sub.created_at).toLocaleDateString()}
                            </TableCell>
                            <TableCell>
                              <Button variant="ghost" size="sm">
                                Send
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Downloads */}
          <TabsContent value="downloads">
            <Card>
              <CardHeader>
                <CardTitle>Catalog Downloads</CardTitle>
                <CardDescription>Lead capture from downloads</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="animate-pulse space-y-4">
                    {[1, 2, 3].map((i) => <div key={i} className="h-12 rounded bg-muted" />)}
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Downloaded</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {downloads.map((dl) => (
                          <TableRow key={dl.id}>
                            <TableCell className="font-medium">{dl.name || "—"}</TableCell>
                            <TableCell>{dl.email}</TableCell>
                            <TableCell className="text-sm text-muted-foreground">
                              {new Date(dl.downloaded_at).toLocaleDateString()}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
