import PropTypes from "prop-types"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export function FilterDialog({ open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Filter Documents</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label>File Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="pdf">PDF</SelectItem>
                <SelectItem value="doc">Word Document</SelectItem>
                <SelectItem value="xls">Excel</SelectItem>
                <SelectItem value="img">Image</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label>Date Modified</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select date range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">Last 7 days</SelectItem>
                <SelectItem value="month">Last 30 days</SelectItem>
                <SelectItem value="year">Last year</SelectItem>
                <SelectItem value="custom">Custom range</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label>Size</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select size range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tiny">0-100KB</SelectItem>
                <SelectItem value="small">100KB-1MB</SelectItem>
                <SelectItem value="medium">1MB-10MB</SelectItem>
                <SelectItem value="large">10MB-100MB</SelectItem>
                <SelectItem value="huge">{">"}100MB</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label>Tags</Label>
            <Input placeholder="Enter tags..." />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="shared" />
            <Label htmlFor="shared">Only shared files</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="starred" />
            <Label htmlFor="starred">Only starred files</Label>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Reset
          </Button>
          <Button onClick={() => onOpenChange(false)}>Apply Filters</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

FilterDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onOpenChange: PropTypes.func.isRequired,
}
