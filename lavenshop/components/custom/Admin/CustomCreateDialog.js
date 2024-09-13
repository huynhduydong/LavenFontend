"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { CustomAlertDialog } from "./CustomAlertDialog";

export function CustomCreateDialog({ itemTrigger, title, itemContent }) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{itemTrigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[1200px] w-2/3 bg-gray-100">
        <DialogHeader>
          <DialogTitle>
            <div className="text-xl mb-[8px]">{title}</div>
          </DialogTitle>
          <DialogDescription>{itemContent}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="flex flex-row gap-[12px]">
            <CustomAlertDialog
              onConfirm={() => {
                setOpen(false);
              }}
              itemTrigger={
                <button
                  className="text-blue-600 text-[16px] border-[1px] border-blue-600 hover:bg-blue-100 px-[16px] py-[8px] rounded-[6px] hover:opacity-80"
                  onClick={() => {}}
                >
                  Hủy bỏ
                </button>
              }
              title={"Bạn có chắc chắn muốn hủy thao tác này?"}
              content={
                "Những nội dung bạn sửa đổi sẽ bị mất. Thao tác này không thể hoàn tác!"
              }
            />
            <CustomAlertDialog
              itemTrigger={
                <button
                  className="text-white text-[16px] bg-blue-600 px-[16px] py-[8px] rounded-[6px] hover:opacity-80"
                  onClick={() => {}}
                >
                  Thêm
                </button>
              }
              title={"Bạn có chắc chắn muốn thêm sản phẩm này?"}
              content={"Sản phẩm sẽ được thêm vào danh sách sản phẩm."}
            />
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}