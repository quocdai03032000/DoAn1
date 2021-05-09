using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Code_KhoaLa.Models;
using System.Data;
using System.IO;
//using ProMvc.Model;

namespace Code_KhoaLa.Controllers
{
    public class DauSachController : Controller
    {
        QuanLyThuVienEntities ql = new QuanLyThuVienEntities();
        // GET: DauSach
        public ActionResult Index()
        {
   
            return View(ql.DauSaches.ToList());
        }

        public ActionResult Create()
        {
            DauSach ds = new DauSach();
            return View(ds);
        }
        [HttpPost]
        public ActionResult Create(string MaDauSach, DauSach sach)
        {
            try
            {
                if (sach.imageUploader != null)
                {
                    string fileName = Path.GetFileNameWithoutExtension(sach.imageUploader.FileName);
                    string extension = Path.GetExtension(sach.imageUploader.FileName);
                    fileName = fileName + extension;
                    sach.HinhAnh = "~/Content/imgsach/" + fileName;
                    sach.imageUploader.SaveAs(Path.Combine(Server.MapPath("~/Content/imgsach/"), fileName));
                }
                int maDauSach = int.Parse(MaDauSach);
                var check = ql.DauSaches.Where(a => a.MaDauSach == maDauSach).SingleOrDefault();

                if (check == null)
                {
                    ql.DauSaches.Add(sach);
                    ql.SaveChanges();
                    return RedirectToAction("Index");

                }
                else
                {
                    ModelState.AddModelError("", "Trùng Mã Đầu Sách");
                    return View(sach);
                }
            }
            catch
            {
                return View(Content("Dữ Liệu đã tồn tại!!"));
            }


        }

 

        public ActionResult Details(int id)
        {
            return View(ql.DauSaches.Where(s => s.MaDauSach == id).FirstOrDefault());
        }

        public ActionResult Edit(int id)
        {
            var std = ql.DauSaches.Where(s => s.MaDauSach == id)
                               .FirstOrDefault();

            return View(std);
          //  return View(ql.DauSaches.Single(s => s.MaDauSach == id));
        }
        [HttpPost]  
        public ActionResult Edit( DauSach sach)
        {
            if (ModelState.IsValid)
            {

                //write code to update student 

                ql.Entry(sach).State = System.Data.Entity.EntityState.Modified;
                ql.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(sach);
        }

        public ActionResult Delete(int id)
        {
            return View(ql.DauSaches.Where(s => s.MaDauSach == id).FirstOrDefault());
        }
        [HttpPost]
        public ActionResult Delete(int id, DauSach sach)
        {
            try
            {
                sach = ql.DauSaches.Where(s => s.MaDauSach == id).FirstOrDefault();
                ql.DauSaches.Remove(sach);
                ql.SaveChanges();
                return RedirectToAction("Index");
            }
            catch
            {
                return Content("Dữ Liệu Đã Liên Kết!! Không Thể xóa ");
            }
        }
    }
}