
using System;
using System.Linq;
using System.Net.NetworkInformation;
using System.Reflection.PortableExecutable;
using System.Security.Cryptography;
using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Configuration.Json;
using Newtonsoft.Json.Linq;
using SqlSugar.Extensions;

namespace CoreCms.Net.Configuration
{
    /// <summary>
    /// ��ȡAppsettings������Ϣ
    /// </summary>
    public class AppSettingsHelper
    {
        static IConfiguration Configuration { get; set; }

        public AppSettingsHelper(string contentPath)
        {
            string Path = "appsettings.json";
            Configuration = new ConfigurationBuilder().SetBasePath(contentPath).Add(new JsonConfigurationSource { Path = Path, Optional = false, ReloadOnChange = true }).Build();
        }

        /// <summary>
        /// ��װҪ�������ַ�
        /// AppSettingsHelper.GetContent(new string[] { "JwtConfig", "SecretKey" });
        /// </summary>
        /// <param name="sections">�ڵ�����</param>
        /// <returns></returns>
        public static string GetContent(params string[] sections)
        {
            try
            {

                if (sections.Any())
                {
                    return Configuration[string.Join(":", sections)];
                }
            }
            catch (Exception) { }

            return "";
        }




        /// <summary>
        /// ��ȡ���� MAC������ ��ַ
        /// </summary>
        /// <param name="needToken">�Ƿ�ֻ��Ϊ����ȡkey����һ����ͬ���𻷾���ͬ�����д�</param>
        /// <returns></returns>
        public static string GetMACIp(bool needToken)
        {
            //���ؼ��������������Ϣ
            IPGlobalProperties computerProperties = IPGlobalProperties.GetIPGlobalProperties();
            //��ȡ����������������
            NetworkInterface[] nics = NetworkInterface.GetAllNetworkInterfaces();

            //��ȡ����������
            var HostName = computerProperties.HostName;
            //��ȡ����
            var DomainName = computerProperties.DomainName;

            if (nics == null || nics.Length < 1)
            {
                return "";
            }

            var MACIp = needToken ? HostName + DomainName : "";
            foreach (NetworkInterface adapter in nics)
            {
                var adapterName = adapter.Name;

                var adapterDescription = adapter.Description;
                var NetworkInterfaceType = adapter.NetworkInterfaceType;
                if (adapterName == "��������" || needToken)
                {
                    PhysicalAddress address = adapter.GetPhysicalAddress();
                    byte[] bytes = address.GetAddressBytes();

                    for (int i = 0; i < bytes.Length; i++)
                    {
                        MACIp += bytes[i].ToString("X2");

                        if (i != bytes.Length - 1)
                        {
                            MACIp += "-";
                        }
                    }
                }
            }

            return MACIp;
        }

        /// <summary>
        /// ��ȡ���Լ������
        /// </summary>
        /// <returns></returns>
        public static string GetHostName()
        {
            //���ؼ��������������Ϣ
            IPGlobalProperties computerProperties = IPGlobalProperties.GetIPGlobalProperties();

            //��ȡ����������
            var hostName = computerProperties.HostName;

            return !string.IsNullOrEmpty(hostName) ? hostName : "CoreShop.Professional";

        }




        /// <summary>
        /// תMD5
        /// </summary>
        /// <param name="str"></param>
        /// <returns></returns>
        public static string GetMachineRandomKey(string str)
        {
            MD5 md5 = MD5.Create();
            // ���ַ���ת�����ֽ�����
            byte[] byteOld = Encoding.UTF8.GetBytes(str);
            // ���ü��ܷ���
            byte[] byteNew = md5.ComputeHash(byteOld);
            // �����ܽ��ת��Ϊ�ַ���
            StringBuilder sb = new StringBuilder();
            foreach (byte b in byteNew)
            {
                // ���ֽ�ת����16���Ʊ�ʾ���ַ�����
                sb.Append(b.ToString("x2"));
            }
            // ���ؼ��ܵ��ַ���
            return sb.ToString();
        }


    }
}