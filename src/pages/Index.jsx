import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  const [name, setName] = useState("");

  const handleClick = () => {
    toast({
      title: `Hello, ${name}!`,
      description: "This is your personalized greeting.",
    });
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle className="text-center">Welcome</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <Button onClick={handleClick} className="w-full">
              Greet Me
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;