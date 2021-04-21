using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DOAN1_QLTV.Models;

namespace DOAN1_QLTV.Controllers
{
    public class TheSinhVienController : Controller
    {
        QuanLyThuVienEntities db = new QuanLyThuVienEntities();

        // GET: TheSinhVien
        public ActionResult Index()
        {
            return View(db.TheThuViens.ToList());
        }

        public ActionResult Login()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Login(TheThuVien sv)
        {
            /*try
            {
                foreach (var item in db.TheThuViens)
                {
                    if (sv.MaThe == item.MaThe )
                    {
                        if (sv.Password == item.Password)
                        {
                            return RedirectToAction("LoginSuccess", "DauSach");
                        }
                        else
                        {
                            ViewBag.Error_Login="Sai Password";
                        }
                    }
                }
            }
            catch (Exception)
            {
                ViewBag.error("error");
            }
            return View();*/

            try
            {
                var check = db.TheThuViens.Where(s => s.MaThe.Equals(sv.MaThe) && s.Password == sv.Password).FirstOrDefault();

                if (check == null)
                {
                    ViewBag.ErrorInfo = "Failed";
                    return View("Login");
                }
                else
                {
                    db.Configuration.ValidateOnSaveEnabled = false;
                    Session["MaThe"] = sv.MaThe;
                    Session["Password"] = sv.Password;
                    return RedirectToAction("LoginSuccess", "DauSach");
                }
            }
            catch (Exception)
            {
                return ViewBag.Error = "Login Failed";
            }
        }

        public ActionResult Register()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Register(TheThuVien sv)
        {
            try
            {
                db.TheThuViens.Add(sv);
                db.SaveChanges();
                return RedirectToAction("Login");
            }
            catch (Exception)
            {
                return Content("Error");
            }
        }

        public ActionResult ChangePassword_User(string id)
        {
            return View(db.TheThuViens.Where(m=>m.MaThe==id).FirstOrDefault());
        }
        [HttpPost]
        public ActionResult ChangePassword_User(string id, TheThuVien sv)
        {
            try
            {
                db.Entry(sv).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            catch (Exception)
            {
                return Content("Error!");
            }
        }

        public ActionResult Detail(string id)
        {
            TheThuVien sv = new TheThuVien();
            var mathe = db.TheThuViens.Where(s => s.MaThe.Equals(sv.MaThe)).FirstOrDefault();             
            return View(db.TheThuViens.ToList());
        }
    }
}