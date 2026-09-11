import PropTypes from "prop-types"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export function DeleteDialog({ isOpen, onClose, onConfirm, itemName, permanent = false }) {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {permanent ? "Permanently delete" : "Delete"} {itemName}?
          </AlertDialogTitle>
          <AlertDialogDescription>
            {permanent
              ? "This action cannot be undone. This will permanently delete the document from the system."
              : "This document will be moved to the trash. You can restore it from there within 30 days."}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm} className={permanent ? "bg-destructive hover:bg-destructive/90" : ""}>
            {permanent ? "Delete Permanently" : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

DeleteDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  itemName: PropTypes.string.isRequired,
  permanent: PropTypes.bool,
}
