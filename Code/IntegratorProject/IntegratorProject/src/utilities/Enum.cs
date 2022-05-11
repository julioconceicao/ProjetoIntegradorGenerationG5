using System.Text.Json.Serialization;

namespace BlogPessoal.src.utilidades
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum PublicType
    {
        USER,
        ADMIN,
        ONG
    }
}
