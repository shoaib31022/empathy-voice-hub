
import React from 'react';
import { ShieldIcon, AlertCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyBanner = () => {
  return (
    <div className="bg-calm-50 dark:bg-calm-900 border-t border-b border-calm-200 dark:border-calm-800 py-4 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <ShieldIcon className="h-5 w-5 text-empathy-600 dark:text-empathy-400 mr-2 flex-shrink-0" />
            <p className="text-sm text-foreground">
              <strong>Privacy First:</strong> Your conversations are not stored permanently. We prioritize your privacy and security.
            </p>
          </div>
          <div className="flex items-center">
            <AlertCircleIcon className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
            <p className="text-sm text-foreground mr-4">
              Not a replacement for professional mental health services
            </p>
            <Button variant="outline" size="sm" className="whitespace-nowrap">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyBanner;
